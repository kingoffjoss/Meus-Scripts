import * as THREE from 'three';
export function polishPose(pet,state,age){
 const {body,arms,skin}=pet,phase=age*Math.PI/3,drift=Math.sin(age*.47)*.35+Math.sin(age*.83+1.4)*.18;
 // The upper body lags the main beat; the bottom remains anchored to the feet.
 const quiet=['sleep','napCurl','meditate','relax','tired'].includes(state),gain=quiet?.14:.32;
 if(state!=='jellyWave')skin.morphTargetInfluences[0]=Math.sin(phase*2-.35)*gain;
 skin.morphTargetInfluences[1]=Math.sin(phase*2+.6)*gain*.45;
 for(let i=0;i<(pet.brows?.length||0);i++){const sad=['sad','disappointed','lonely','listen'].includes(state),curious=['curious','think','search','peek'].includes(state);pet.brows[i].rotation.z=sad?(i?-.16:.16):curious?(i?.18:-.05):Math.sin(age*.8+i)*.025;pet.brows[i].position.y=1.265+(curious&&i===1?.035:0);}
 if(['sad','disappointed','lonely'].includes(state))pet.smile.scale.y=-Math.abs(pet.smile.scale.y);if(state==='walk'){for(let i=0;i<pet.feet.length;i++){const phase=(age*2+i*.5)%1;pet.feet[i].rotation.x=phase<.6?0:Math.sin((phase-.6)/.4*Math.PI)*.14;}}
 const volume=body.scale.x*body.scale.y*body.scale.z;
 if(!['stretch','stretchArms','squash','wakeUp','tiptoe','sleep','napCurl'].includes(state)){const correction=Math.pow(Math.max(.65,Math.min(1.45,volume)),-.14);body.scale.x*=correction;body.scale.z*=correction;}
 for(let i=0;i<arms.length;i++)arms[i].rotation.y+=Math.sin(phase*1.68-.6+i*.31+drift)*.022*(quiet?.3:1);
 if(['idle','relax','listen','curious','think'].includes(state)){body.rotation.z+=Math.sin(age*.69+drift)*.009;body.position.y+=Math.sin(age*1.14)*.004;}
 body.rotation.x+=Math.sin(phase*2-.55)*.006*(quiet?.5:1);
}
