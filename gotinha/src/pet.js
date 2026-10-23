import {poseMega} from './mega-motions.js';
import {addNewProps,poseNew} from './new-motions.js';
import {polishPose} from './polish.js';
import * as THREE from 'three';
import {addExtras,poseExtras,animations} from './extras.js';
export function createPet(){
 const root=new THREE.Group();root.name='Pingo';const body=new THREE.Group();body.name='Gelatina';root.add(body);
 const gel=new THREE.MeshPhysicalMaterial({color:'#60cebd',roughness:.17,metalness:0,clearcoat:1,clearcoatRoughness:.12,transmission:.28,thickness:1.25,ior:1.36,iridescence:.08,iridescenceIOR:1.32,sheen:.15,sheenRoughness:.45,envMapIntensity:.9,attenuationColor:'#7de1d4',attenuationDistance:3});
 const ink=new THREE.MeshPhysicalMaterial({color:'#132c3b',roughness:.19,clearcoat:1}),shine=new THREE.MeshBasicMaterial({color:'#fffdf4'}),blush=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{tint:{value:new THREE.Color('#f198b1')}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform vec3 tint;varying vec2 vUv;void main(){float d=length((vUv-0.5)*2.0);float a=(1.0-smoothstep(0.15,1.0,d))*0.5;gl_FragColor=vec4(tint,a);\n#include <tonemapping_fragment>\n#include <colorspace_fragment>\n}'} );
 const ovalGeometry=new THREE.SphereGeometry(1,48,32);ovalGeometry.setAttribute('color',new THREE.Float32BufferAttribute(new Float32Array(ovalGeometry.attributes.position.count*3).fill(1),3));
 function oval(parent,name,x,y,z,sx,sy,sz,material){const m=new THREE.Mesh(ovalGeometry,material);m.name=name;m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
 const geometry=new THREE.SphereGeometry(1,96,64),p=geometry.attributes.position;
 for(let i=0;i<p.count;i++){const y=p.getY(i),h=(y+1)/2,r=.96*(1-.53*h**2.5),curl=THREE.MathUtils.smoothstep(h,.68,1);p.setXYZ(i,p.getX(i)*r-.53*curl*curl,.17+1.94*h-.15*curl**6,p.getZ(i)*r*.88);}geometry.computeVertexNormals();const sway=p.clone(),squish=p.clone();for(let i=0;i<p.count;i++){const h=Math.max(0,(p.getY(i)-.17)/1.72);sway.setX(i,p.getX(i)+.065*Math.sin(h*Math.PI*.8)*h);squish.setY(i,p.getY(i)-.045*Math.sin(h*Math.PI));squish.setX(i,p.getX(i)*(1+.025*Math.sin(h*Math.PI)));}geometry.morphAttributes.position=[sway,squish];const skin=new THREE.Mesh(geometry,gel);skin.name='Corpo';skin.castShadow=true;body.add(skin);
 const tint=[];for(let i=0;i<p.count;i++){const h=(p.getY(i)-.17)/1.72;const a=.8+.2*Math.max(0,Math.min(1,h));tint.push(a,a,Math.min(1,a+.015));}geometry.setAttribute('color',new THREE.Float32BufferAttribute(tint,3));gel.vertexColors=true;const eyeReflection=new THREE.MeshPhysicalMaterial({color:'#628fa1',roughness:.28,transparent:true,opacity:.65});
 const eyes=[],cheeks=[];
 for(const side of [-1,1]){
  const eye=new THREE.Group();eye.name='Olho_'+(side<0?'E':'D');eye.position.set(side*.265,1.04,.714);eye.rotation.y=side*.17;body.add(eye);
  oval(eye,'Pupila_'+side,0,0,0,.113,.153,.062,ink);oval(eye,'Brilho_'+side,-.032,.057,.061,.028,.033,.008,shine);oval(eye,'Pontinho_'+side,.029,-.035,.065,.011,.013,.004,shine);oval(eye,'Reflexo_Suave_'+side,.021,-.065,.045,.039,.018,.006,eyeReflection);eyes.push(eye);
  const cheek=new THREE.Mesh(new THREE.PlaneGeometry(.27,.17),blush);cheek.name='Bochecha_'+side;cheek.position.set(side*.435,.86,.704);body.add(cheek);cheek.rotation.y=side*.38;cheeks.push(cheek);
 }
 const mouth=new THREE.Group();mouth.name='Sorriso';mouth.position.set(0,.866,.758);body.add(mouth);
 const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.09,.025,0),new THREE.Vector3(0,-.07,.015),new THREE.Vector3(.09,.025,0));const smile=new THREE.Mesh(new THREE.TubeGeometry(curve,28,.018,8,false),ink);mouth.add(smile);
 smile.name='Sorriso_Curva';
 const open=oval(mouth,'Bocejo',0,-.012,.008,.054,.07,.018,ink);open.scale.set(.0001,.0001,.0001);
 const arms=[-1,1].map(side=>{const arm=new THREE.Group();arm.name='Bracinho_'+side;arm.position.set(side*.67,.75,.10);body.add(arm);oval(arm,'Maozinha_'+side,side*.12,-.11,.10,.185,.285,.18,gel);return arm;});
 const armLinks=[-1,1].map(side=>oval(body,'Ligacao_Braco_'+side,side*.70,.76,.12,.075,.15,.075,gel));
 const feet=[-1,1].map(side=>oval(root,'Pezinho_'+side,side*.405,.14,.21,.24,.15,.32,gel));
 const bubbles=[];const bubbleMat=new THREE.MeshPhysicalMaterial({color:'#d9fff5',roughness:.08,metalness:0,transparent:true,opacity:.27,clearcoat:1,depthWrite:false});for(let i=0;i<24;i++){const h=.16+((i*.381966)%1)*.68,y=.17+1.94*h,r=.96*(1-.53*h**2.5)*Math.sqrt(1-(h*2-1)**2),a=i*2.39996,rad=.35+.45*((i*.618)%1),x=Math.cos(a)*r*rad,z=Math.sin(a)*r*.88*rad;const size=.012+(i%5)*.006;const m=oval(body,'Bolhinha_'+i,x,y,z,size,size,size,bubbleMat);bubbles.push(m);}
 const food=new THREE.Group();food.name='Lanchinho';root.add(food);
 oval(food,'Biscoito',0,0,0,.16,.16,.045,new THREE.MeshStandardMaterial({color:'#dba764',roughness:.8}));
 for(const [i,x,y] of [[0,-.065,.06],[1,.055,.075],[2,.045,-.065],[3,-.07,-.06]])oval(food,'Chocolate_'+i,x,y,.044,.022,.025,.01,new THREE.MeshStandardMaterial({color:'#5d3830',roughness:.7}));
 food.scale.setScalar(.0001);
 const extras=addExtras(root),newProps=addNewProps(root);
 // Protect the palm against the actual cross section of the remodelled body.
 const sections=[];for(let row=0;row<=64;row++){let minX=Infinity,maxX=-Infinity,maxZ=0,y=0;for(let col=0;col<=96;col++){const i=row*97+col;minX=Math.min(minX,p.getX(i));maxX=Math.max(maxX,p.getX(i));maxZ=Math.max(maxZ,Math.abs(p.getZ(i)));y+=p.getY(i);}sections.push({y:y/97,cx:(minX+maxX)/2,rx:(maxX-minX)/2,rz:maxZ});}sections.sort((a,b)=>a.y-b.y);const palmPoint=new THREE.Vector3();
 function protectHands(){for(let sideIndex=0;sideIndex<arms.length;sideIndex++){const arm=arms[sideIndex];const palm=arm.children[0];palmPoint.copy(palm.position).multiply(arm.scale).applyQuaternion(arm.quaternion).add(arm.position);const py=palmPoint.y;if(py<sections[1].y||py>sections.at(-2).y)continue;let k=1;while(k<sections.length-1&&sections[k].y<py)k++;const a=sections[k-1],b=sections[k],u=THREE.MathUtils.clamp((py-a.y)/Math.max(.00001,b.y-a.y),0,1),cx=THREE.MathUtils.lerp(a.cx,b.cx,u),pad=.22*Math.max(arm.scale.x,arm.scale.z),rx=THREE.MathUtils.lerp(a.rx,b.rx,u)+pad,rz=THREE.MathUtils.lerp(a.rz,b.rz,u)+pad,dx=palmPoint.x-cx,dz=palmPoint.z,n=Math.hypot(dx/rx,dz/rz);if(n<1){const factor=1/Math.max(.001,n);arm.position.x+=dx*(factor-1);arm.position.z+=dz*(factor-1);}palmPoint.copy(palm.position).multiply(arm.scale).applyQuaternion(arm.quaternion).add(arm.position);const shoulder=new THREE.Vector3((sideIndex?1:-1)*.70,.76,.12),delta=palmPoint.clone().sub(shoulder),link=armLinks[sideIndex];link.position.copy(shoulder).add(palmPoint).multiplyScalar(.5);link.scale.set(.075,Math.max(.03,delta.length()/2),.075);link.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());}}
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
  const cycle=Math.floor(t/7.7),blinkPhase=t%7.7,blinkAt=3.2+Math.sin(cycle*2.13)*1.35,d=blinkPhase-blinkAt,close=d>=0&&d<.11?1-d/.11:d>=.11&&d<.28?(d-.11)/.17:1,double=cycle%3===1&&d>.46&&d<.66?Math.abs(d-.56)/.1:1,blink=Math.max(.045,Math.min(close,double));
  eyes.forEach(e=>{e.scale.y=s==='sleep'?.065:blink;e.rotation.z=s==='happy'?Math.sin(age*5)*.04:0;});
  mouth.scale.set(1,s==='happy'?1.22:1,1);smile.scale.setScalar(s==='eat'||s==='sleep'?.0001:1);
  const bite=(age%4)/4,reach=.5-.5*Math.cos(bite*Math.PI*2),chew=THREE.MathUtils.smoothstep(reach,.35,.75);
  open.scale.set(s==='eat'?.043:s==='sleep'?.025:.0001,s==='eat'?.018+chew*(.018+.018*Math.sin(age*Math.PI*8)):s==='sleep'?.028+.004*Math.sin(age*Math.PI/2):.0001,s==='eat'||s==='sleep'?.018:.0001);
  food.scale.setScalar(s==='eat'?.9-reach*.30:.0001);food.position.set(0,.63+.19*reach,1.04-.12*reach);food.rotation.set(-reach*.12,.15,Math.sin(age*Math.PI/2)*.08);
  arms.forEach((arm,i)=>{const side=i===0?-1:1;arm.scale.setScalar(s==='eat'?.6:1);arm.position.set(side*.67,.75,.10);arm.rotation.set(0,0,-side*.18);if(s==='walk'){arm.rotation.x=Math.sin(age*Math.PI*4+i*Math.PI)*.30;arm.rotation.z=-side*.22;}else if(s==='sleep'){arm.position.set(side*.56,.62,.28);arm.rotation.z=-side*.65;arm.rotation.x=-.25;}else if(s==='eat'){arm.position.set(side*.31,.77+.10*reach,.88-.10*reach);arm.rotation.z=-side*1.6;arm.rotation.x=-.1;}else if(s==='happy'){arm.rotation.z=side*(.75+Math.sin(age*7)*.15);}else if(s==='jump'){arm.rotation.z=side*lift*.65;}});
  feet.forEach((f,i)=>{const side=i===0?-1:1,step=age*Math.PI*4+i*Math.PI,direction=Math.tanh(Math.cos(age*Math.PI/2)*4),phase=(age*2+i*.5)%1,swing=phase>.6?(phase-.6)/.4:0,stride=phase<.6?.09-.18*phase/.6:-.09+.18*(.5-.5*Math.cos(swing*Math.PI));f.position.set(side*.405+(s==='walk'?stride*direction:0),.14+(s==='walk'?Math.sin(swing*Math.PI)*.075:0),.21);f.scale.set(.24,s==='sleep'?.105:.15,.32);f.rotation.x=lift>.1?-.18:0;f.rotation.z=s==='walk'?Math.sin(step)*.06:s==='happy'?Math.sin(age*7+i*Math.PI)*.12:0;});
  poseExtras(pet,s,age);poseNew(pet,s,age);poseMega(pet,s,age);polishPose(pet,s,age);protectHands();
  return state;
 }
 const pet={root,body,skin,eyes,arms,feet,mouth,smile,open,food,extras,newProps,setState,pose,protectHands};pose(0);return pet;
}

