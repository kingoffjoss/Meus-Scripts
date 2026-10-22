import * as THREE from 'three';
export function flightClip(zefi,frequency=1.15){
 const duration=1/frequency,steps=60,times=[],nodes=[zefi.root,zefi.head,zefi.tail,...zefi.legs.map(l=>l.leg),...zefi.ears];
 for(const w of zefi.wings)nodes.push(w.shoulder,w.elbow,w.wrist,...w.primaries);
 const values=nodes.map(()=>[]),positions=[],scales=[];
 for(let i=0;i<=steps;i++){
  const phase=i===steps?0:i/steps;times.push(i/steps*duration);zefi.pose(phase*duration,1,frequency,phase);
  for(let n=0;n<nodes.length;n++)values[n].push(...nodes[n].quaternion.toArray());positions.push(...zefi.root.position.toArray());scales.push(...zefi.torso.scale.toArray());
 }
 const tracks=nodes.map((node,i)=>new THREE.QuaternionKeyframeTrack(node.name+'.quaternion',times,values[i]));tracks.push(new THREE.VectorKeyframeTrack('Zefi.position',times,positions),new THREE.VectorKeyframeTrack('body.scale',times,scales));zefi.pose(0,0);
 return new THREE.AnimationClip('Zefi_Voo_Organico',duration,tracks);
}
