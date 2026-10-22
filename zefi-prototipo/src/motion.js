export const mix=(a,b,t)=>a+(b-a)*t;
export function wingPose(phase,intensity=1){
  const p=((phase%1)+1)%1,down=p<.38,stroke=down?p/.38:(p-.38)/.62;
  const ease=.5-.5*Math.cos(stroke*Math.PI);
  const shoulder=down?mix(1.05,-.66,ease):mix(-.66,1.05,ease);
  // Distal joints lag behind the shoulder and fold during the slower recovery stroke.
  const recovery=down?0:Math.sin(stroke*Math.PI)**2;
  return{shoulder:shoulder*intensity,elbow:(.12+.55*recovery+.12*Math.sin((p-.08)*Math.PI*2))*intensity,wrist:(-.08+.3*recovery+.15*Math.sin((p-.16)*Math.PI*2))*intensity,fan:1-.25*recovery,bodyLift:Math.sin((p-.14)*Math.PI*2)*.045*intensity};
}
export function blinkAt(time){const p=((time%5.7)+5.7)%5.7;if(p<4.8||p>5.04)return 1;return Math.max(.035,Math.abs(p-4.92)/.12);}
export function flightBlend(current,target,dt){return current+(target-current)*(1-Math.exp(-3.5*Math.max(0,dt)));}
