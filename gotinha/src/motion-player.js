import * as THREE from 'three';
// Capture the currently displayed pose, then blend toward a running destination.
// Bone/group transforms and morphs share the same transition clock.
export function createMotionPlayer(pet){
 const nodes=[];pet.root.traverse(node=>nodes.push(node));let state='idle',changed=0,from=null;
 const capture=()=>nodes.map(n=>({p:n.position.clone(),q:n.quaternion.clone(),s:n.scale.clone(),m:n.morphTargetInfluences?.slice()}));
 function set(next,t){if(state===next)return;from=capture();state=next;changed=t;pet.setState(next,t);}
 function update(t){pet.pose(t,state);const u=Math.min(1,Math.max(0,(t-changed)/.48)),blend=u*u*(3-2*u);if(from&&u<1)nodes.forEach((n,i)=>{n.position.lerpVectors(from[i].p,n.position,blend);n.quaternion.copy(from[i].q.clone().slerp(n.quaternion,blend));n.scale.lerpVectors(from[i].s,n.scale,blend);if(n.morphTargetInfluences)for(let j=0;j<n.morphTargetInfluences.length;j++)n.morphTargetInfluences[j]=THREE.MathUtils.lerp(from[i].m?.[j]||0,n.morphTargetInfluences[j],blend);});else from=null;return state;}
 return{set,update,get state(){return state;}};
}
