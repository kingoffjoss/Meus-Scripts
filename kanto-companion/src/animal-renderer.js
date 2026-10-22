import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import models from './models.generated.js';
export const animalNames=['Squidle','Alpaca','Dragão'];
export const cleanClipName=name=>name.split('|').pop();
export const uniqueClips=clips=>[...new Map(clips.map(c=>[cleanClipName(c.name),c])).entries()];
export function createKantoRenderer(canvas,kind=1,options={}){
  kind=[0,1,2].includes(kind)?kind:1;
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.setClearColor(0,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.01,100);
  scene.add(new THREE.HemisphereLight(0xffffff,0x737e98,2.5));const key=new THREE.DirectionalLight(0xffefd5,3);key.position.set(3,5,4);scene.add(key);const fill=new THREE.DirectionalLight(0xd7eaff,1.5);fill.position.set(-3,2,-3);scene.add(fill);
  const pivot=new THREE.Group();scene.add(pivot);
  let mixer,asset,actions=new Map(),current,stopped=false,frame=0,last=0,elapsed=0,nextChange=5,manualUntil=0,wandering=true,wasMoving=false,dir=-1,currentName='',sizeW=0,sizeH=0;
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const idle=()=>kind===1?'Idle':'Flying_Idle';
  const find=(patterns)=>[...actions.keys()].find(n=>patterns.some(p=>p instanceof RegExp?p.test(n):n===p));
  function play(name,seconds=4){const action=actions.get(name);if(!action)return false;if(current!==action){const previous=current;action.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();if(previous)previous.crossFadeTo(action,.3,false);current=action;}currentName=name;manualUntil=elapsed+seconds;options.onAction?.(name);return true;}
  function react(){play(find(['Jump_toIdle','Yes','Gallop_Jump','Idle_2'])||idle(),3);}
  const ready=new Promise((resolve,reject)=>{
    const binary=atob(models[kind].base64),bytes=Uint8Array.from(binary,c=>c.charCodeAt(0));
    new GLTFLoader().parse(bytes.buffer,'',gltf=>{if(stopped){disposeObject(gltf.scene);resolve([]);return;}
      asset=gltf.scene;pivot.add(asset);asset.updateMatrixWorld(true);
      const box=new THREE.Box3().setFromObject(asset),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());const factor=2/Math.max(size.x,size.y,size.z);asset.scale.multiplyScalar(factor);asset.position.set(-center.x*factor,-box.min.y*factor,-center.z*factor);asset.updateMatrixWorld(true);
      pivot.rotation.y=-.55;
      const height=size.y*factor;camera.position.set(3,Math.max(1.7,height*.9),4.7);camera.lookAt(0,height*.47,0);
      // Lock framing to the base pose; do not recenter the character as its bones move.
      const radius=Math.max(1.15,height*.72);camera.position.setLength(radius/Math.sin(THREE.MathUtils.degToRad(camera.fov/2))*1.15);camera.lookAt(0,height*.47,0);
      mixer=new THREE.AnimationMixer(asset);for(const [name,clip]of uniqueClips(gltf.animations))actions.set(name,mixer.clipAction(clip));
      play(find([idle(),/^Idle/])||[...actions.keys()][0],1);resolve([...actions.keys()]);
    },reject);
  });
  function disposeObject(object){object.traverse(o=>{o.geometry?.dispose();const mats=o.material?(Array.isArray(o.material)?o.material:[o.material]):[];for(const m of mats){for(const v of Object.values(m))if(v?.isTexture)v.dispose();m.dispose();}});}
  const draw=stamp=>{if(stopped)return;const dt=Math.min(last?(stamp-last)/1000:0,.05);last=stamp;elapsed+=dt;
    const w=canvas.clientWidth||180,h=canvas.clientHeight||210;if(w!==sizeW||h!==sizeH){sizeW=w;sizeH=h;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
    if(mixer){if(!reduced&&elapsed>nextChange&&elapsed>manualUntil){const cycle=kind===1?['Idle','Walk','Eating','Gallop','Idle_2','Jump_toIdle','Idle_Headlow']:['Flying_Idle','Fast_Flying','Yes','Flying_Idle','No'];const usable=cycle.filter(n=>actions.has(n));const choice=usable[Math.floor(elapsed/5)%usable.length];play(wandering?choice:idle(),0);nextChange=elapsed+4+Math.random()*3;}
      const moving=wandering&&!reduced&&/^(Walk|Gallop|Fast_Flying)$/.test(currentName);if(moving){const speed=currentName==='Walk'?18:32;const result=options.onMove?.(dt*speed*dir);if(result===false)dir*=-1;const target=dir>0?.8:-1.7;pivot.rotation.y=THREE.MathUtils.damp(pivot.rotation.y,target,4,dt);}else pivot.rotation.y=THREE.MathUtils.damp(pivot.rotation.y,-.55,3,dt);
      if(wasMoving&&!moving)options.onMove?.(0);wasMoving=moving;mixer.update(reduced?0:dt);
    }
    renderer.render(scene,camera);frame=requestAnimationFrame(draw);
  };frame=requestAnimationFrame(draw);
  return{ready,play,react,feed(){return play(find(['Eating','Yes'])||idle(),4);},setWandering(value){wandering=value;if(!value&&actions.size)play(idle(),1);},get animations(){return [...actions.keys()];},stop(){if(stopped)return;stopped=true;cancelAnimationFrame(frame);mixer?.stopAllAction();if(asset){mixer?.uncacheRoot(asset);disposeObject(asset);}renderer.dispose();renderer.forceContextLoss();}};
}
