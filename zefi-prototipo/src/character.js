import * as THREE from 'three';
import {wingPose,blinkAt,mix} from './motion.js';
export function createZefi(){
 const root=new THREE.Group();root.name='Zefi';
 const mat=(color,roughness=.8)=>new THREE.MeshPhysicalMaterial({color,roughness,metalness:0,clearcoat:.08,clearcoatRoughness:.7});
 const pearl=mat('#eee7f1'),lilac=mat('#b9a2d5'),light=mat('#dfd1ef'),pink=mat('#d3a4bd'),dark=mat('#211c30'),teal=mat('#39a6ae',.2),black=mat('#080d18',.12),white=mat('#ffffff',.18);
 const sphere=new THREE.SphereGeometry(1,40,28);
 function blob(parent,x,y,z,sx,sy,sz,material){const mesh=new THREE.Mesh(sphere,material);mesh.position.set(x,y,z);mesh.scale.set(sx,sy,sz);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 function joint(parent,x,y,z,name){const g=new THREE.Group();g.name=name;g.position.set(x,y,z);parent.add(g);return g;}
 const torso=joint(root,0,1.05,0,'body');blob(torso,0,0,0,.53,.73,.43,lilac);blob(torso,0,-.01,.32,.39,.57,.19,pearl);
 const head=joint(torso,0,.83,.07,'head');blob(head,0,0,0,.7,.63,.55,light);blob(head,0,-.13,.28,.59,.4,.38,pearl);
 for(const side of [-1,1]){
   const socket=joint(head,side*.32,.03,.465,'eye-'+side);socket.rotation.y=side*.27;blob(socket,0,0,0,.235,.28,.105,lilac);
   const eye=joint(socket,0,0,.04,'blink-'+side);blob(eye,0,0,0,.205,.245,.08,white);blob(eye,-side*.018,-.005,.068,.145,.187,.04,teal);blob(eye,-side*.018,-.005,.1,.086,.143,.025,black);blob(eye,-.047,.078,.12,.035,.045,.012,white);blob(eye,.035,-.075,.118,.016,.021,.012,white);socket.userData.eye=eye;
   const brow=blob(socket,0,.255,-.015,.2,.035,.055,light);brow.rotation.z=-side*.13;
 }
 const muzzle=joint(head,0,-.24,.47,'muzzle');blob(muzzle,-.14,0,.035,.2,.13,.14,pearl);blob(muzzle,.14,0,.035,.2,.13,.14,pearl);const nose=blob(muzzle,0,.075,.16,.085,.056,.055,pink);nose.rotation.z=Math.PI;
 blob(muzzle,0,-.085,.08,.15,.065,.055,dark);blob(muzzle,0,-.104,.126,.085,.025,.018,pink);
 function featherGeometry(length,width,bend=0){const positions=[],normals=[],uvs=[],indices=[],segments=20;
   for(let i=0;i<=segments;i++){const u=i/segments,span=width*Math.pow(Math.sin(Math.PI*u),.65),z=.045*Math.sin(u*Math.PI)+bend*u*u;for(const v of [-1,0,1]){positions.push(u*length,v*span,z+(v===0?.025:0));normals.push(0,0,1);uvs.push(u,(v+1)/2);}}
   for(let i=0;i<segments;i++)for(let j=0;j<2;j++){const a=i*3+j,b=a+3;indices.push(a,b,a+1,b,b+1,a+1);}const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geo.setIndex(indices);geo.computeVertexNormals();return geo;
 }
 const featherMaterials=['#c4b1df','#dbceed','#ede4f5','#b8a0d4'].map(c=>{const m=mat(c,.6);m.side=THREE.DoubleSide;return m;});
 function feather(parent,x,y,z,length,width,angle,index,bend=.02){const g=joint(parent,x,y,z,'feather');g.rotation.z=angle;const mesh=new THREE.Mesh(featherGeometry(length,width,bend),featherMaterials[index%4]);mesh.castShadow=true;mesh.receiveShadow=true;g.add(mesh);const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(0,0,.032),new THREE.Vector3(length*.5,0,.065),new THREE.Vector3(length,0,bend+.026));const rachis=new THREE.Mesh(new THREE.TubeGeometry(curve,16,.006,4,false),light);g.add(rachis);return g;}
 const wings=[];
 for(const side of [-1,1]){
   const shoulder=joint(torso,side*.43,.38,-.23,'wing-shoulder-'+side);shoulder.scale.x=side;
   blob(shoulder,.27,0,0,.37,.14,.14,pearl);const elbow=joint(shoulder,.6,0,0,'wing-elbow-'+side);blob(elbow,.3,0,0,.38,.105,.1,light);const wrist=joint(elbow,.64,0,0,'wing-wrist-'+side);
   const primaries=[];for(let i=0;i<9;i++){const f=feather(wrist,i*.014,-i*.025,.035-i*.004,1.02-i*.025,.115,-.1-i*.14,i);f.name='wing-'+side+'-primary-'+i;primaries.push(f);}
   for(let i=0;i<7;i++)feather(elbow,.04+i*.075,-.025,.07,.65,.095,-.76-i*.1,i+1);
   for(let row=0;row<2;row++)for(let i=0;i<7;i++)feather(shoulder,.02+i*.09,-row*.095,.14+row*.025,.42,.075,-.9-row*.12,i+row);
   wings.push({shoulder,elbow,wrist,primaries});
 }
 const ears=[];for(const side of [-1,1]){const ear=joint(head,side*.43,.43,-.03,'ear-'+side);ear.rotation.z=side*-.24;
   const shape=new THREE.Shape();shape.moveTo(-.16,0);shape.bezierCurveTo(-.28,.3,-.1,.62,.02,.93);shape.bezierCurveTo(.07,.55,.3,.2,.16,0);shape.quadraticCurveTo(0,-.08,-.16,0);
   const geo=new THREE.ExtrudeGeometry(shape,{depth:.1,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.055,bevelThickness:.06});const mesh=new THREE.Mesh(geo,light);mesh.castShadow=true;ear.add(mesh);blob(ear,0,.32,.15,.095,.28,.035,pink);
   for(let i=0;i<3;i++)feather(ear,-.09+i*.055,.56+i*.04,.17,.45-i*.04,.065,Math.PI*.5-side*.18,i);ears.push(ear);
 }
 const legs=[];for(const side of [-1,1])for(const back of [true,false]){const leg=joint(torso,side*(back?.34:.27),-.48,back?-.19:.27,'leg');blob(leg,0,-.22,0,back?.18:.135,.32,.15,back?lilac:pearl);const foot=blob(leg,0,-.47,.075,.19,.11,.23,light);for(let i=-1;i<=1;i++)blob(leg,i*.08,-.48,.25,.036,.035,.052,pink);legs.push({leg,back,side});}
 const tail=joint(torso,0,-.26,-.36,'tail');tail.rotation.y=-.3;for(let i=0;i<7;i++){const f=feather(tail,0,0,0,.98,.16,Math.PI+(i-3)*.19,i);f.rotation.x=-.6;}
 // Small tapered tufts give the silhouette a soft edge without external textures.
 let seed=57;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};const tuftGeometry=new THREE.ConeGeometry(.014,.065,4);const tufts=new THREE.InstancedMesh(tuftGeometry,pearl,1300);const dummy=new THREE.Object3D();
 for(let i=0;i<1300;i++){const angle=random()*Math.PI*2,v=random()*2-1,r=Math.sqrt(1-v*v),n=new THREE.Vector3(r*Math.cos(angle),v,r*Math.sin(angle));dummy.position.set(n.x*.53,n.y*.73,n.z*.43);dummy.position.addScaledVector(n,.02);dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),n);const s=.55+random()*.7;dummy.scale.setScalar(s);dummy.updateMatrix();tufts.setMatrixAt(i,dummy.matrix);}torso.add(tufts);
 function pose(t,flight=1,frequency=1.2,phaseOverride=null){const phase=phaseOverride??t*frequency,wing=wingPose(phase,flight),breath=Math.sin(t*2.1)*.009;torso.scale.set(1+breath,1+breath,1+breath);root.position.y=flight*(.34+wing.bodyLift)+breath*.4;root.rotation.x=flight*.1;root.rotation.z=flight*Math.sin(t*.75)*.025;
   for(const w of wings){w.shoulder.rotation.z=mix(-.1,wing.shoulder,flight);w.shoulder.rotation.y=mix(1.1,.05,flight);w.elbow.rotation.z=wing.elbow;w.wrist.rotation.z=wing.wrist;for(let i=0;i<w.primaries.length;i++)w.primaries[i].rotation.z=(-.1-i*.14)*mix(.65,wing.fan,flight);}
   head.rotation.y=Math.sin(t*.65)*.055;head.rotation.z=Math.sin(t*.85)*.025;const blink=blinkAt(t);head.traverse(n=>{if(n.name.startsWith('blink-'))n.scale.y=blink;});ears.forEach((e,i)=>e.rotation.x=Math.sin(phase*2*Math.PI-.7+i*.08)*.025*flight);
   legs.forEach(({leg,back,side})=>{leg.rotation.x=flight*(back?.5:.3)+Math.sin(t*1.5+side)*.015;});tail.rotation.x=Math.sin(phase*2*Math.PI-1)*.04*flight;tail.rotation.z=Math.sin(t*.9)*.04;
   return wing;
 }
 pose(0,0);return{root,torso,pose,wings,head,tail,legs};
}
