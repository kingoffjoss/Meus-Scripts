(function(root){
  function parseCommand(text,now=Date.now()){
    const clean=text.trim();if(!clean)throw Error('Escreva uma tarefa ou lembrete.');
    const repeated=clean.match(/(?:de\s+)?(\d+)\s+em\s+\1\s*(minutos?|min\b|horas?|h\b|segundos?)/i);
    const interval=clean.match(/(?:a\s+)?cada\s+(\d+)\s*(minutos?|min\b|horas?|h\b|segundos?)/i)||repeated;
    if(interval){const n=Number(interval[1]);const unit=interval[2].toLowerCase();const ms=n*(unit.startsWith('h')?3600000:unit.startsWith('s')?1000:60000);if(ms<1000||ms>31536000000)throw Error('Use um intervalo entre 1 segundo e 365 dias.');return{kind:'reminder',title:clean,interval:ms,next:now+ms};}
    const time=clean.match(/(?:às|as|as\s+|[àa]s\s+)?\b(\d{1,2}):(\d{2})\b/i);
    if(time){const h=+time[1],m=+time[2];if(h>23||m>59)throw Error('Use um horário válido, como 21:40.');const d=new Date(now);d.setHours(h,m,0,0);if(d.getTime()<=now)d.setDate(d.getDate()+1);return{kind:'reminder',title:clean,interval:0,next:d.getTime()};}
    return{kind:'task',title:clean};
  }
  function advanceReminder(item,now){return item.interval?{...item,next:item.next+(Math.floor((now-item.next)/item.interval)+1)*item.interval}:null;}
  const api={parseCommand,advanceReminder};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.KantoCore=api;
})(globalThis);
