const MIN=60000;
export function parseReminder(text,now=Date.now()){
 const clean=text.trim(),normalized=clean.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const interval=normalized.match(/de\s*(\d+)\s*em\s*\1\s*(?:min|minuto)/)||normalized.match(/(?:cada|de)\s*(\d+)\s*(?:min|minuto)/);
 if(interval){const minutes=Number(interval[1]);if(minutes<1||minutes>1440)throw Error('Use um intervalo entre 1 e 1440 minutos.');return{title:normalized.includes('agua')?'Tomar água':clean,kind:normalized.includes('agua')?'water':'repeat',repeatMinutes:minutes,due:now+minutes*MIN};}
 const relative=normalized.match(/(?:daqui a|em)\s*(\d+)\s*(?:min|minuto)/);if(relative){const n=Number(relative[1]);if(n<1||n>10080)throw Error('Use um prazo entre 1 minuto e 7 dias.');return{title:clean,kind:'once',repeatMinutes:0,due:now+n*MIN};}
 const clock=normalized.match(/(?:as|a|horas?\s*)?\s*(\d{1,2})[:h](\d{2})/);
 if(clock){const h=Number(clock[1]),m=Number(clock[2]);if(h>23||m>59)throw Error('Esse horário não é válido.');const date=new Date(now);date.setHours(h,m,0,0);if(date.getTime()<=now)date.setDate(date.getDate()+1);const meeting=/reuniao|meeting|consulta/.test(normalized),eventAt=date.getTime();return{title:clean,kind:meeting?'meeting':'once',repeatMinutes:0,eventAt,due:meeting?Math.max(now+1000,eventAt-10*MIN):eventAt};}
 throw Error('Exemplos: “tomar água a cada 30 minutos”, “reunião às 21:40” ou “pausa em 15 minutos”.');
}
export class ReminderBook{
 constructor(saved=[]){this.items=Array.isArray(saved)?saved.filter(r=>r&&typeof r.id==='string'&&typeof r.title==='string'&&Number.isFinite(r.due)&&r.due>0&&Number.isFinite(r.repeatMinutes)&&r.repeatMinutes>=0).slice(0,100).map(r=>({...r,pending:!!r.pending,done:!!r.done})):[];}
 add(spec){if(this.items.filter(r=>!r.done).length>=30)throw Error('O painel comporta até 30 lembretes ativos.');const r={...spec,id:globalThis.crypto?.randomUUID?.()||String(Date.now())+'-'+Math.random(),pending:false,done:false};this.items.push(r);return r;}
 tick(now=Date.now()){const due=[];for(const r of this.items){if(r.done||r.pending||r.due>now)continue;r.pending=true;due.push({...r});if(r.repeatMinutes>0)r.due=now+r.repeatMinutes*MIN;}return due;}
 acknowledge(id){const r=this.items.find(r=>r.id===id);if(!r)return;r.pending=false;if(!r.repeatMinutes)r.done=true;}
 snooze(id,minutes=5,now=Date.now()){const r=this.items.find(r=>r.id===id);if(r){r.pending=false;r.done=false;r.due=now+minutes*MIN;}}
 remove(id){this.items=this.items.filter(r=>r.id!==id);}
 message(r,now=Date.now()){if(r.kind==='water')return'Ei, está na hora de tomar água. Uma pausa para se hidratar faz bem!';if(r.kind==='meeting'){const minutes=Math.ceil(((r.eventAt||now)-now)/MIN);return minutes>0?'Sua reunião começa em '+minutes+' minuto'+(minutes===1?'':'s')+': '+r.title:'Está na hora da sua reunião: '+r.title;}return'Você me pediu para lembrar: '+r.title;}
}
export function loadReminders(storage=globalThis.localStorage){try{return new ReminderBook(JSON.parse(storage.getItem('pingo-reminders-v1')||'[]'));}catch{return new ReminderBook();}}
export function saveReminders(book,storage=globalThis.localStorage){try{storage.setItem('pingo-reminders-v1',JSON.stringify(book.items));}catch{}}
