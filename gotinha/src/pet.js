import {addNewProps,poseNew} from './new-motions.js';
import {polishPose} from './polish.js';
import * as THREE from 'three';
import {addExtras,poseExtras,animations} from './extras.js';
export function createPet(){
 const root=new THREE.Group();root.name='Pingo';const body=new THREE.Group();body.name='Gelatina';root.add(body);
 const gel=new THREE.MeshPhysicalMaterial({color:'#72d8cd',roughness:.25,metalness:0,clearcoat:.85,clearcoatRoughness:.18,transmission:.18,thickness:1.25,ior:1.36,iridescence:.08,iridescenceIOR:1.32,sheen:.15,sheenRoughness:.45,envMapIntensity:.8,attenuationColor:'#7de1d4',attenuationDistance:3});
 const ink=new THREE.MeshPhysicalMaterial({color:'#132c3b',roughness:.19,clearcoat:1}),shine=new THREE.MeshBasicMaterial({color:'#fffdf4'}),blush=new THREE.MeshStandardMaterial({color:'#f2a5a9',roughness:.62});
 const ovalGeometry=new THREE.SphereGeometry(1,48,32);
 function oval(parent,name,x,y,z,sx,sy,sz,material){const m=new THREE.Mesh(ovalGeometry,material);m.name=name;m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
 const geometry=new THREE.SphereGeometry(1,96,64),p=geometry.attributes.position;
 for(let i=0;i<p.count;i++){const y=p.getY(i),r=.83*(1-.23*y);p.setXYZ(i,p.getX(i)*r+.12*Math.max(y,0)**2,.17+.86*(y+1),p.getZ(i)*r*.86);}geometry.computeVertexNormals();const sway=p.clone(),squish=p.clone();for(let i=0;i<p.count;i++){const h=Math.max(0,(p.getY(i)-.17)/1.72);sway.setX(i,p.getX(i)+.065*Math.sin(h*Math.PI*.8)*h);squish.setY(i,p.getY(i)-.045*Math.sin(h*Math.PI));squish.setX(i,p.getX(i)*(1+.025*Math.sin(h*Math.PI)));}geometry.morphAttributes.position=[sway,squish];const skin=new THREE.Mesh(geometry,gel);skin.name='Corpo';skin.castShadow=true;body.add(skin);
 const eyes=[],cheeks=[];
 for(const side of [-1,1]){
  const eye=new THREE.Group();eye.name='Olho_'+(side<0?'E':'D');eye.position.set(side*.265,1.04,.714);eye.rotation.y=side*.17;body.add(eye);
  oval(eye,'Pupila_'+side,0,0,0,.091,.132,.047,ink);oval(eye,'Brilho_'+side,-.024,.046,.041,.023,.028,.009,shine);oval(eye,'Pontinho_'+side,.027,-.036,.044,.009,.011,.005,shine);eyes.push(eye);
  const cheek=oval(body,'Bochecha_'+side,side*.435,.86,.648,.085,.038,.013,blush);cheek.rotation.y=side*.38;cheeks.push(cheek);
 }
 const mouth=new THREE.Group();mouth.name='Sorriso';mouth.position.set(0,.866,.758);body.add(mouth);
 const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.078,.025,0),new THREE.Vector3(0,-.07,.015),new THREE.Vector3(.078,.025,0));const smile=new THREE.Mesh(new THREE.TubeGeometry(curve,28,.014,8,false),ink);mouth.add(smile);
 smile.name='Sorriso_Curva';
 const open=oval(mouth,'Bocejo',0,-.012,.008,.054,.07,.018,ink);open.scale.set(.0001,.0001,.0001);
 const arms=[-1,1].map(side=>{const arm=new THREE.Group();arm.name='Bracinho_'+side;arm.position.set(side*.67,.75,.10);body.add(arm);oval(arm,'Maozinha_'+side,side*.12,-.11,.10,.15,.25,.15,gel);return arm;});
 const feet=[-1,1].map(side=>oval(root,'Pezinho_'+side,side*.405,.14,.21,.207,.14,.28,gel));
 const bubbles=[];for(const [i,x,y,z,r] of [[0,-.43,1.34,.45,.037],[1,.46,.62,.61,.023],[2,-.24,.51,.65,.018]]){const m=oval(body,'Bolhinha_'+i,x,y,z,r,r,r,new THREE.MeshPhysicalMaterial({color:'#c4f4e9',roughness:.17,transparent:true,opacity:.48,depthWrite:false}));bubbles.push(m);}
 const food=new THREE.Group();food.name='Lanchinho';root.add(food);
 oval(food,'Biscoito',0,0,0,.16,.16,.045,new THREE.MeshStandardMaterial({color:'#dba764',roughness:.8}));
 for(const [i,x,y] of [[0,-.065,.06],[1,.055,.075],[2,.045,-.065],[3,-.07,-.06]])oval(food,'Chocolate_'+i,x,y,.044,.022,.025,.01,new THREE.MeshStandardMaterial({color:'#5d3830',roughness:.7}));
 food.scale.setScalar(.0001);
 const extras=addExtras(root),newProps=addNewProps(root);
 const rest=[];root.traverse(n=>rest.push({n,p:n.position.clone(),q:n.quaternion.clone(),s:n.scale.clone()}));
 let state='idle',started=0;
 function setState(next,t){state=next;started=t;}
 function pose(t,forced=null){
  for(const r of rest){r.n.position.copy(r.p);r.n.quaternion.copy(r.q);r.n.scale.copy(r.s);}
  const age=Math.max(0,t-started),s=forced||state;let sx=1,sy=1,sz=1,lift=0,tilt=0,travel=0;
  root.rotation.set(0,0,0);body.rotation.set(0,0,0);mouth.rotation.set(0,0,0);mouth.position.set(0,.866,.758);eyes.forEach((e,i)=>{e.position.x=(i===0?-1:1)*.265;e.scale.set(1,1,1);});
  const breath=Math.sin(t*Math.PI*2/3)*.012;sx+=breath;sy-=breath*.65;
  if(s==='jump'){
   const u=Math.min(age/1.4,1);
   if(u<.2){const a=Math.sin(u/.2*Math.PI*.5);sx+=a*.14;sy-=a*.23;}
   else if(u<.77){const q=(u-.2)/.57;lift=Math.sin(q*Math.PI)*.72;sy+=Math.sin(q*Math.PI)*.13;sx-=Math.sin(q*Math.PI)*.055;tilt=Math.sin(q*Math.PI*2)*.035;}
   else {const q=(u-.77)/.23,a=Math.sin(q*Math.PI)*Math.exp(-q*1.3);sx+=a*.19;sy-=a*.22;}
   if(age>1.4&&!forced)state='idle';
  } else if(s==='happy') {const a=Math.sin(Math.min(age/2,1)*Math.PI);lift=Math.abs(Math.sin(age*8))*a*.09;tilt=Math.sin(age*7)*a*.075;sx+=a*.025;sy+=a*.035;if(age>2&&!forced)state='idle';}
  else if(s==='sleep'){const a=Math.sin(age*Math.PI/2);sy=.73+a*.018;sx=1.16-a*.008;sz=1.06;tilt=-.035+a*.008;}
  else if(s==='eat'){const gate=THREE.MathUtils.smoothstep(.5-.5*Math.cos(age*Math.PI/2),.35,.75),a=Math.sin(age*Math.PI*8)*gate;sx+=a*.018;sy-=a*.022;tilt=Math.sin(age*Math.PI/2)*.012;if(age>8&&!forced)state='idle';}
  else if(s==='walk'){const step=age*Math.PI*4;travel=Math.asin(.94*Math.sin(age*Math.PI/2))/Math.asin(.94)*.75;lift=(1-Math.cos(step*2))*.012;sx+=Math.cos(step*2)*.012;sy-=Math.cos(step*2)*.016;tilt=Math.sin(step)*.027;}
  root.position.set(travel,lift,0);root.rotation.z=tilt;body.scale.set(sx,sy,sz);body.rotation.y=s==='walk'?Math.cos(age*Math.PI/2)*.12:animations.some(([id])=>id===s)?0:Math.sin(t*.65)*.025;
  const blinkPhase=age%6,blink=blinkPhase>5.35&&blinkPhase<5.67?Math.max(.045,Math.abs(blinkPhase-5.51)/.16):1;
  eyes.forEach(e=>{e.scale.y=s==='sleep'?.065:blink;e.rotation.z=s==='happy'?Math.sin(age*5)*.04:0;});
  mouth.scale.set(1,s==='happy'?1.22:1,1);smile.scale.setScalar(s==='eat'||s==='sleep'?.0001:1);
  const bite=(age%4)/4,reach=.5-.5*Math.cos(bite*Math.PI*2),chew=THREE.MathUtils.smoothstep(reach,.35,.75);
  open.scale.set(s==='eat'?.043:s==='sleep'?.025:.0001,s==='eat'?.018+chew*(.018+.018*Math.sin(age*Math.PI*8)):s==='sleep'?.028+.004*Math.sin(age*Math.PI/2):.0001,s==='eat'||s==='sleep'?.018:.0001);
  food.scale.setScalar(s==='eat'?.9-reach*.30:.0001);food.position.set(0,.63+.19*reach,1.04-.12*reach);food.rotation.set(-reach*.12,.15,Math.sin(age*Math.PI/2)*.08);
  arms.forEach((arm,i)=>{const side=i===0?-1:1;arm.scale.setScalar(s==='eat'?.6:1);arm.position.set(side*.67,.75,.10);arm.rotation.set(0,0,-side*.18);if(s==='walk'){arm.rotation.x=Math.sin(age*Math.PI*4+i*Math.PI)*.30;arm.rotation.z=-side*.22;}else if(s==='sleep'){arm.position.set(side*.56,.62,.28);arm.rotation.z=-side*.65;arm.rotation.x=-.25;}else if(s==='eat'){arm.position.set(side*.31,.77+.10*reach,.88-.10*reach);arm.rotation.z=-side*1.6;arm.rotation.x=-.1;}else if(s==='happy'){arm.rotation.z=side*(.75+Math.sin(age*7)*.15);}else if(s==='jump'){arm.rotation.z=side*lift*.65;}});
  feet.forEach((f,i)=>{const side=i===0?-1:1,step=age*Math.PI*4+i*Math.PI,direction=Math.tanh(Math.cos(age*Math.PI/2)*4),phase=(age*2+i*.5)%1,swing=phase>.6?(phase-.6)/.4:0,stride=phase<.6?.09-.18*phase/.6:-.09+.18*(.5-.5*Math.cos(swing*Math.PI));f.position.set(side*.405+(s==='walk'?stride*direction:0),.14+(s==='walk'?Math.sin(swing*Math.PI)*.075:0),.21);f.scale.set(.207,s==='sleep'?.105:.14,.28);f.rotation.x=lift>.1?-.18:0;f.rotation.z=s==='walk'?Math.sin(step)*.06:s==='happy'?Math.sin(age*7+i*Math.PI)*.12:0;});
  poseExtras(pet,s,age);poseNew(pet,s,age);polishPose(pet,s,age);
  return state;
 }
 const pet={root,body,skin,eyes,arms,feet,mouth,smile,open,food,extras,newProps,setState,pose};pose(0);return pet;
}
