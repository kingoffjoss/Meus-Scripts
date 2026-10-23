import * as THREE from 'three';
import {newAnimations} from './new-motions.js';
export const animations=[['walk','Andar pela tela'],['sleep','Dormir com Zzz'],['eat','Comer biscoito'],['wave','Dar tchau'],['dance','Dançar'],['spin','Dar uma voltinha'],['hop','Pular de alegria'],['stretch','Espreguiçar'],['yawn','Bocejar'],['sad','Ficar tristinho'],['angry','Ficar emburrado'],['surprise','Levar um susto'],['laugh','Dar risada'],['think','Pensar'],['curious','Olhar curioso'],['celebrate','Comemorar'],['focus','Se concentrar'],['drink','Tomar água'],['ball','Brincar com bola'],['shy','Ficar tímido'],['alert','Chamar atenção'],['tired','Ficar cansado'],['proud','Sentir orgulho'],...newAnimations];
export function addExtras(root){
 const material=new THREE.MeshStandardMaterial({color:'#8c83bb',roughness:.55});
 const zzz=new THREE.Group();zzz.name='Sono_Zzz';root.add(zzz);
 for(let i=0;i<3;i++){const shape=new THREE.Shape();shape.moveTo(0,.22);shape.lineTo(.18,.22);shape.lineTo(.18,.18);shape.lineTo(.055,.04);shape.lineTo(.18,.04);shape.lineTo(.18,0);shape.lineTo(0,0);shape.lineTo(0,.04);shape.lineTo(.125,.18);shape.lineTo(0,.18);const glyph=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.018,bevelEnabled:true,bevelSize:.005,bevelThickness:.004,bevelSegments:2,steps:1}),material);glyph.name='Zzz_'+i;zzz.add(glyph);}
 const cup=new THREE.Group();cup.name='Copo_Agua';root.add(cup);const mug=new THREE.Mesh(new THREE.CylinderGeometry(.115,.085,.24,32),new THREE.MeshPhysicalMaterial({color:'#80bcf2',roughness:.19,clearcoat:1}));mug.name='Copo';cup.add(mug);const water=new THREE.Mesh(new THREE.CircleGeometry(.1,32),new THREE.MeshStandardMaterial({color:'#c1e8ff',roughness:.13}));water.rotation.x=-Math.PI/2;water.position.y=.122;cup.add(water);
 const ball=new THREE.Mesh(new THREE.SphereGeometry(.17,32,24),new THREE.MeshPhysicalMaterial({color:'#ffc175',roughness:.25,clearcoat:1}));ball.name='Bola';root.add(ball);
 const crumbs=[];for(let i=0;i<4;i++){const m=new THREE.Mesh(new THREE.IcosahedronGeometry(.018,0),new THREE.MeshStandardMaterial({color:'#d8a566'}));m.name='Farelo_'+i;root.add(m);crumbs.push(m);}
 return{zzz,cup,ball,crumbs};
}
export function poseExtras(pet,state,age){
 const {root,body,arms,feet,eyes,mouth,smile,open,extras}=pet,p=age*Math.PI/3,a=Math.sin(p),b=Math.cos(p),wave=Math.sin(p*4),tiny=.0001;
 const {zzz,cup,ball,crumbs}=extras;zzz.scale.setScalar(state==='sleep'?1:tiny);cup.scale.setScalar(state==='drink'?1:tiny);ball.scale.setScalar(state==='ball'?1:tiny);crumbs.forEach(c=>c.scale.setScalar(state==='eat'?1:tiny));
 for(let i=0;i<3;i++){const z=zzz.children[i],u=state==='sleep'?(age/4+i/3)%1:i/3,envelope=Math.sin(u*Math.PI)**.65;z.position.set(.48+u*.42+i*.05,1.45+u*.65,.10);z.scale.setScalar((.55+u*.65)*envelope);z.rotation.z=Math.sin(u*Math.PI*2)*.08;}
 if(state==='eat'){const u=(age%2)/2,reach=.5-.5*Math.cos(u*Math.PI*2);crumbs.forEach((c,i)=>{const q=(u+i*.18)%1;c.position.set((i-1.5)*.045,.78-q*.25,1.08);c.scale.setScalar(Math.sin(q*Math.PI)*.65);});}
 const arm=(i,z,x=0)=>{arms[i].rotation.z=z;arms[i].rotation.x=x;};
 const o=(x,y)=>{smile.scale.setScalar(tiny);open.scale.set(x,y,.018);};
 switch(state){
 case 'wave':arm(1,1.85+wave*.25);body.rotation.z=a*.025;break;
 case 'dance':root.position.x=a*.22;root.position.y=(1-Math.cos(p*4))*.04;root.rotation.z=wave*.12;arm(0,-.9-wave*.35);arm(1,.9+wave*.35);feet.forEach((f,i)=>f.position.y=.14+Math.max(0,Math.sin(p*4+i*Math.PI))*.07);break;
 case 'spin':root.rotation.y=p;root.position.y=(1-Math.cos(p*2))*.04;arm(0,-1.3);arm(1,1.3);break;
 case 'hop':{const h=Math.max(0,Math.sin(p*3));root.position.y=h*.6;body.scale.set(1-h*.08,1+h*.14,1-h*.05);arm(0,-h);arm(1,h);break;}
 case 'stretch':body.scale.set(1-.08*(1-b),1+.12*(1-b),1-.04*(1-b));arm(0,-2.3*(1-b)/2);arm(1,2.3*(1-b)/2);eyes.forEach(e=>e.scale.y=.55+.45*b*b);break;
 case 'yawn':body.scale.y=.96+.05*a;eyes.forEach(e=>e.scale.y=.25);o(.045,.04+.07*(1-b)/2);arm(1,1.5);arms[1].position.set(.18,.9,.73);arms[1].scale.setScalar(.6);break;
 case 'sad':body.scale.y=.9;body.rotation.z=a*.025;eyes.forEach((e,i)=>{e.scale.y=.7;e.rotation.z=(i===0?1:-1)*.18;});mouth.rotation.z=Math.PI;mouth.position.y=.82;arms.forEach((x,i)=>x.rotation.z=(i===0?1:-1)*.12);break;
 case 'angry':body.scale.set(1.04+wave*.012,.96-wave*.012,1);root.rotation.z=wave*.018;eyes.forEach((e,i)=>e.rotation.z=(i===0?-1:1)*.26);arm(0,-.65);arm(1,.65);mouth.scale.x=.6;break;
 case 'surprise':root.position.y=(1-b)*.11;body.scale.y=1.08;eyes.forEach(e=>e.scale.set(1.12,1.13,1));o(.055,.075);arm(0,-1.7);arm(1,1.7);break;
 case 'laugh':body.scale.y=1+wave*.05;root.rotation.z=wave*.035;eyes.forEach(e=>e.scale.y=.22);o(.09,.07+.02*wave);arm(0,-.6);arm(1,.6);break;
 case 'think':root.rotation.z=-.07;eyes.forEach(e=>e.position.x+=.025);arms[1].position.set(.19,.78,.75);arms[1].scale.setScalar(.6);arm(1,1.2+wave*.04);mouth.scale.x=.6;break;
 case 'curious':body.rotation.y=a*.32;root.rotation.z=a*.09;eyes.forEach(e=>e.scale.y=1.06);arm(0,-.25);arm(1,.25);break;
 case 'celebrate':root.position.y=Math.abs(wave)*.19;root.rotation.z=a*.07;arm(0,-2.1-wave*.13);arm(1,2.1+wave*.13);mouth.scale.set(1.3,1.4,1);break;
 case 'focus':body.rotation.x=.08;eyes.forEach(e=>e.scale.y=.72);arms.forEach((x,i)=>{x.position.set((i===0?-1:1)*.32,.6,.62);x.scale.setScalar(.7);x.rotation.z=(i===0?1:-1)*.8;});body.scale.y=1+.008*wave;mouth.scale.x=.65;break;
 case 'drink':{const sip=(1-b)/2;cup.position.set(.08,.66+sip*.25,1.04);cup.rotation.z=-sip*.45;arms.forEach((x,i)=>{x.position.set((i===0?-1:1)*.28,.72+sip*.15,.85);x.scale.setScalar(.6);x.rotation.z=(i===0?1:-1)*1.6;});o(.033,.025);body.rotation.x=-sip*.04;break;}
 case 'ball':ball.position.set(.66,.23+Math.abs(wave)*.5,.52);ball.rotation.z=p*3;arm(1,.5+wave*.5);root.rotation.z=-.04;eyes.forEach(e=>e.position.x+=.025);break;
 case 'shy':eyes.forEach(e=>e.scale.y=.8);root.rotation.z=a*.04;arms.forEach((x,i)=>{x.position.set((i===0?-1:1)*.15,.6,.72);x.scale.setScalar(.65);x.rotation.z=(i===0?1:-1)*1.4;});mouth.scale.x=.65;break;
 case 'alert':arm(1,2+wave*.18);root.position.y=(1-Math.cos(p*4))*.035;eyes.forEach(e=>e.scale.y=1.1);o(.035,.04);break;
 case 'tired':body.scale.set(1.09,.87+Math.sin(p*2)*.012,1.03);root.rotation.z=a*.045;eyes.forEach(e=>e.scale.y=.28+.06*a);arms.forEach((x,i)=>x.rotation.z=(i===0?1:-1)*.08);mouth.scale.x=.55;break;
 case 'proud':body.scale.set(1.02,1.06+.01*a,1);arms.forEach((x,i)=>{x.rotation.z=(i===0?-1:1)*.8;x.position.y=.7;});eyes.forEach(e=>e.scale.y=.8);mouth.scale.set(1.2,1.1,1);break;
 }
}
