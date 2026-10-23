import * as THREE from 'three';
// Capture the currently displayed pose, then blend toward a running destination.
// Bone/group transforms and morphs share the same transition clock.
export function createMotionPlayer(pet){
 const nodes=[];pet.root.traverse(node=>nodes.push(node));let state='idle',changed=0,from=null,motionTime=0,lastTime=null;
 const capture=()=>nodes.map(n=>({p:n.position.clone(),q:n.quaternion.clone(),s:n.scale.clone(),m:n.morphTargetInfluences?.slice()}));
 function set(next,t){if(state===next)return;from=capture();state=next;changed=t;pet.setState(next,motionTime);}
 function update(t){const dt=lastTime===null?0:Math.max(0,t-lastTime);lastTime=t;const calm=['idle','sleep','relax','meditate','napCurl'].includes(state),rate=(calm?.8:.94)+Math.sin(t*.73)*.035+Math.sin(t*1.31+.8)*.02;motionTime+=dt*rate;pet.pose(motionTime,state);const duration=state==='sleep'?1.5:state==='idle'?1.05:.86,u=Math.min(1,Math.max(0,(t-changed)/duration));if(from&&u<1)nodes.forEach((n,i)=>{const lag=/Bracinho|Maozinha/.test(n.name)?.10:/Olho|Sorriso/.test(n.name)?.035:0;const q=Math.min(1,Math.max(0,(u-lag)/(1-lag))),blend=q*q*q*(q*(q*6-15)+10);n.position.lerpVectors(from[i].p,n.position,blend);n.quaternion.copy(from[i].q.clone().slerp(n.quaternion,blend));n.scale.lerpVectors(from[i].s,n.scale,blend);if(n.morphTargetInfluences)for(let j=0;j<n.morphTargetInfluences.length;j++)n.morphTargetInfluences[j]=THREE.MathUtils.lerp(from[i].m?.[j]||0,n.morphTargetInfluences[j],blend);});else from=null;return state;}
 return{set,update,get state(){return state;}};
}
