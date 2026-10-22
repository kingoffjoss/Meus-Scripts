const {test}=require('node:test');const assert=require('node:assert/strict');const {parseCommand,advanceReminder}=require('./core.js');
test('intervalo em português e recuperação sem acumular alertas',()=>{const r=parseCommand('Me lembra de beber água a cada 30 minutos',1000);assert.equal(r.interval,1800000);assert.equal(r.next,1801000);assert.equal(advanceReminder(r,5401000).next,7201000);});
test('horário passado fica para amanhã e horário futuro fica para hoje',()=>{const now=new Date(2026,9,22,20,0).getTime();assert.equal(new Date(parseCommand('Reunião às 21:40',now).next).getDate(),22);assert.equal(new Date(parseCommand('Reunião às 19:40',now).next).getDate(),23);});
test('valida horários, intervalos e texto vazio',()=>{assert.throws(()=>parseCommand('às 25:99'));assert.throws(()=>parseCommand('a cada 0 minutos'));assert.throws(()=>parseCommand(' '));});
test('tarefa comum e lembrete único',()=>{assert.equal(parseCommand('Responder ao cliente').kind,'task');assert.equal(advanceReminder({interval:0,next:10},20),null);});
test('intervalo de 30 em 30 minutos',()=>{assert.equal(parseCommand('Me lembra de beber água de 30 em 30 minutos',1000).next,1801000);});
