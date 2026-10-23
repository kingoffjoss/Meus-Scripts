import * as THREE from 'three';
export function createPointerReactions(pet){
 const ray=new THREE.Raycaster(),point=new THREE.Vector2(),weights=[0,0];let side=-1,until=0;
 function move(camera,x,y,t){point.set(x,y);ray.setFromCamera(point,camera);const hits=ray.intersectObjects(pet.arms,true);if(hits.length){let node=hits[0].object;while(node&&!node.name.startsWith('Bracinho_'))node=node.parent;if(node){side=node.name.endsWith('-1')?0:1;until=t+1.25;return side;}}return-1;}
 function apply(dt,t,state,dragging=false){for(let i=0;i<2;i++){const target=!dragging&&!['sleep','napCurl','rainbow','nausea'].includes(state)&&i===side&&t<until?1:0;weights[i]+=(target-weights[i])*(1-Math.exp(-8*dt));pet.arms[i].rotation.z=THREE.MathUtils.lerp(pet.arms[i].rotation.z,(i===0?-1:1)*2.05,weights[i]);pet.arms[i].position.y+=weights[i]*.07;}pet.protectHands?.();}
 return{move,apply};
}
