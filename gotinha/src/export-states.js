import fs from 'node:fs';
import path from 'node:path';
import * as THREE from 'three';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {createPet} from './pet.js';
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(b=>{this.result=b;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(b=>{this.result='data:'+blob.type+';base64,'+Buffer.from(b).toString('base64');this.onloadend?.();});}};
const configs=[['walk','andando',12],['sleep','dormindo',4],['eat','comendo',6]];
async function run(){
 for(const [state,file,duration] of configs){
  const pet=createPet(),nodes=[pet.root,pet.body,...pet.eyes,...pet.arms,...pet.feet,pet.mouth,pet.smile,pet.open,pet.food],times=[],channels=nodes.flatMap(node=>['position','quaternion','scale'].map(property=>({node,property,values:[]}))),steps=duration*60;
  pet.setState(state,0);
  for(let i=0;i<=steps;i++){const t=i/steps*duration;times.push(t);pet.pose(t,state);for(const c of channels)c.values.push(...c.node[c.property].toArray());}
  const tracks=channels.map(c=>{if(!c.values.every(Number.isFinite))throw Error('Non-finite '+c.node.name);const size=c.property==='quaternion'?4:3;for(let i=0;i<size;i++)if(Math.abs(c.values[i]-c.values[c.values.length-size+i])>1e-5)throw Error('Open animation loop '+state+' '+c.node.name+'.'+c.property);return c.property==='quaternion'?new THREE.QuaternionKeyframeTrack(c.node.name+'.quaternion',times,c.values):new THREE.VectorKeyframeTrack(c.node.name+'.'+c.property,times,c.values);});
  pet.pose(0,state);const clip=new THREE.AnimationClip('Pingo_'+file,duration,tracks),bytes=await new GLTFExporter().parseAsync(pet.root,{binary:true,animations:[clip]});
  const loaded=await new GLTFLoader().parseAsync(bytes,''),mixer=new THREE.AnimationMixer(loaded.scene);mixer.clipAction(loaded.animations[0]).play();mixer.setTime(state==='walk'?.125:state==='sleep'?1:.5);
  if(state==='walk'&&loaded.scene.getObjectByName('Pezinho_-1').position.y<=.14)throw Error('No walking step');
  if(state==='sleep'&&loaded.scene.getObjectByName('Olho_E').scale.y>.1)throw Error('Sleeping eyes open');
  if(state==='eat'&&loaded.scene.getObjectByName('Lanchinho').scale.x<.5)throw Error('Food hidden');
  fs.writeFileSync(path.join(process.argv[2],'pingo-'+file+'.glb'),Buffer.from(bytes));console.log(JSON.stringify({state,duration,tracks:tracks.length,bytes:bytes.byteLength,checks:['finite transforms','closed loop','GLTFLoader loads','state-specific motion verified']}));
 }
}run().catch(e=>{console.error(e);process.exitCode=1;});
