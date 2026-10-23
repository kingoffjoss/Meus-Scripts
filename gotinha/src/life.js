const clamp=n=>Math.max(0,Math.min(100,Number.isFinite(n)?n:70));
export class PingoLife{
 constructor(saved=null,random=Math.random,now=Date.now()){
  this.random=random;this.needs={fullness:82,energy:80,water:84,affection:72,mood:76};this.recent=[];this.next=0;this.manualUntil=0;this.state='idle';this.lastInteraction=0;
  if(saved?.version===1){for(const key of Object.keys(this.needs))if(Number.isFinite(saved.needs?.[key]))this.needs[key]=clamp(saved.needs[key]);if(Number.isFinite(saved.savedAt))this.advance(Math.min(8*3600,Math.max(0,(now-saved.savedAt)/1000)),'idle');}
 }
 advance(dt,mode=this.state){if(!Number.isFinite(dt)||dt<=0)return;const d=Math.min(dt,28800),n=this.needs,sleep=['sleep','napCurl'].includes(mode);n.fullness=clamp(n.fullness-d*.012);n.water=clamp(n.water-d*.019);n.energy=clamp(n.energy+d*(sleep?.095:-.009));n.affection=clamp(n.affection-d*.008);n.mood=clamp(n.mood+d*((n.affection>55&&n.fullness>40)?.001:-.004));}
 interact(action,time){const n=this.needs;this.lastInteraction=time;n.affection=clamp(n.affection+5);if(action==='eat')n.fullness=clamp(n.fullness+27);else if(action==='drink')n.water=clamp(n.water+30);else if(['happy','hug','heart','grateful','kiss'].includes(action)){n.affection=clamp(n.affection+13);n.mood=clamp(n.mood+9);}else if(['nausea','rainbow'].includes(action)){n.mood=clamp(n.mood-7);n.energy=clamp(n.energy-2);}else if(['ball','dance','hop','run','celebrate'].includes(action)){n.mood=clamp(n.mood+5);n.energy=clamp(n.energy-1);}this.manualUntil=time+(action==='sleep'?50:16);this.state=action;this.next=this.manualUntil;}
 get emotion(){const n=this.needs;if(n.energy<25)return'Sonolento';if(n.water<30)return'Com sede';if(n.fullness<30)return'Com fome';if(n.affection<30)return'Quer companhia';if(n.mood>84)return'Radiante';if(n.mood<40)return'Quietinho';return'Curioso e tranquilo';}
 choose(time){
  if(time<this.manualUntil||time<this.next)return null;const n=this.needs;let pool,reason;
  if(n.energy<25){pool=['yawn','tired','sleep'];reason='Estou ficando com soninho…';}
  else if(n.water<30){pool=['thirsty','breatheDeep','tired'];reason='Pode me dar um pouquinho de água?';}
  else if(n.fullness<30){pool=['hungry','think','relax'];reason='Acho que cabe um lanchinho por aqui.';}
  else if(n.affection<30){pool=['lonely','wave','hug'];reason='Um carinho seria tão bom.';}
  else if(n.mood<40){pool=['sad','relax','breatheDeep','meditate'];reason='Vou ficar um pouquinho mais quietinho.';}
  else {pool=['walk','walk','curious','wave','search','stretch','listen','read','clean','wobble','think','ball','dance','proud','peek','jellyWave','nod','dream','relax','greet'];pool=pool.filter(x=>x!=='greet');reason='Só explorando e curtindo sua companhia.';if(n.mood>84)pool.push('celebrate','excited','heart','laugh');}
  const fresh=pool.filter(s=>!this.recent.slice(-2).includes(s));const list=fresh.length?fresh:pool;this.state=list[Math.min(list.length-1,Math.floor(this.random()*list.length))];this.recent.push(this.state);this.recent=this.recent.slice(-4);this.next=time+(this.state==='sleep'?32:9+this.random()*8);return{state:this.state,reason,emotion:this.emotion};
 }
 snapshot(now=Date.now()){return{version:1,needs:{...this.needs},savedAt:now};}
}
export function loadLife(storage=globalThis.localStorage){try{return JSON.parse(storage.getItem('pingo-life-v1')||'null');}catch{return null;}}
export function saveLife(life,storage=globalThis.localStorage){try{storage.setItem('pingo-life-v1',JSON.stringify(life.snapshot()));}catch{}}
