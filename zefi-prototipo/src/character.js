import * as THREE from 'three';
import {wingPose,blinkAt,mix} from './motion.js';
import {organic} from './organic.js';
export function createZefi(){
 const root=new THREE.Group();root.name='Zefi';
 const mat=(color,roughness=.75)=>new THREE.MeshPhysicalMaterial({color,roughness,metalness:0,clearcoat:.05});
 const cream=mat('#f6efe6'),coat=mat('#c4b0d7'),pink=mat('#bc8193'),inner=mat('#be9aac'),dark=mat('#34202d'),black=mat('#080f1a',.08),white=mat('#ffffff',.12),iris=mat('#3da3a9',.22);
 const sphere=new THREE.SphereGeometry(1,36,24),j=(p,x,y,z,name)=>{const g=new THREE.Group();g.position.set(x,y,z);g.name=name;p.add(g);return g;};
 function mesh(p,g,m){const o=new THREE.Mesh(g,m);o.castShadow=true;o.receiveShadow=true;p.add(o);return o;}
 function blob(p,x,y,z,sx,sy,sz,m){const o=mesh(p,sphere,m);o.position.set(x,y,z);o.scale.set(sx,sy,sz);return o;}
 const colorCream=new THREE.Color('#f4ece4'),colorCoat=new THREE.Color('#bdabd0');
 const torso=j(root,0,1.02,0,'body');
 mesh(torso,organic([[0,0,0,.48,.62,.42],[0,.35,.06,.38,.43,.35],[0,-.29,-.12,.49,.4,.43]],[[-.6,-.78,-.62],[.6,.85,.57]],42,p=>colorCoat.clone().lerp(colorCream,THREE.MathUtils.smoothstep(p.z,.12,.33)*Math.max(0,1-Math.abs(p.x)/.48))),new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.84}));
 const head=j(torso,0,.77,.13,'head');
 mesh(head,organic([[0,.02,0,.57,.51,.46],[0,-.17,.19,.51,.32,.39],[-.32,-.13,.2,.29,.24,.28],[.32,-.13,.2,.29,.24,.28],[0,-.27,.43,.27,.14,.23]],[[-.72,-.55,-.54],[.72,.61,.74]],48,p=>colorCoat.clone().lerp(colorCream,Math.max(THREE.MathUtils.smoothstep(-p.y,-.02,.22),THREE.MathUtils.smoothstep(p.z,.05,.32)*(.65+.35*THREE.MathUtils.smoothstep(Math.abs(p.x),.06,.22))))),new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.79}));
 for(const side of [-1,1]){
  const socket=j(head,side*.267,.015,.403,'eye-'+side);socket.rotation.y=side*.33;blob(socket,0,0,0,.187,.213,.077,dark);
  const eye=j(socket,0,0,.027,'blink-'+side);blob(eye,0,0,0,.166,.192,.066,cream);blob(eye,-side*.009,-.005,.05,.135,.164,.04,iris);blob(eye,-side*.009,.012,.082,.086,.123,.018,black);blob(eye,-.042,.079,.104,.033,.037,.009,white);blob(eye,.049,-.057,.099,.012,.014,.006,white);
  const brow=blob(socket,0,.198,-.025,.195,.043,.08,cream);brow.rotation.z=-side*.11;
 }
 const muzzle=j(head,0,-.23,.49,'muzzle');blob(muzzle,-.105,-.005,.012,.15,.095,.105,cream);blob(muzzle,.105,-.005,.012,.15,.095,.105,cream);
 const noseShape=new THREE.Shape();noseShape.moveTo(-.078,.029);noseShape.quadraticCurveTo(0,.065,.078,.029);noseShape.quadraticCurveTo(.075,.005,0,-.052);noseShape.quadraticCurveTo(-.075,.005,-.078,.029);
 const nose=mesh(muzzle,new THREE.ExtrudeGeometry(noseShape,{depth:.028,bevelEnabled:true,bevelSize:.012,bevelThickness:.012,bevelSegments:3,steps:1}),pink);nose.position.set(0,.023,.114);
 const mouth=new THREE.CatmullRomCurve3([new THREE.Vector3(-.13,-.064,.087),new THREE.Vector3(-.06,-.105,.112),new THREE.Vector3(0,-.115,.122),new THREE.Vector3(.06,-.105,.112),new THREE.Vector3(.13,-.064,.087)]);mesh(muzzle,new THREE.TubeGeometry(mouth,28,.009,6,false),dark);
 const featherMats=['#bcabd6','#c7b6df','#d7c8e9','#e4d7eb','#ac96c8'].map(c=>mat(c,.67));
 function featherGeo(length,width){const pos=[],ind=[],rows=22,rings=10;for(let a=0;a<=rows;a++){const u=a/rows,span=width*Math.pow(Math.sin(Math.PI*u),.58);for(let b=0;b<rings;b++){const t=b/rings*Math.PI*2;pos.push(u*length,Math.cos(t)*span,.035*u*u+Math.sin(t)*span*.17+.04*Math.sin(u*Math.PI));}}for(let a=0;a<rows;a++)for(let b=0;b<rings;b++){const c=a*rings+b,d=a*rings+(b+1)%rings;ind.push(c,d,c+rings,d,d+rings,c+rings);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(ind);g.computeVertexNormals();return g;}
 function feather(p,x,y,z,length,width,angle,i){const g=j(p,x,y,z,'feather');g.rotation.z=angle;mesh(g,featherGeo(length,width),featherMats[i%featherMats.length]);return g;}
 const wings=[];
 for(const side of [-1,1]){
  const holder=j(torso,side*.32,.35,-.19,'wing-root-'+side);holder.scale.x=side;
  const shoulder=new THREE.Bone();shoulder.name='wing-shoulder-'+side;holder.add(shoulder);
  const elbow=new THREE.Bone();elbow.position.x=.6;elbow.name='wing-elbow-'+side;shoulder.add(elbow);
  const wrist=new THREE.Bone();wrist.position.x=.59;wrist.name='wing-wrist-'+side;elbow.add(wrist);
  const pos=[],idx=[],weights=[],bones=[],nx=30,ny=12;
  for(let x=0;x<=nx;x++)for(let y=0;y<=ny;y++){const u=x/nx,v=y/ny,px=u*1.55,depth=.18+.48*Math.sin(u*Math.PI*.83);pos.push(px,.1-v*depth,.06+Math.sin(v*Math.PI)*.105);const b=px<.6?0:1,blend=THREE.MathUtils.smoothstep(px,b===0?.32:.92,b===0?.86:1.42);bones.push(blend===1?0:b,blend===0?0:b+1,0,0);weights.push(1-blend,blend,0,0);}
  for(let x=0;x<nx;x++)for(let y=0;y<ny;y++){const a=x*(ny+1)+y,b=a+ny+1;idx.push(a,b,a+1,b,b+1,a+1);}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setIndex(idx);geo.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(bones,4));geo.setAttribute('skinWeight',new THREE.Float32BufferAttribute(weights,4));geo.computeVertexNormals();
  const surfaceMat=mat('#d2c0e0');surfaceMat.side=THREE.DoubleSide;const surface=new THREE.SkinnedMesh(geo,surfaceMat);surface.name='continuous-wing-'+side;surface.castShadow=true;holder.add(surface);root.updateMatrixWorld(true);surface.bind(new THREE.Skeleton([shoulder,elbow,wrist]));
  for(let i=0;i<7;i++)feather(shoulder,.06+i*.085,-.015,.13,.42+i*.025,.105,-1.12+i*.065,3+i%2);
  for(let i=0;i<8;i++)feather(elbow,-.1+i*.085,-.035,.13,.64+i*.018,.12,-1.26+i*.065,i%3);
  const primaries=[];for(let i=0;i<10;i++){const f=feather(wrist,-.13+i*.036,-.04-i*.018,.12+i*.002,.88+(1-i/9)*.2,.145,.15-i*.16,i%3);f.name='wing-'+side+'-primary-'+i;primaries.push(f);}
  for(let i=0;i<7;i++)feather(wrist,-.05+i*.035,.01,.2,.47,.09,.04-i*.2,3+i%2);
  for(let row=0;row<2;row++)for(let i=0;i<6;i++)feather(shoulder,.02+i*.12,-row*.09,.23+row*.014,.29,.09,-.9+i*.08,3);
  wings.push({shoulder,elbow,wrist,primaries,holder,surface,side});
 }
 const ears=[];
 for(const side of [-1,1]){
  const ear=j(head,side*.36,.36,-.035,'ear-'+side);ear.rotation.z=-side*.3;
  const shape=new THREE.Shape();shape.moveTo(-.19,-.045);shape.bezierCurveTo(-.26,.19,-.12,.53,.015,.7);shape.bezierCurveTo(.13,.45,.26,.15,.18,-.04);shape.quadraticCurveTo(0,-.13,-.19,-.045);
  mesh(ear,new THREE.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:true,bevelSegments:5,bevelSize:.045,bevelThickness:.045,steps:1}),coat);
  const innerMesh=mesh(ear,new THREE.ShapeGeometry(shape,24),inner);innerMesh.scale.set(.62,.77,1);innerMesh.position.set(0,.025,.107);
  for(let i=0;i<4;i++)feather(ear,-.14+i*.067,.38+i*.045,.12,.39-i*.035,.075,1.8-side*.15+i*.06,i%2+2);ears.push(ear);
 }
 for(const side of [-1,1])for(let i=0;i<3;i++){const lock=blob(head,side*(.43+i*.025),-.14-i*.07,.21,.16-i*.015,.07,.11,cream);lock.rotation.z=side*(.35+i*.13);}
 for(let i=0;i<5;i++){const lock=blob(torso,(i-2)*.09,.37-Math.abs(i-2)*.045,.335,.105,.22,.08,cream);lock.rotation.z=(i-2)*-.16;}
 const legs=[];
 for(const side of [-1,1])for(const back of [true,false]){const leg=j(torso,side*(back?.34:.285),-.37,back?-.20:.25,'leg-'+side+'-'+back);mesh(leg,organic([[0,-.07,0,back?.21:.14,.27,.17],[0,-.31,.035,.115,.21,.115],[0,-.46,.11,.15,.105,.205]],[[-.29,-.6,-.25],[.29,.24,.36]],28),back?coat:cream);for(let i=-1;i<=1;i++)blob(leg,i*.073,-.48,.265,.035,.046,.06,cream);legs.push({leg,back,side});}
 const tail=j(torso,0,-.19,-.36,'tail');tail.rotation.y=.4;blob(tail,0,-.02,-.25,.21,.18,.37,coat);
 for(let i=0;i<7;i++){const f=feather(tail,0,-.04,-.29,.88-Math.abs(i-3)*.025,.16,Math.PI+(i-3)*.17,i%3);f.rotation.y=-.65;f.rotation.x=-.15;}
 function pose(t,flight=1,frequency=1.15,phaseOverride=null){
  const phase=phaseOverride??t*frequency,wing=wingPose(phase),breath=Math.sin(t*1.8)*.006;
  torso.scale.set(1+breath,1+breath,1+breath);root.position.y=flight*(.38+wing.bodyLift);root.rotation.x=flight*(.10+Math.sin(phase*Math.PI*2-.5)*.018);root.rotation.z=Math.sin(t*.7)*.012*flight;
  for(const w of wings){w.shoulder.rotation.z=mix(-.28,wing.shoulder,flight);w.shoulder.rotation.y=mix(.98,-.06,flight);w.elbow.rotation.z=mix(-.7,wing.elbow,flight);w.elbow.rotation.y=mix(.25,.06,flight);w.wrist.rotation.z=mix(-.25,wing.wrist,flight);for(let i=0;i<w.primaries.length;i++)w.primaries[i].rotation.z=(.15-i*.16)*mix(.65,wing.fan,flight)+Math.sin(phase*Math.PI*2-.45-i*.035)*.025*flight;}
  head.rotation.y=Math.sin(t*.55)*.035;head.rotation.x=-flight*.06;head.rotation.z=Math.sin(t*.72)*.016;const blink=blinkAt(t);head.traverse(n=>{if(n.name.startsWith('blink-'))n.scale.y=blink;});ears.forEach((e,i)=>e.rotation.x=flight*Math.sin(phase*Math.PI*2-.9+i*.09)*.035);
  legs.forEach(({leg,back})=>leg.rotation.x=flight*(back?.65:.40)+flight*Math.sin(phase*Math.PI*2-1)*.025);tail.rotation.x=flight*(.15+Math.sin(phase*Math.PI*2-1.2)*.055);tail.rotation.z=Math.sin(t*.7)*.025;
  return wing;
 }
 pose(0,0);return{root,torso,pose,wings,head,tail,legs,ears};
}
