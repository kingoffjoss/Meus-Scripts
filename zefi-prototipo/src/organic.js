import * as THREE from 'three';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
// A sampled smooth union creates one surface across the muzzle, cheeks and cranium.
export function organic(parts,bounds,resolution=42,colorAt=null){
 const [lo,hi]=bounds,step=hi.map((v,i)=>(v-lo[i])/resolution),n=resolution+1,samples=new Float32Array(n*n*n),id=(x,y,z)=>(z*n+y)*n+x;
 function field(x,y,z){let d=10;for(const [cx,cy,cz,rx,ry,rz,k=.12] of parts){const e=(Math.hypot((x-cx)/rx,(y-cy)/ry,(z-cz)/rz)-1)*Math.min(rx,ry,rz),h=Math.max(k-Math.abs(d-e),0)/k;d=Math.min(d,e)-h*h*k*.25;}return d;}
 for(let z=0;z<n;z++)for(let y=0;y<n;y++)for(let x=0;x<n;x++)samples[id(x,y,z)]=field(lo[0]+x*step[0],lo[1]+y*step[1],lo[2]+z*step[2]);
 const offsets=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]],tetra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]],edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],positions=[],normals=[],colors=[];
 const normal=p=>{const e=.001;return new THREE.Vector3(field(p.x+e,p.y,p.z)-field(p.x-e,p.y,p.z),field(p.x,p.y+e,p.z)-field(p.x,p.y-e,p.z),field(p.x,p.y,p.z+e)-field(p.x,p.y,p.z-e)).normalize();};
 function triangle(a,b,c){const center=a.clone().add(b).add(c).multiplyScalar(1/3);if(b.clone().sub(a).cross(c.clone().sub(a)).dot(normal(center))<0)[b,c]=[c,b];for(const p of [a,b,c]){positions.push(...p.toArray());normals.push(...normal(p).toArray());if(colorAt)colors.push(...colorAt(p).toArray());}}
 for(let z=0;z<resolution;z++)for(let y=0;y<resolution;y++)for(let x=0;x<resolution;x++){
  const ds=offsets.map(o=>samples[id(x+o[0],y+o[1],z+o[2])]);if(ds.every(d=>d>0)||ds.every(d=>d<0))continue;
  const ps=offsets.map(o=>new THREE.Vector3(lo[0]+(x+o[0])*step[0],lo[1]+(y+o[1])*step[1],lo[2]+(z+o[2])*step[2]));
  for(const t of tetra){const hit=[];for(const [a,b] of edges){const ia=t[a],ib=t[b];if((ds[ia]<0)===(ds[ib]<0))continue;hit.push(ps[ia].clone().lerp(ps[ib],ds[ia]/(ds[ia]-ds[ib])));}if(hit.length===3)triangle(...hit);else if(hit.length===4){const mid=hit.reduce((s,p)=>s.add(p),new THREE.Vector3()).multiplyScalar(.25),up=normal(mid),u=hit[0].clone().sub(mid).normalize(),v=up.clone().cross(u);hit.sort((a,b)=>Math.atan2(a.clone().sub(mid).dot(v),a.clone().sub(mid).dot(u))-Math.atan2(b.clone().sub(mid).dot(v),b.clone().sub(mid).dot(u)));triangle(hit[0],hit[1],hit[2]);triangle(hit[0],hit[2],hit[3]);}}
 }
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));if(colorAt)g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));const indexed=mergeVertices(g,1e-5);g.dispose();return indexed;
}
