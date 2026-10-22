import * as THREE from 'three';
import {wingPose} from './motion.js';
export function flightClip(zefi,frequency=1.4){const fps=42,duration=1/frequency,steps=42,times=[],nodes=[];for(const w of zefi.wings)nodes.push(w.shoulder,w.elbow,w.wrist,...w.primaries);const values=nodes.map(()=>[]),positions=[];
 for(let i=0;i<=steps;i++){const t=i/steps*duration;times.push(t);zefi.pose(t,1,frequency);for(let n=0;n<nodes.length;n++)values[n].push(...nodes[n].quaternion.toArray());const p=wingPose(i/steps);positions.push(0,.34+p.bodyLift,0);}
 const tracks=nodes.map((node,i)=>new THREE.QuaternionKeyframeTrack(node.name+'.quaternion',times,values[i]));tracks.push(new THREE.VectorKeyframeTrack('Zefi.position',times,positions));zefi.pose(0,1,frequency);return new THREE.AnimationClip('Zefi_Voo_Asas',duration,tracks);
}
