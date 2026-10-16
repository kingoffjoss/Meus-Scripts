const fs = require('node:fs');
const icon = 'data:image/png;base64,' + fs.readFileSync('outputs/revan-icone.png').toString('base64');
const vm = require('node:vm');
const source = fs.readFileSync('outputs/revan-minidashboard.user.js','utf8').replace(/^\/\/.*$/gm,'').split('\n').map(line=>line.trim()).filter(Boolean).join('\n');
const version = fs.readFileSync('outputs/revan-minidashboard.user.js','utf8').match(/@version\s+([^\s]+)/)[1];
const wrapper = `void (()=>{
 if(location.hostname!=="revan-atendimento.brisanet.net.br"){
   alert("Abra um atendimento do Revan antes de usar este favorito.");return;
 }
 const installed=document.getElementById("rv-mini");
 if(installed?.dataset.busy==='true'){alert('Aguarde a operação atual terminar antes de atualizar.');return;}
 if(installed && installed.dataset.version===${JSON.stringify(version)}){
   const panel=installed.querySelector(".panel");
   if(panel && !panel.hidden)installed.querySelector(".close")?.click();
   return;
 }
 const originalEditing=[...document.querySelectorAll('button')].some(b=>!installed?.contains(b)&&b.textContent.trim().toLowerCase()==='cancelar'&&b.getClientRects().length);
 if(installed && [...installed.querySelectorAll('footer button')].some(b=>b.textContent.trim()==='Salvar') && originalEditing){
   alert('Salve ou cancele a edição em andamento antes de atualizar o dashboard.');return;
 }
 ${source}

})()`;
new vm.Script(wrapper);
const safePunctuation={'3B':';','2C':',','3A':':','2F':'/','3D':'=','5B':'[','5D':']','7B':'{','7D':'}'};
const offlineURL='javascript:'+encodeURIComponent(wrapper).replace(/%(3B|2C|3A|2F|3D|5B|5D|7B|7D)/g,(_,hex)=>safePunctuation[hex]);
fs.writeFileSync('outputs/revan-favorito-offline.txt',offlineURL+'\n');
const loader=`void(async()=>{if(location.hostname!=='revan-atendimento.brisanet.net.br'){alert('Abra um atendimento do Revan.');return;}if(window.__rvLoading)return;const old=document.getElementById('rv-mini');if(old?.dataset.busy==='true'){alert('Aguarde a operação atual terminar antes de atualizar.');return;}const editing=[...document.querySelectorAll('button')].some(b=>!old?.contains(b)&&b.getClientRects().length&&b.textContent.trim().toLowerCase()==='cancelar');if(editing){alert('Salve ou cancele a edição antes de atualizar o painel.');return;}window.__rvLoading=true;const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),12000);try{const response=await fetch('https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/Revan/outputs/revan-minidashboard.user.js?t='+Date.now(),{cache:'no-store',signal:controller.signal});if(!response.ok)throw Error('HTTP '+response.status);const code=await response.text();if(!code.includes('@name         Revan')||!code.includes("root.id = 'rv-mini'"))throw Error('Arquivo inválido');const version=code.match(/@version\\s+(\\S+)/)?.[1];if(old&&old.dataset.version===version){old.querySelector('.close')?.click();return;}Function(code)();}catch(error){alert('Não foi possível atualizar pelo GitHub: '+error.message+'. Use o instalador offline se o navegador bloquear o carregamento.');}finally{clearTimeout(timer);window.__rvLoading=false;}})()`;
new vm.Script(loader);
const url='javascript:'+encodeURIComponent(loader);
if(decodeURIComponent(url.slice(11))!==loader)throw new Error('Falha na codificação');
fs.writeFileSync('outputs/revan-favorito.txt',url+'\n');
fs.writeFileSync('outputs/revan-favoritos.html',`<!DOCTYPE NETSCAPE-Bookmark-file-1>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Favorito Revan</TITLE>
<H1>Favorito Revan</H1>
<DL><p>
  <DT><A HREF="${url}" ICON="${icon}">💠 Revan — Equipamentos</A>
</DL><p>
`);
fs.writeFileSync('outputs/instalar-favorito-revan.html',`<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Instalar favorito Revan</title><link rel="icon" href="${icon}">
<style>body{font:16px system-ui;background:#f3f6fb;color:#17243c;max-width:720px;margin:60px auto;padding:24px}main{background:white;border:1px solid #dce4ee;border-radius:20px;padding:32px}a.favorito{display:inline-block;background:#163e73;color:white;text-decoration:none;border-radius:12px;padding:16px 22px;font-weight:600}li{margin:12px 0}small{color:#52617a}</style>
<main><h1>Favorito do minidashboard Revan</h1><p>Arraste o botão abaixo para a barra de favoritos do Chrome ou Edge.</p>
<style>a.favorito{background:linear-gradient(120deg,#00a8cc,#7945de);box-shadow:0 8px 24px #7945de33;cursor:grab;transition:transform .2s,box-shadow .2s}a.favorito:hover{transform:translateY(-3px);box-shadow:0 12px 28px #7945de55}a.favorito:active{cursor:grabbing}a.favorito img{width:28px;height:28px;vertical-align:middle;margin-right:8px;pointer-events:none}</style>
<p><a class="favorito" href="${url}" draggable="true" title="Arraste este botão para a barra de favoritos"><img src="${icon}" alt="" draggable="false">💠 Revan — Equipamentos</a></p>
<p><small>Segure o botão acima e solte na barra de favoritos do navegador.</small></p>
<ol><li>Ative a barra de favoritos com <b>Ctrl + Shift + B</b>.</li><li>Arraste o botão azul para a barra.</li><li>Abra um atendimento no Revan e clique no favorito criado.</li></ol>
<p>Se preferir, importe <b>revan-favoritos.html</b> no gerenciador de favoritos do navegador e mova o favorito para a barra.</p>
<small>Versão ${version}. Este favorito busca a versão mais recente no seu GitHub a cada clique e inicia como botão. Salve ou cancele edições antes de atualizar. Requer acesso ao GitHub; bloqueios do navegador são informados. A versão offline está em revan-favorito-offline.txt.</small></main></html>`);
fs.writeFileSync('outputs/instalar-favorito-revan-offline.html',fs.readFileSync('outputs/instalar-favorito-revan.html','utf8').replace(url,offlineURL).replace('Este favorito busca a versão mais recente no seu GitHub a cada clique e inicia como botão. Salve ou cancele edições antes de atualizar. Requer acesso ao GitHub; bloqueios do navegador são informados. A versão offline está em revan-favorito-offline.txt.','Este favorito contém o código completo e não busca atualizações remotas. Arraste um novo favorito após cada atualização. Inicia como botão.'));
console.log(JSON.stringify({version,urlLength:url.length,syntax:'ok',encoding:'ok'}));
