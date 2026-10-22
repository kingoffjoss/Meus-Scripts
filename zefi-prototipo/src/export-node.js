import fs from 'node:fs';
import {GLTFExporter} from 'three/addons/exporters/GLTFExporter.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import {createZefi} from './character.js';
import {flightClip} from './export-clip.js';
import {wingPose,flightBlend} from './motion.js';
globalThis.FileReader=class{readAsArrayBuffer(blob){blob.arrayBuffer().then(buffer=>{this.result=buffer;this.onloadend?.();});}readAsDataURL(blob){blob.arrayBuffer().then(buffer=>{this.result='data:'+blob.type+';base64,'+Buffer.from(buffer).toString('base64');this.onloadend?.();});}};
async function run(){
 const zefi=createZefi(),clip=flightClip(zefi);let meshes=0,triangles=0;zefi.root.traverse(n=>{if(n.isMesh){meshes++;triangles+=(n.geometry.index?n.geometry.index.count:n.geometry.attributes.position.count)/3;}});
 const start=wingPose(0),end=wingPose(1);if(Math.abs(start.shoulder-end.shoulder)>1e-8)throw Error('Wing loop discontinuity');for(let i=0;i<100;i++){const p=wingPose(i/100);if(!Object.values(p).every(Number.isFinite))throw Error('Invalid wing pose');}if(flightBlend(0,1,.1)<=0||flightBlend(0,1,.1)>=1)throw Error('Invalid takeoff blend');
 const bytes=await new GLTFExporter().parseAsync(zefi.root,{binary:true,animations:[clip],onlyVisible:true});const file=process.argv[2];if(!file)throw Error('Provide output GLB path');fs.writeFileSync(file,Buffer.from(bytes));
 const loaded=await new GLTFLoader().parseAsync(bytes,'');const mixer=new THREE.AnimationMixer(loaded.scene);mixer.clipAction(loaded.animations[0]).play();mixer.update(0);let joint;loaded.scene.traverse(n=>{if(n.name==='wing-shoulder-1')joint=n;});if(!joint)throw Error('Missing wing joint in export');const before=joint.quaternion.toArray();mixer.update(clip.duration*.3);const after=joint.quaternion.toArray();if(before.every((v,i)=>Math.abs(v-after[i])<1e-8))throw Error('Wing joint does not animate');
 console.log(JSON.stringify({file,bytes:bytes.byteLength,meshes,triangles,clips:loaded.animations.map(c=>({name:c.name,tracks:c.tracks.length,duration:c.duration})),checks:['Wing cycle closes','100 finite sampled poses','Takeoff blending bounded','GLB loads with actual loader','Exported shoulder changes pose']},null,2));
}run().catch(e=>{console.error(e);process.exitCode=1;});
