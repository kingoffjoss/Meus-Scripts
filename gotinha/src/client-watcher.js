import {visibleAjaFrames,redactIdentifiers} from './aja-reader.js';
import {extractLatestClient} from './latest-client.js';
export function createClientWatcher({ask,isConnected,isBusy,say,onState=()=>{},react=()=>{}}){
 let enabled=/(^|\.)pure\.cloud$/i.test(location.hostname),disposed=false,reading=false,localSeen='',aiSeen='',changedAt=0,lastSent=0,lastContext='',current=null;
 const names=new WeakMap();let sequence=0;
 function notify(detail){onState({enabled,label:detail||(enabled?'Acompanhando cliente':'Acompanhamento pausado')});}
 function scopeKey(frame){if(frame&&!names.has(frame))names.set(frame,++sequence);const selected=document.querySelector('.interaction-group.is-selected,[data-qa-id="interaction-group-list-item"].is-selected');const header=document.querySelector('#interaction-header-participant-name');return String(frame?names.get(frame):'self')+':'+(selected?.getAttribute('data-conversation-id')||selected?.getAttribute('data-interaction-id')||selected?.id||header?.textContent||location.pathname);}
 async function tick(){if(!enabled||disposed||reading||document.visibilityState!=='visible')return;reading=true;try{let doc=document,frame=null;if(!doc.querySelector('[data-automation-id="message-group"]')){const frames=visibleAjaFrames();if(frames.length!==1){notify(frames.length?'Deixe uma conversa aberta':'Procurando conversa');return;}frame=frames[0];try{doc=frame.contentDocument;}catch{doc=null;}}
 if(!doc){notify('Quadro sem acesso de leitura');return;}const latest=extractLatestClient(doc);if(!latest){notify('Aguardando resposta do cliente');return;}const scope=scopeKey(frame),fingerprint=scope+':'+latest.key+':'+latest.text;if(lastContext&&scope!==lastContext){localSeen='';aiSeen='';current=null;}lastContext=scope;
 if(fingerprint!==localSeen){localSeen=fingerprint;current={...latest,fingerprint};changedAt=Date.now();react();notify('Última resposta identificada');say('💬 O cliente mandou mensagem:\n'+latest.text,Math.min(40,Math.max(14,latest.text.length/16)));}
 if(!current||current.fingerprint===aiSeen||!isConnected()||isBusy()||Date.now()-changedAt<Math.min(40000,Math.max(14000,current.text.length/16*1000))||Date.now()-lastSent<25000)return;
 const candidate=current;aiSeen=candidate.fingerprint;lastSent=Date.now();notify('Pensando na resposta do cliente…');const context={text:redactIdentifiers('Última resposta do cliente:\n'+candidate.text+(candidate.previousAgent?'\n\nMensagem anterior enviada pela plataforma:\n'+candidate.previousAgent:'')),title:'Conversa ativa no Genesys/AjaModular'};
 const ok=await ask('Comente para mim, o atendente, a última resposta do cliente em uma ou duas frases. Seja natural, útil e respeitoso. Sugira uma pergunta ou próximo passo quando fizer sentido. Não invente o estado da rede ou da conta, não atribua intenções, não repita dados pessoais e não responda ao cliente em meu nome.',{context,mode:'client-auto'});notify(ok?'Acompanhando cliente':'Leitura ativa · confira a IA');
 }finally{reading=false;}}
 const timer=setInterval(()=>tick().catch(()=>notify('Aguardando quadro de conversa')),3500);notify();
 return{get enabled(){return enabled;},toggle(){enabled=!enabled;localSeen='';aiSeen='';current=null;notify();if(enabled)tick().catch(()=>{});},dispose(){disposed=true;enabled=false;clearInterval(timer);}};
}
