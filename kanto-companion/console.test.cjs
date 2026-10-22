const {test}=require('node:test');const assert=require('node:assert/strict');const vm=require('node:vm');const fs=require('node:fs');
function session(){
 const ids=new Map();let now=new Date(2026,9,22,20).getTime();let next=0;const timers=new Map();
 class Element{constructor(tag){this.tag=tag;this.children=[];this.style={};this.hidden=false;this.textContent='';}append(...els){for(const e of els){e.parent=this;this.children.push(e);if(e.id)ids.set(e.id,e);}}attachShadow(){return this.shadow=new Element('shadow');}setAttribute(){}focus(){}setPointerCapture(){}getBoundingClientRect(){return{left:0,top:0,width:235,height:400};}remove(){ids.delete(this.id);if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);}}
 const document={createElement:t=>new Element(t),getElementById:id=>ids.get(id),documentElement:new Element('html')};
 class Clock extends Date{constructor(...args){super(...(args.length?args:[now]));}static now(){return now;}}
 const context=vm.createContext({document,Date:Clock,innerWidth:1000,innerHeight:800,setInterval(fn){const id=++next;timers.set(id,fn);return id;},clearInterval(id){timers.delete(id);}});
 const source=fs.readFileSync(__dirname+'/console.js','utf8');vm.runInContext(source,context);
 const host=document.getElementById('kanto-browser-companion'),section=host.shadow.children[1];
 return{context,source,host,section,timers,advance(ms){now+=ms;for(const f of timers.values())f();},submit(text){const form=section.children[3];form.children[0].value=text;form.onsubmit({preventDefault(){}});return form;}};
}
test('o favorito cria lembrete, avisa no balão e remove seu temporizador ao fechar',()=>{const s=session();s.submit('Beber água de 30 em 30 minutos');s.advance(1800001);assert.match(s.section.children[0].textContent,/🔔.*Beber água/);s.advance(1800000);assert.match(s.section.children[0].textContent,/🔔/);s.section.children[2].children[3].onclick();assert.equal(s.timers.size,0);});
test('tarefa temporária dá XP e mantém conteúdo como texto',()=>{const s=session();const form=s.submit('<img src=x onerror=alert(1)>');const button=form.children[3].children[0];assert.equal(button.children.length,0);assert.match(button.textContent,/<img/);button.onclick();assert.match(s.section.children[0].textContent,/25 XP/);assert.equal(button.disabled,true);});
test('ativar o favorito novamente fecha o mascote e limpa o temporizador',()=>{const s=session();vm.runInContext(s.source,s.context);assert.equal(s.timers.size,0);});
test('horário inválido não cria lembrete',()=>{const s=session();s.submit('Reunião às 25:40');assert.match(s.section.children[0].textContent,/horário válido/);});
