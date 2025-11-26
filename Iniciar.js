(function() {
    const REPO_URL = "https://kingoffjoss.github.io/Meus-Scripts";
    console.log("[Loader] Iniciando via: " + REPO_URL);

    if(!window.chrome)window.chrome={};if(!window.chrome.runtime)window.chrome.runtime={};if(!window.chrome.storage)window.chrome.storage={};if(!window.chrome.runtime.getURL)window.chrome.runtime.getURL=p=>REPO_URL+"/"+p;
    if(!window.chrome.storage.local)window.chrome.storage.local={get:(k,c)=>{let r={};(Array.isArray(k)?k:[k]).forEach(x=>{try{r[x]=JSON.parse(localStorage.getItem(x))}catch(e){r[x]=localStorage.getItem(x)}});if(c)c(r)},set:(i,c)=>{for(let k in i)localStorage.setItem(k,JSON.stringify(i[k]));if(c)c()},remove:(k,c)=>{(Array.isArray(k)?k:[k]).forEach(x=>localStorage.removeItem(x));if(c)c()}};
    if(!window.chrome.storage.onChanged)window.chrome.storage.onChanged={addListener:()=>{}};
    
    function lC(f){let l=document.createElement("link");l.href=REPO_URL+"/"+f+"?v="+Date.now();l.rel="stylesheet";l.type="text/css";document.head.appendChild(l)}
    function lS(f){return new Promise((r,j)=>{let s=document.createElement("script");s.src=REPO_URL+"/"+f+"?v="+Date.now();s.onload=r;s.onerror=j;document.body.appendChild(s)})}

    lC("style.css");
    lS("compatibility.js").then(()=>lS("gerente.js")).then(()=>lS("bar.js")).then(()=>lS("respostas.js")).then(()=>lS("protocolos.js")).then(()=>lS("extrator.js")).then(()=>lS("pausas.js")).then(()=>lS("ia.js")).then(()=>lS("menu.js")).then(()=>lS("cronometros.js")).then(()=>{console.log("✅ Sistema Carregado (KingOffJoss)!");});
})();
