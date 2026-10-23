import * as THREE from 'three';
export function polishPose(pet,state,age){
 const {body,arms,skin}=pet,phase=age*Math.PI/3;
 // The upper body lags the main beat; the bottom remains anchored to the feet.
 const quiet=['sleep','napCurl','meditate','relax','tired'].includes(state),gain=quiet?.14:.32;
 if(state!=='jellyWave')skin.morphTargetInfluences[0]=Math.sin(phase*2-.35)*gain;
 skin.morphTargetInfluences[1]=Math.sin(phase*2+.6)*gain*.45;
 const volume=body.scale.x*body.scale.y*body.scale.z;
 if(!['stretch','stretchArms','squash','wakeUp','tiptoe','sleep','napCurl'].includes(state)){const correction=Math.pow(Math.max(.65,Math.min(1.45,volume)),-.14);body.scale.x*=correction;body.scale.z*=correction;}
 for(let i=0;i<arms.length;i++)arms[i].rotation.y+=Math.sin(phase*2-.45+i*.15)*.025*(quiet?.3:1);
 body.rotation.x+=Math.sin(phase*2-.55)*.006*(quiet?.5:1);
}
