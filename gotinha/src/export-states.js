import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createPet} from './pet.js';
import {animations} from './extras.js';
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(b=>{this.result=b;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(b=>{this.result='data:'+blob.type+';base64,'+Buffer.from(b).toString('base64');this.onloadend?.();});}};
async function run(){
 const pet=createPet(),nodes=[];pet.root.traverse(n=>{if(n.name)nodes.push(n);});const clips=[],checks=[];
 for(const [state,label] of animations){
  const duration=12,steps=duration*40,times=[],channels=nodes.flatMap(node=>['position','quaternion','scale'].map(property=>({node,property,values:[]})));
  pet.setState(state,0);for(let i=0;i<=steps;i++){const t=i/steps*duration;times.push(t);pet.pose(t,state);for(const c of channels)c.values.push(...c.node[c.property].toArray());}
  const tracks=channels.map(c=>{
   if(!c.values.every(Number.isFinite))throw Error('Non-finite '+state+' '+c.node.name);
   const size=c.property==='quaternion'?4:3,first=c.values.slice(0,size),last=c.values.slice(-size),delta=c.property==='quaternion'?1-Math.abs(first.reduce((sum,v,i)=>sum+v*last[i],0)):Math.max(...first.map((v,i)=>Math.abs(v-last[i])));
   if(delta>1e-5)throw Error('Open loop '+state+' '+c.node.name+'.'+c.property+' '+delta);
   return (c.property==='quaternion'?new THREE.QuaternionKeyframeTrack(c.node.name+'.quaternion',times,c.values):new THREE.VectorKeyframeTrack(c.node.name+'.'+c.property,times,c.values)).optimize();
  });
  const clip=new THREE.AnimationClip('Pingo_'+state,duration,tracks);clips.push(clip);pet.pose(0,state);
  if(['walk','sleep','eat'].includes(state)){const file={walk:'andando',sleep:'dormindo',eat:'comendo'}[state],bytes=await new GLTFExporter().parseAsync(pet.root,{binary:true,animations:[clip]});fs.writeFileSync(path.join(process.argv[2],'pingo-'+file+'.glb'),Buffer.from(bytes));}
  checks.push({id:state,label,duration,tracks:tracks.length});
 }
 pet.setState('idle',0);pet.pose(0);const bytes=await new GLTFExporter().parseAsync(pet.root,{binary:true,animations:clips});const loaded=await new GLTFLoader().parseAsync(bytes,'');if(loaded.animations.length!==23)throw Error('Expected 23 clips');
 for(const [i,[state]] of animations.entries()){const mixer=new THREE.AnimationMixer(loaded.scene),action=mixer.clipAction(loaded.animations[i]);action.play();mixer.setTime(.9);loaded.scene.updateMatrixWorld(true);loaded.scene.traverse(n=>{if(!n.matrixWorld.elements.every(Number.isFinite))throw Error('Invalid loaded transform '+state);});if(state==='sleep'&&loaded.scene.getObjectByName('Sono_Zzz').scale.x<.9)throw Error('Zzz hidden');if(state==='eat'&&loaded.scene.getObjectByName('Lanchinho').scale.x<.5)throw Error('Food hidden');mixer.stopAllAction();mixer.uncacheRoot(loaded.scene);}
 fs.writeFileSync(path.join(process.argv[2],'pingo-23-animacoes.glb'),Buffer.from(bytes));fs.writeFileSync(path.join(process.argv[2],'animacoes.json'),JSON.stringify({count:23,clips:checks,checks:['All poses finite','All tracks close physically','Actual GLTFLoader loads 23 clips','All loaded transforms finite','Sleep Zzz visible','Cookie visible while eating']},null,2));console.log(JSON.stringify({bytes:bytes.byteLength,animations:checks.length,checks:'passed'}));
}run().catch(e=>{console.error(e);process.exitCode=1;});
