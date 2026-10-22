import * as THREE from 'three';
import {clone} from 'three/addons/utils/SkeletonUtils.js';
// glTF skin nodes are scene roots. Bake the bind-space placement without changing
// the interactive character, and retain the bones' original inverse bind matrices.
export function exportModel(zefi){
 const scene=new THREE.Scene(),copy=clone(zefi.root);scene.name='Zefi_Studio';scene.add(copy);scene.updateMatrixWorld(true);
 const skins=[];copy.traverse(n=>{if(n.isSkinnedMesh)skins.push(n);});
 for(const skin of skins){
  const world=skin.matrixWorld.clone(),g=skin.geometry.clone().applyMatrix4(world);
  if(world.determinant()<0){const index=g.index;for(let i=0;i<index.count;i+=3){const b=index.getX(i+1);index.setX(i+1,index.getX(i+2));index.setX(i+2,b);}}
  const skeleton=skin.skeleton;scene.add(skin);skin.position.set(0,0,0);skin.quaternion.identity();skin.scale.set(1,1,1);skin.geometry=g;skin.updateMatrixWorld(true);skin.bind(skeleton,new THREE.Matrix4());
 }
 return scene;
}
