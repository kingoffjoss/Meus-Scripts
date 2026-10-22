const $=s=>document.querySelector(s);
const names=['Squidle','Alpaca','Dragão'];
const createKantoRenderer=(...args)=>window.KantoAnimals.createKantoRenderer(...args);
const spawnBuddy=config=>window.KantoAnimals.launch(config.pet);
let state={pet:1,xp:0,tasks:[],reminders:[]};
try{const saved=JSON.parse(localStorage.getItem('kanto-v1'));if(saved&&Array.isArray(saved.tasks)&&Array.isArray(saved.reminders))state={...state,...saved,pet:[0,1,2].includes(saved.pet)?saved.pet:1,xp:Math.max(0,Number(saved.xp)||0)};}catch{}
let saveFailed=false;
function save(){try{localStorage.setItem('kanto-v1',JSON.stringify(state));}catch{if(!saveFailed){saveFailed=true;say('O navegador bloqueou o salvamento. Os dados ficam só nesta sessão.');}}}
function say(text){$('#speech').textContent=text;}
function celebrate(){dashboardRenderer?.react();const el=$('#pet');el.classList.remove('happy');void el.offsetWidth;el.classList.add('happy');setTimeout(()=>el.classList.remove('happy'),1600);}
let dashboardRenderer=null,dashboardPet=-1;
function render(){
  if(dashboardPet!==state.pet){dashboardRenderer?.stop();dashboardPet=state.pet;const canvas=document.createElement('canvas');canvas.style.cssText='width:100%;height:100%';$('#pet').replaceChildren(canvas);try{dashboardRenderer=createKantoRenderer(canvas,state.pet);dashboardRenderer.ready.catch(e=>say("Não foi possível carregar o 3D: "+e.message));}catch(e){say(e.message);}};$('#pet').setAttribute('aria-label',names[state.pet]);$('#pet-name').textContent=names[state.pet];
  $('#level').textContent=`Nível ${Math.floor(state.xp/100)+1} · Seu companheiro`;$('#xpbar').style.width=`${state.xp%100}%`;$('#xp-label').textContent=`${state.xp%100} / 100 XP para o próximo nível`;
  document.querySelectorAll('[data-pet]').forEach(b=>b.classList.toggle('selected',+b.dataset.pet===state.pet));
  $('#task-count').textContent=`(${state.tasks.filter(t=>!t.done).length})`;$('#task-list').replaceChildren();
  if(!state.tasks.length)empty($('#task-list'),'Seu próximo pequeno passo começa aqui.');
  state.tasks.forEach(t=>{const li=document.createElement('li'),check=document.createElement('button'),span=document.createElement('span');check.textContent=t.done?'✓':'○';check.setAttribute('aria-label',t.done?'Tarefa concluída':'Concluir tarefa');check.disabled=t.done;check.onclick=()=>{if(t.done)return;t.done=true;state.xp+=25;save();render();celebrate();say('Missão cumprida! +25 XP. Estou orgulhoso de você.');};span.textContent=t.title;if(t.done)span.className='done';li.append(check,span,removeButton(()=>{state.tasks=state.tasks.filter(x=>x.id!==t.id);}));$('#task-list').append(li);});
  $('#reminder-list').replaceChildren();if(!state.reminders.length)empty($('#reminder-list'),'Nenhum lembrete por enquanto. Pode me pedir um!');
  state.reminders.forEach(r=>{const li=document.createElement('li'),span=document.createElement('span');span.textContent=`${r.title} · ${new Date(r.next).toLocaleString('pt-BR',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})}`;li.append(span,removeButton(()=>{state.reminders=state.reminders.filter(x=>x.id!==r.id);}));$('#reminder-list').append(li);});updateBookmark();
}
function empty(list,text){const li=document.createElement('li');li.textContent=text;list.append(li);}
function removeButton(fn){const b=document.createElement('button');b.textContent='×';b.setAttribute('aria-label','Excluir');b.onclick=()=>{fn();save();render();};return b;}
function addCommand(text){try{const item=KantoCore.parseCommand(text);item.id=crypto.randomUUID();if(item.kind==='reminder'){state.reminders.push(item);say(`Combinado! Próximo aviso: ${new Date(item.next).toLocaleString('pt-BR')}. Mantenha o painel aberto.`);}else{state.tasks.push({...item,done:false});say('Missão anotada! Ao concluir você ganha 25 XP.');}save();render();return true;}catch(e){say(e.message);return false;}}
$('#chat-form').onsubmit=e=>{e.preventDefault();if(addCommand($('#command').value))$('#command').value='';};
$('#task-form').onsubmit=e=>{e.preventDefault();const title=$('#task-input').value.trim();if(!title)return;state.tasks.push({id:crypto.randomUUID(),title,done:false});save();render();$('#task-input').value='';say('Tarefa anotada. Vamos dar um passo de cada vez!');};
document.querySelectorAll('[data-command]').forEach(b=>b.onclick=()=>{$('#command').value=b.dataset.command;$('#command').focus();});
document.querySelectorAll('[data-pet]').forEach(b=>b.onclick=()=>{state.pet=+b.dataset.pet;save();render();say(`Oi! Sou ${names[state.pet]}. Vamos juntos?`);});
$('#pat').onclick=()=>{say('Adoro sua companhia! ♡');celebrate();};$('#feed').onclick=()=>{say('Nhac! Obrigado pelo lanchinho. ✦');celebrate();};
let ventTimer;$('#vent').onclick=()=>{clearTimeout(ventTimer);const d=$('#dummy');d.hidden=false;d.className='attack';$('#effect').textContent=['🌿','🔥','💦'][state.pet];celebrate();say('Modo desenho animado: pode deixar com seu amigo!');ventTimer=setTimeout(()=>{d.hidden=true;$('#effect').textContent='';say('Ufa! Respira comigo. Vamos responder com calma?');},2300);};
$('#notify').onclick=async()=>{if(!('Notification'in window)){say('Este navegador não oferece notificações aqui.');return;}try{const p=await Notification.requestPermission();say(p==='granted'?'Notificações ativadas. Mantenha o painel aberto.':'Tudo bem. Os avisos continuam nos balões do painel.');}catch{say('Não foi possível ativar notificações neste contexto.');}};
function tick(){const now=Date.now();let changed=false;for(const r of [...state.reminders]){if(r.next>now)continue;changed=true;const advanced=KantoCore.advanceReminder(r,now);state.reminders=state.reminders.filter(x=>x.id!==r.id);if(advanced)state.reminders.push(advanced);save();say(`🔔 ${r.title}`);celebrate();if('Notification'in window&&Notification.permission==='granted')try{new Notification(`${names[state.pet]} lembra você`,{body:r.title,tag:r.id});}catch{}}if(changed)render();}
setInterval(tick,1000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});
window.addEventListener('storage',e=>{if(e.key==='kanto-v1'&&e.newValue){try{const s=JSON.parse(e.newValue);if(Array.isArray(s.tasks)&&Array.isArray(s.reminders)){state=s;render();}}catch{}}});

function config(){return{pet:state.pet,name:names[state.pet],asset:location.protocol==='file:'?'https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/kanto-companion/assets/concept.png':new URL('assets/concept.png',location.href).href,panel:new URL('index.html',location.href).href};}
let bookmarkCode='';function updateBookmark(){const url='https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/kanto-companion/console.js';bookmarkCode='javascript:(()=>{fetch('+JSON.stringify(url+'?v=animals-04')+',{cache:"no-store"}).then(r=>{if(!r.ok)throw Error(r.status);return r.text()}).then(code=>{window.__kantoAnimalChoice='+state.pet+';(0,eval)(code)}).catch(()=>alert("Este site bloqueou o carregamento do mascote."));})();void 0';$('#bookmark').href=bookmarkCode;$('#install-status').textContent='Arraste Meu Pokémon para os favoritos. Clique nele numa página comum para chamar '+names[state.pet]+'.';}
$('#bookmark').onclick=e=>{e.preventDefault();spawnBuddy(config());};$('#preview').onclick=()=>spawnBuddy(config());$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(bookmarkCode);say('Código copiado! Cole no campo URL de um favorito.');}catch{say('A cópia foi bloqueada. Arraste o botão para a barra de favoritos.');}};
render();tick();
