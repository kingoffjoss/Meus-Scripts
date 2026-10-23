import * as THREE from 'three';
export function createPet(){
 const root=new THREE.Group();root.name='Pingo';const body=new THREE.Group();body.name='Gelatina';root.add(body);
 const gel=new THREE.MeshPhysicalMaterial({color:'#72d8cd',roughness:.22,metalness:0,clearcoat:1,clearcoatRoughness:.13,transmission:.12,thickness:1.1,ior:1.34,attenuationColor:'#7de1d4',attenuationDistance:3});
 const ink=new THREE.MeshPhysicalMaterial({color:'#132c3b',roughness:.19,clearcoat:1}),shine=new THREE.MeshBasicMaterial({color:'#fffdf4'}),blush=new THREE.MeshStandardMaterial({color:'#f2a5a9',roughness:.62});
 function oval(parent,name,x,y,z,sx,sy,sz,material){const m=new THREE.Mesh(new THREE.SphereGeometry(1,48,32),material);m.name=name;m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
 const geometry=new THREE.SphereGeometry(1,96,64),p=geometry.attributes.position;
 for(let i=0;i<p.count;i++){const y=p.getY(i),r=.83*(1-.23*y);p.setXYZ(i,p.getX(i)*r+.12*Math.max(y,0)**2,.17+.86*(y+1),p.getZ(i)*r*.86);}geometry.computeVertexNormals();const skin=new THREE.Mesh(geometry,gel);skin.name='Corpo';skin.castShadow=true;body.add(skin);
 const eyes=[],cheeks=[];
 for(const side of [-1,1]){
  const eye=new THREE.Group();eye.name='Olho_'+(side<0?'E':'D');eye.position.set(side*.265,1.04,.714);eye.rotation.y=side*.17;body.add(eye);
  oval(eye,'Pupila_'+side,0,0,0,.091,.132,.047,ink);oval(eye,'Brilho_'+side,-.024,.046,.041,.023,.028,.009,shine);oval(eye,'Pontinho_'+side,.027,-.036,.044,.009,.011,.005,shine);eyes.push(eye);
  const cheek=oval(body,'Bochecha_'+side,side*.435,.86,.648,.085,.038,.013,blush);cheek.rotation.y=side*.38;cheeks.push(cheek);
 }
 const mouth=new THREE.Group();mouth.name='Sorriso';mouth.position.set(0,.866,.758);body.add(mouth);
 const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.078,.025,0),new THREE.Vector3(0,-.07,.015),new THREE.Vector3(.078,.025,0));const smile=new THREE.Mesh(new THREE.TubeGeometry(curve,28,.014,8,false),ink);mouth.add(smile);
 const open=oval(mouth,'Bocejo',0,-.012,.008,.054,.07,.018,ink);open.visible=false;
 const feet=[-1,1].map(side=>oval(root,'Pezinho_'+side,side*.405,.14,.21,.207,.14,.28,gel));
 const bubbles=[];for(const [i,x,y,z,r] of [[0,-.43,1.34,.45,.037],[1,.46,.62,.61,.023],[2,-.24,.51,.65,.018]]){const m=oval(body,'Bolhinha_'+i,x,y,z,r,r,r,new THREE.MeshPhysicalMaterial({color:'#c4f4e9',roughness:.17,transparent:true,opacity:.48,depthWrite:false}));bubbles.push(m);}
 let state='idle',started=0;
 function setState(next,t){state=next;started=t;}
 function pose(t,forced=null){
  const age=t-started,s=forced||state;let sx=1,sy=1,sz=1,lift=0,tilt=0;
  const breath=Math.sin(t*Math.PI*2/3)*.012;sx+=breath;sy-=breath*.65;
  if(s==='jump'){
   const u=Math.min(age/1.4,1);
   if(u<.2){const a=Math.sin(u/.2*Math.PI*.5);sx+=a*.14;sy-=a*.23;}
   else if(u<.77){const q=(u-.2)/.57;lift=Math.sin(q*Math.PI)*.72;sy+=Math.sin(q*Math.PI)*.13;sx-=Math.sin(q*Math.PI)*.055;tilt=Math.sin(q*Math.PI*2)*.035;}
   else {const q=(u-.77)/.23,a=Math.sin(q*Math.PI)*Math.exp(-q*1.3);sx+=a*.19;sy-=a*.22;}
   if(age>1.4&&!forced)state='idle';
  } else if(s==='happy') {const a=Math.sin(Math.min(age/2,1)*Math.PI);lift=Math.abs(Math.sin(age*8))*a*.09;tilt=Math.sin(age*7)*a*.075;sx+=a*.025;sy+=a*.035;if(age>2&&!forced)state='idle';}
  else if(s==='sleep'){sy=.81+Math.sin(t*1.5)*.018;sx=1.10;sz=1.04;tilt=-.035;}
  else if(s==='eat'){const a=Math.sin(age*14);sx+=a*.025;sy-=a*.018;tilt=Math.sin(age*6)*.018;if(age>2.5&&!forced)state='idle';}
  root.position.y=lift;root.rotation.z=tilt;body.scale.set(sx,sy,sz);body.rotation.y=Math.sin(t*.65)*.025;
  const blink=((t%5.3)>4.91)?Math.max(.045,Math.abs((t%5.3)-5.07)/.16):1;
  eyes.forEach(e=>{e.scale.y=s==='sleep'?.065:blink;e.rotation.z=s==='happy'?Math.sin(age*5)*.04:0;});
  mouth.scale.set(1,s==='happy'?1.22:1,1);smile.visible=s!=='eat';open.visible=s==='eat';open.scale.y=.07*(.7+.3*Math.sin(age*14));
  feet.forEach((f,i)=>{f.position.y=.14;f.rotation.x=lift>0?-.18:0;f.rotation.z=s==='happy'?Math.sin(age*7+i*Math.PI)*.12:0;});
  return state;
 }
 pose(0);return{root,body,eyes,feet,mouth,setState,pose};
}
