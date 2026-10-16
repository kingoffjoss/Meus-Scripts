// ==UserScript==
// @name         Revan — Minidashboard de equipamentos
// @namespace    local.revan.minidashboard
// @version      4.8.0
// @updateURL    https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/Revan/outputs/revan-minidashboard.user.js
// @downloadURL  https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/Revan/outputs/revan-minidashboard.user.js
// @description  Campos próprios e ações integradas aos controles originais do Revan.
// @match        https://revan-atendimento.brisanet.net.br/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  'use strict';
  document.getElementById('rv-mini')?.remove();
  document.querySelectorAll('style').forEach(style => {
    if (style.textContent.includes('#rv-mini')) style.remove();
  });
  const root = document.createElement('section');
  root.id = 'rv-mini';
  root.dataset.version = '4.8.0';
  root.innerHTML = `<button class="launch" aria-expanded="false"><span class="launch-icon">◈</span> Equipamentos <span class="launch-dot"></span></button><div class="panel" hidden><header><strong><span class="brand-icon">◈</span> Equipamentos <small>REDE & CONEXÃO</small></strong><button class="close" aria-label="Minimizar" title="Minimizar para botão">−</button></header><div class="context"></div><select class="equipment" aria-label="Equipamento"></select><nav></nav><p class="status" role="status"></p><div class="body"></div><footer></footer></div>`;
  const refreshButton=document.createElement('button');refreshButton.className='refresh-panel';refreshButton.type='button';refreshButton.textContent='↻';refreshButton.setAttribute('aria-label','Atualizar painel');refreshButton.title='Atualizar painel e recuperar os controles';
  root.querySelector('header').insertBefore(refreshButton,root.querySelector('.close'));
  const css = document.createElement('style');
  css.textContent = `#rv-mini{position:fixed;right:20px;bottom:20px;z-index:10000;font:14px system-ui,sans-serif;color:#17243c}#rv-mini *{box-sizing:border-box}#rv-mini [hidden]{display:none!important}#rv-mini button{font:inherit;cursor:pointer;border:1px solid #dbe3ee;border-radius:10px;padding:9px 12px;background:white;color:#163e73}#rv-mini button:disabled{opacity:.5;cursor:default}#rv-mini .launch,#rv-mini .primary{background:#163e73;color:white;border-color:#163e73}#rv-mini .launch{box-shadow:0 6px 24px #102d5540;font-weight:650}#rv-mini .panel{position:absolute;right:0;bottom:56px;width:min(560px,calc(100vw - 40px));max-height:calc(100vh - 100px);overflow:auto;background:#f5f7fb;border:1px solid #dce4ee;border-radius:18px;box-shadow:0 18px 50px #102d5538}#rv-mini header{display:flex;justify-content:space-between;align-items:center;background:#163e73;color:white;padding:15px 18px}#rv-mini .close{background:#ffffff20;color:white;border:0}#rv-mini .context,#rv-mini nav,#rv-mini .status,#rv-mini .body,#rv-mini footer{padding:12px 18px;margin:0}#rv-mini .context{font-size:12px;color:#52617a}#rv-mini nav{display:flex;gap:8px;padding-top:0}#rv-mini nav .active{background:#e1eafb;border-color:#163e73}#rv-mini .status{background:#e9eff9;font-size:12px;line-height:1.5}#rv-mini .body{display:grid;gap:12px}#rv-mini .field{display:grid;gap:6px;background:white;border:1px solid #e1e7ef;border-radius:12px;padding:12px}#rv-mini label{font-weight:600;font-size:12px}#rv-mini input:not([type=checkbox]),#rv-mini select{width:100%;padding:9px;border:1px solid #cbd7e7;border-radius:8px;font:inherit;background:white;color:#17243c}#rv-mini input:disabled,#rv-mini select:disabled{background:#f0f3f7;color:#52617a}#rv-mini .equipment{width:calc(100% - 36px);margin:0 18px 12px}#rv-mini .toggle{display:flex;align-items:center;justify-content:space-between;background:white;padding:12px;border-radius:10px}#rv-mini .toggle input{width:18px;height:18px}#rv-mini .summary{white-space:pre-line;line-height:1.6;background:white;padding:12px;border-radius:12px}#rv-mini .actions,#rv-mini footer{display:flex;flex-wrap:wrap;gap:8px}#rv-mini footer{position:sticky;bottom:0;background:#f5f7fb;border-top:1px solid #dce4ee}#rv-mini small{font-size:11px;color:#52617a}#rv-mini .danger{color:#a52b33}#rv-mini .band{font-weight:700;color:#163e73;margin-top:8px}`;
  css.textContent += '#rv-mini .network-band{display:grid;gap:8px}#rv-mini h3.band{margin:4px 0;font-size:15px}';
  css.textContent += '#rv-mini.rv-dialog-open{z-index:900}';
  css.textContent += '#rv-mini .panel{position:fixed;right:20px;bottom:76px}#rv-mini header{cursor:move;touch-action:none;user-select:none}#rv-mini .launch{cursor:grab;touch-action:none;user-select:none}#rv-mini .launch:active{cursor:grabbing}';
  css.textContent += '#rv-mini nav{flex-wrap:wrap}#rv-mini .context{font-weight:600;line-height:1.6;color:#17243c}#rv-mini .test-result{padding:12px;border:1px solid #dce4ee;border-radius:12px;background:white}#rv-mini .test-result summary{cursor:pointer;font-weight:600;line-height:1.5}#rv-mini .test-detail{white-space:pre-wrap;line-height:1.6;color:#52617a;margin-top:10px}#rv-mini .test-success{border-left:4px solid #21865c}#rv-mini .test-error{border-left:4px solid #bd3541}#rv-mini .test-warning{border-left:4px solid #cb8b21}#rv-mini .auth-email{overflow-wrap:anywhere;font-weight:650}';
  css.textContent += `
    #rv-mini{font-size:12px}
    #rv-mini .panel{width:min(490px,calc(100vw - 24px));max-height:calc(100vh - 88px)}
    #rv-mini header{padding:9px 12px}
    #rv-mini button{padding:6px 9px;border-radius:8px;font-size:12px}
    #rv-mini .context,#rv-mini nav,#rv-mini .status,#rv-mini .body,#rv-mini footer{padding:8px 12px}
    #rv-mini .context{font-size:11px;line-height:1.45}
    #rv-mini nav{gap:5px;padding-top:0}
    #rv-mini .status{font-size:11px;line-height:1.4}
    #rv-mini .body{gap:8px}
    #rv-mini .field{padding:8px;gap:4px;border-radius:9px}
    #rv-mini input:not([type=checkbox]),#rv-mini select{padding:6px 7px;min-height:30px;font-size:12px}
    #rv-mini label{font-size:11px}
    #rv-mini .toggle{padding:7px 8px}
    #rv-mini .network-toolbar{align-items:center;justify-content:space-between}
    #rv-mini .network-toolbar .toggle{gap:10px;margin-left:auto;background:transparent;padding:4px 0}
    #rv-mini .summary{padding:8px;line-height:1.45;font-size:11px}
    #rv-mini .actions{gap:5px}
    #rv-mini small{font-size:10px;line-height:1.4}
    #rv-mini .network-band{grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;background:#fff;border:1px solid #dce4ee;border-radius:11px;padding:8px}
    #rv-mini .network-band .band,#rv-mini .network-band .ssid-field{grid-column:1/-1}
    #rv-mini h3.band{font-size:12px;margin:0 0 2px}
    #rv-mini .network-band .field{border:0;background:#f5f7fb;border-radius:7px;padding:6px;min-width:0}
    #rv-mini .network-band .ssid-field{background:transparent;padding:0 0 5px}
    #rv-mini .network-band .select-field label{display:grid;gap:4px}
    #rv-mini .device-info{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 12px;font-size:11px}
    #rv-mini .device-info span{color:#52617a;font-size:10px}
    #rv-mini .device-info strong{display:block;font-weight:600;overflow-wrap:anywhere}
    #rv-mini .command-section{background:#fff;border:1px solid #dce4ee;border-radius:9px;padding:8px}
    #rv-mini .command-heading{display:flex;justify-content:space-between;align-items:center;gap:8px;font-weight:700}
    #rv-mini .command-content{white-space:pre-wrap;overflow-wrap:anywhere;line-height:1.5;margin-top:6px;padding:7px;border-radius:6px;background:#fff3d9;border-left:3px solid #cb8b21}
    #rv-mini .command-empty{font-size:11px;color:#52617a;margin-top:4px}
    #rv-mini .test-result{padding:8px}
    @media(max-width:380px){#rv-mini .network-band{grid-template-columns:1fr}#rv-mini .network-band .band,#rv-mini .network-band .ssid-field{grid-column:1}#rv-mini .device-info{grid-template-columns:1fr}}
  `;
  css.textContent += `
    #rv-mini header{padding:7px 10px}
    #rv-mini .context,#rv-mini nav,#rv-mini .status,#rv-mini .body,#rv-mini footer{padding:6px 10px}
    #rv-mini nav{padding-top:0;gap:4px}
    #rv-mini button{padding:5px 7px}
    #rv-mini .body{gap:6px}
    #rv-mini .body.network-layout{grid-template-columns:repeat(2,minmax(0,1fr));align-items:start}
    #rv-mini .network-layout .network-toolbar{grid-column:1/-1}
    #rv-mini .network-layout .network-band{grid-template-columns:1fr;padding:7px;gap:4px;min-width:0;border-radius:8px}
    #rv-mini .network-layout .network-band .field{padding:3px;background:transparent}
    #rv-mini .network-layout .network-band .ssid-field{padding:0 0 3px}
    #rv-mini .network-layout .network-band .select-field label{grid-template-columns:minmax(0,1fr) minmax(0,98px);align-items:center;gap:4px}
    #rv-mini input:not([type=checkbox]),#rv-mini select{min-height:27px;padding:4px 6px}
    #rv-mini .network-layout label{font-size:10.5px}
    #rv-mini .network-layout .actions{gap:4px}
    #rv-mini .network-layout .ssid-field button{font-size:11px;padding:5px 6px}
    #rv-mini .summary,#rv-mini .command-section,#rv-mini .test-result{padding:7px}
    @media(max-width:480px){#rv-mini .body.network-layout{grid-template-columns:1fr}}
  `;
  css.textContent += `
    #rv-mini{font-family:Inter,Segoe UI,system-ui,sans-serif;color:#20304b}
    #rv-mini .panel{position:relative;inset:auto;width:min(490px,calc(100vw - 24px));background:linear-gradient(135deg,rgba(255,255,255,.93),rgba(235,244,255,.84) 58%,rgba(243,234,255,.88));backdrop-filter:blur(24px) saturate(150%);-webkit-backdrop-filter:blur(24px) saturate(150%);border:1px solid rgba(255,255,255,.9);border-radius:19px;box-shadow:0 20px 65px rgba(24,43,87,.22),0 3px 12px rgba(87,65,180,.12),inset 0 1px 0 #fff;animation:rv-reveal .2s ease-out}
    #rv-mini .launch{display:flex;align-items:center;gap:8px;padding:12px 16px;border:1px solid #ffffff80;border-radius:16px;font-weight:650;background:linear-gradient(115deg,#176bc2,#6544c7);box-shadow:0 8px 25px #3448a84d,inset 0 1px 0 #ffffff50;color:white;animation:rv-reveal .18s ease-out}
    #rv-mini .launch:hover{box-shadow:0 10px 30px #5443ba66;filter:brightness(1.08)}
    #rv-mini .launch-icon,#rv-mini .brand-icon{font-size:22px;color:#92f2ff}
    #rv-mini .launch-dot{width:6px;height:6px;background:#a5ffe2;border-radius:50%;box-shadow:0 0 10px #7cffd7}
    #rv-mini header{background:linear-gradient(105deg,#155b99,#354b9c 55%,#6a42a9);padding:10px 12px;border-bottom:1px solid #ffffff30;position:sticky;top:0;z-index:2}
    #rv-mini header strong{display:flex;align-items:center;gap:7px;font-size:13px;letter-spacing:.15px}
    #rv-mini header small{font-size:8px;letter-spacing:1px;color:#d6e3ff;white-space:nowrap;font-weight:500}
    #rv-mini .close{display:grid;place-items:center;width:27px;height:27px;padding:0;background:#ffffff20;border:1px solid #ffffff30;color:#fff;border-radius:9px;font-size:20px}
    #rv-mini .close:hover{background:#ffffff35}
    #rv-mini .context{padding:8px 12px;color:#3d4d69;font-weight:500;font-size:10.5px}
    #rv-mini .finance-badge{display:inline-block;padding:2px 6px;border-radius:6px;border:1px solid #ccd8e780;background:#ffffff80;font-weight:650;line-height:1.3}
    #rv-mini .finance-active{color:#167456;background:#d9f8ebaa;border-color:#a6dec980}
    #rv-mini .finance-blocked{color:#ad354e;background:#ffe2eaaa;border-color:#f3b9c780}
    #rv-mini .finance-other{color:#80641d;background:#fff1cdaa;border-color:#e9d39080}
    #rv-mini nav{padding:0 10px 7px;gap:5px}
    #rv-mini nav button{background:#ffffff80;border:1px solid #d8e2f180;color:#59677f;font-weight:600;border-radius:9px;padding:6px 9px}
    #rv-mini nav button.active{background:linear-gradient(110deg,#e2f3ff,#eee7ff);border-color:#b2bcf5;color:#4c43a2;box-shadow:0 2px 8px #6452ad18}
    #rv-mini button{transition:background .15s,box-shadow .15s,border-color .15s,filter .15s}
    #rv-mini button:not(:disabled):hover{border-color:#8db5ee;box-shadow:0 2px 7px #28477318}
    #rv-mini .status{margin:0 10px 1px;border-radius:8px;background:linear-gradient(110deg,#daf2f780,#ece5fa80);color:#476079;padding:6px 8px;font-size:10.5px}
    #rv-mini .body{padding:8px 10px;gap:7px}
    #rv-mini .network-layout .network-band{background:#ffffff88;border-color:#ffffffd9;box-shadow:0 2px 10px #4967a50b;border-radius:12px;padding:8px}
    #rv-mini .network-layout .network-band:nth-of-type(2){border-top:3px solid #26b1c4}
    #rv-mini .network-layout .network-band:nth-of-type(3){border-top:3px solid #9265d4}
    #rv-mini h3.band{font-size:12px;color:#40598d;margin:0 0 4px}
    #rv-mini input:not([type=checkbox]),#rv-mini select{background:#ffffffaa;border:1px solid #c8d8ebaa;border-radius:7px;color:#293d59}
    #rv-mini input:disabled,#rv-mini select:disabled{background:#eef3f880;color:#8391a7}
    #rv-mini input:focus,#rv-mini select:focus{outline:2px solid #b3a4eb80;outline-offset:1px;border-color:#8273cf}
    #rv-mini .field,#rv-mini .summary,#rv-mini .command-section,#rv-mini .test-result{background:#ffffff9c;border-color:#ffffffd9;border-radius:11px}
    #rv-mini .network-layout .network-band .field{background:transparent}
    #rv-mini .primary{background:linear-gradient(105deg,#177fad,#6c4ac7);border-color:transparent;color:white;box-shadow:0 3px 10px #4554aa25}
    #rv-mini .danger{background:#fff0f180;border-color:#edc9d580;color:#a85069}
    #rv-mini .command-content{background:#fff3d7aa;border-color:#e8b767}
    #rv-mini footer{background:rgba(242,246,255,.88);backdrop-filter:blur(12px);border-top:1px solid #ffffffcc;padding:7px 10px}
    #rv-mini .equipment{margin-bottom:7px;background:#ffffff90}
    #rv-mini ::-webkit-scrollbar{width:5px;height:5px}
    #rv-mini ::-webkit-scrollbar-thumb{background:#7890be70;border-radius:9px}
    @keyframes rv-reveal{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}
    @media(prefers-reduced-motion:reduce){#rv-mini .panel,#rv-mini .launch{animation:none}#rv-mini button{transition:none}}
    @media(max-width:380px){#rv-mini header small{display:none}}
  `;
  css.textContent += `
    #rv-mini .panel{background:radial-gradient(ellipse at 0 0,#d4f8ff80,transparent 55%),radial-gradient(ellipse at 100% 70%,#e9d8ff85,transparent 60%),linear-gradient(140deg,#f8fbffed,#eef4ffdf);box-shadow:0 24px 70px #26375730,0 4px 16px #644bac20,inset 0 1px 0 #fff}
    #rv-mini .body{gap:9px;padding-top:10px}
    #rv-mini nav button{position:relative;border-radius:10px;background:#ffffffa6}
    #rv-mini nav button.active{background:linear-gradient(110deg,#cff3ff,#e8ddff);border-color:#a8c0ee;box-shadow:0 3px 9px #5460b51c}
    #rv-mini .status{border-left:3px solid #62b5d8;background:linear-gradient(110deg,#ddf6ffb0,#e8e4ff80)}
    #rv-mini .command-section{position:relative;background:linear-gradient(115deg,#e4f8ffbb,#ffffffb0);border:1px solid #b9e4f780;border-radius:13px;padding:10px}
    #rv-mini .command-heading>span:before{content:'≋';display:inline-grid;place-items:center;width:24px;height:24px;border-radius:8px;background:#2da9c520;color:#258dab;font-size:19px;margin-right:7px;vertical-align:middle}
    #rv-mini .command-empty{padding-left:31px;color:#6a8196}
    #rv-mini .device-info{gap:6px}
    #rv-mini .device-info>div{position:relative;padding:7px 9px;border-radius:9px;border:1px solid #dce9f590;background:linear-gradient(115deg,#ffffffb0,#e8f1ff80);min-width:0}
    #rv-mini .device-info>div:nth-child(4n+2){background:linear-gradient(115deg,#ffffffa0,#ebe4ff90);border-color:#dcd4f190}
    #rv-mini .device-info>div:nth-child(4n+3){background:linear-gradient(115deg,#ffffffa0,#dff5f190);border-color:#cbe6df90}
    #rv-mini .device-info span{font-size:9px;font-weight:600;letter-spacing:.15px;color:#60768b}
    #rv-mini .device-info strong{margin-top:3px;font-size:11px;color:#304b70}
    #rv-mini .summary:has(.device-info){padding:0;background:transparent;border:0}
    #rv-mini .device-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}
    #rv-mini .device-actions button{padding:9px 10px;text-align:left;display:flex;align-items:center;gap:7px;border-radius:11px;background:linear-gradient(110deg,#e6f5ff,#f7fbff);border-color:#b9d8f280;color:#346e9a;font-weight:600}
    #rv-mini .device-actions button:before{content:'↗';font-size:16px;width:23px;height:23px;display:grid;place-items:center;border-radius:7px;background:#359bca18}
    #rv-mini .device-actions button.danger{background:linear-gradient(110deg,#ffebf1,#fff7ed);border-color:#efc3d380;color:#aa5877}
    #rv-mini .device-actions button.danger:before{content:'ϟ';background:#da78991a;color:#b46383}
    #rv-mini .device-actions button:hover:not(:disabled){box-shadow:0 4px 12px #5478ac26;filter:brightness(1.03)}
    #rv-mini .test-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
    #rv-mini .test-stat{padding:8px 10px;border-radius:11px;border:1px solid #ffffffc0;background:#ffffff80}
    #rv-mini .test-stat strong{display:block;font-size:19px;line-height:1.1;letter-spacing:-.4px}
    #rv-mini .test-stat span{font-size:10px;font-weight:600}
    #rv-mini .stat-success{background:linear-gradient(130deg,#d8f7ec,#f2fff8);color:#288663;border-color:#bae8d280}
    #rv-mini .stat-error{background:linear-gradient(130deg,#ffe0eb,#fff2f6);color:#b7476e;border-color:#f3bdd180}
    #rv-mini .stat-warning{background:linear-gradient(130deg,#fff0d0,#fffbee);color:#a17c26;border-color:#efdda280}
    #rv-mini .test-result{padding:0;overflow:hidden;border-radius:12px;border:1px solid #dce5f280;background:#ffffff90;transition:box-shadow .18s}
    #rv-mini .test-result:hover{box-shadow:0 3px 12px #5676ac13}
    #rv-mini .test-result summary{list-style:none;display:flex;align-items:center;gap:7px;padding:9px 10px;font-size:11px}
    #rv-mini .test-result summary::-webkit-details-marker{display:none}
    #rv-mini .test-result summary:before{content:'•';display:grid;place-items:center;width:20px;height:20px;flex-shrink:0;border-radius:7px;background:#dce9f5;font-size:16px;color:#52738c}
    #rv-mini .test-result summary:after{content:'⌄';margin-left:auto;color:#7890a6;transition:transform .18s}
    #rv-mini .test-result[open] summary:after{transform:rotate(180deg)}
    #rv-mini .test-success{border-left:3px solid #48b997}
    #rv-mini .test-success summary:before{content:'✓';background:#d6f4e8;color:#24946d;font-size:12px}
    #rv-mini .test-error{border-left:3px solid #d87497;background:linear-gradient(135deg,#fff0f5aa,#ffffffb0)}
    #rv-mini .test-error summary:before{content:'!';background:#fbdce9;color:#b24c72;font-size:13px;font-weight:700}
    #rv-mini .test-warning{border-left:3px solid #d5ac59}
    #rv-mini .test-warning summary:before{content:'!';background:#fff0cd;color:#a78028}
    #rv-mini .test-detail{padding:0 10px 10px;margin:0;font-size:11px}
    #rv-mini .test-message{padding:7px 9px;background:#ffffff90;border-radius:8px;margin-bottom:7px;color:#7b5370}
    #rv-mini .test-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
    #rv-mini .metric-card{padding:8px;border-radius:9px;border:1px solid #dce5f090;background:#edf4ffb0;white-space:pre-wrap;overflow-wrap:anywhere}
    #rv-mini .metric-card.expected{background:#e8f6eeb0;border-color:#d1e9da90}
    #rv-mini .metric-card>span{display:block;font-size:9px;letter-spacing:.5px;text-transform:uppercase;font-weight:700;color:#68819e;margin-bottom:5px}
    #rv-mini .metric-card.expected>span{color:#618773}
    #rv-mini .auth-card{position:relative;padding:14px 12px 12px 54px;border-radius:14px;background:linear-gradient(125deg,#e8e5ffb0,#e0f5ffb0);border:1px solid #d5cef5aa;min-height:82px}
    #rv-mini .auth-card:before{content:'@';position:absolute;left:12px;top:15px;width:31px;height:31px;display:grid;place-items:center;background:linear-gradient(135deg,#7960d8,#46a9ce);color:white;border-radius:10px;box-shadow:0 4px 10px #7060b530;font-size:19px;font-weight:650}
    #rv-mini .auth-card label{color:#6b6492;font-size:9px;text-transform:uppercase;letter-spacing:.6px}
    #rv-mini .auth-email{margin:4px 0 6px;color:#493b7f;font-size:13px}
    #rv-mini .auth-card small{color:#478572}
    #rv-mini .auth-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}
    #rv-mini .auth-actions button{padding:10px 8px;text-align:left;background:linear-gradient(120deg,#e5f4ff,#f5f1ff);border-color:#c9d6ef90;border-radius:11px;color:#586492;font-weight:600}
    #rv-mini .auth-actions button:before{content:'↻';margin-right:6px;color:#8371c5;font-size:16px}
    #rv-mini .refresh-reading{background:#ffffff50;border:1px dashed #c6d6e9;color:#7086a0;padding:5px;font-size:10px;box-shadow:none}
    #rv-mini .network-layout .network-band{background:linear-gradient(145deg,#ffffffcc,#eaf8ff85);box-shadow:0 4px 12px #607da515}
    #rv-mini .network-layout .network-band:nth-of-type(3){background:linear-gradient(145deg,#ffffffcc,#eee6ff90)}
    #rv-mini .network-layout .ssid-field button{background:#ffffff90;border-color:#cfdcf380;border-radius:8px;color:#6281a1}
    #rv-mini .network-toolbar .toggle{color:#667391}
    #rv-mini .network-options{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px}
    #rv-mini .network-options .toggle{margin:0;padding:7px;border-radius:9px;border:1px solid #d9e5f280;background:linear-gradient(115deg,#ffffffb0,#e5f3ff80);font-size:10px;gap:5px;color:#526c89}
    #rv-mini .network-options .toggle:nth-child(2){background:linear-gradient(115deg,#ffffffb0,#e5f7ef90)}
    #rv-mini .network-options .toggle:nth-child(3){background:linear-gradient(115deg,#ffffffb0,#eee7ff90)}
    #rv-mini .network-options input{width:14px;height:14px;flex-shrink:0;accent-color:#7661ca}
    #rv-mini .auto-network{grid-column:1/-1;padding:9px;border-radius:11px;background:linear-gradient(110deg,#dcefffaa,#ece2ffaa);border:1px solid #c9cff099;display:grid;gap:5px}
    #rv-mini .auto-network button{background:linear-gradient(110deg,#4c98b8,#8a65c0);color:white;border:0;font-weight:600;padding:8px}
    #rv-mini .auto-report{white-space:pre-wrap;font-size:10px;line-height:1.5;color:#566a88}
    @media(prefers-reduced-motion:reduce){#rv-mini .test-result,#rv-mini .test-result summary:after{transition:none}}
  `;
  css.textContent += '#rv-mini .refresh-panel{margin-left:auto;margin-right:5px;display:grid;place-items:center;width:27px;height:27px;padding:0;background:#ffffff20;border:1px solid #ffffff30;color:white;border-radius:9px;font-size:18px}#rv-mini .refresh-panel:hover{background:#ffffff35}';
  document.head.append(css);
  document.body.append(root);
  const $ = s => root.querySelector(s);
  const positionKey = 'revan-mini-widget-position-v2';
  let positions = {}, suppressLaunchClick = false;
  try { positions = JSON.parse(localStorage.getItem(positionKey) || '{}') || {}; } catch {}
  function place(element, position) {
    if (!position || !Number.isFinite(position.x) || !Number.isFinite(position.y)) return;
    const rect = element.getBoundingClientRect();
    const x = Math.max(0, Math.min(position.x, Math.max(0, innerWidth - rect.width)));
    const y = Math.max(0, Math.min(position.y, Math.max(0, innerHeight - rect.height)));
    element.style.left = `${x}px`; element.style.top = `${y}px`;
    element.style.right = 'auto'; element.style.bottom = 'auto';
  }
  function restorePositions() {
    place(root, positions.widget);
    if (positions.widget) {
      const rect=root.getBoundingClientRect();positions.widget={x:rect.left,y:rect.top};
    }
  }
  function draggable(handle, element, key) {
    let drag = null;
    handle.addEventListener('pointerdown', event => {
      if (event.button !== 0 || (handle === $('header') && event.target.closest('button,input,select'))) return;
      const rect = element.getBoundingClientRect();
      drag = {id:event.pointerId, startX:event.clientX, startY:event.clientY, left:rect.left, top:rect.top, moved:false};
      handle.setPointerCapture(event.pointerId);
    });
    handle.addEventListener('pointermove', event => {
      if (!drag || drag.id !== event.pointerId) return;
      const dx = event.clientX - drag.startX, dy = event.clientY - drag.startY;
      if (!drag.moved && Math.hypot(dx, dy) < 5) return;
      drag.moved = true;
      place(element, {x:drag.left + dx, y:drag.top + dy});
      event.preventDefault();
    });
    const finish = event => {
      if (!drag || drag.id !== event.pointerId) return;
      if (drag.moved) {
        const rect = element.getBoundingClientRect();
        positions[key] = {x:rect.left, y:rect.top};
        try { localStorage.setItem(positionKey, JSON.stringify(positions)); } catch {}
        if (handle === $('.launch')) suppressLaunchClick = true;
      }
      drag = null;
      if (handle.hasPointerCapture(event.pointerId)) handle.releasePointerCapture(event.pointerId);
    };
    handle.addEventListener('pointerup', finish);
    handle.addEventListener('pointercancel', event => { finish(event); suppressLaunchClick = false; });
  }
  draggable($('.launch'), root, 'widget');
  draggable($('header'), root, 'widget');
  restorePositions();
  window.addEventListener('resize', restorePositions);
  const text = e => (e?.textContent || '').trim();
  const normalized = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  const all = (e, s) => Array.from(e.querySelectorAll(s));
  const aliases = {
    'Habilitar rede': ['Habilitar rede', 'Ativar rede'],
    'Desabilitar rede': ['Desabilitar rede', 'Desativar rede'],
    CPE: ['CPE', 'Informações CPE', 'Informações do CPE'],
    ONU: ['ONU', 'Informações ONU', 'Informações da ONU'],
    Roteador: ['Roteador', 'Informações Roteador', 'Informações do Roteador'],
    Rede: ['Rede', 'Configurações da rede', 'Configurações de rede']
  };
  const matches = (element, name) => (aliases[name] || [name]).some(alias => normalized(text(element)) === normalized(alias));
  const nativeButton = (name, c = card) => c && all(c, 'button,[role="tab"]').find(e => !root.contains(e) && matches(e, name));
  const cards = () => {
    const found = new Set();
    for (const onu of all(document, 'button,[role="tab"]').filter(e => !root.contains(e) && (matches(e, 'ONU') || matches(e, 'CPE')))) {
      for (let container = onu.parentElement; container && container !== document.body; container = container.parentElement) {
        const hasTabs = ['ONU', 'Roteador', 'Rede'].every(n => nativeButton(n, container)) || ['CPE', 'Rede'].every(n => nativeButton(n, container));
        const hasContent = ['Consultar sinal', 'Adicionar roteador', 'Dispositivos conectados', 'Verificar gerência', 'Trocar', 'Reiniciar', 'Editar'].some(n => nativeButton(n, container)) || container.querySelector('input[placeholder="Nome da rede Wi-Fi"]');
        if (hasTabs && hasContent) { found.add(container); break; }
      }
    }
    return [...found].filter(c => ![...found].some(other => other !== c && c.contains(other)));
  };
  let operationEpoch=0;
  css.textContent += '#rv-mini .command-state,#rv-mini .save-review{padding:10px;border-radius:12px;background:#ffffffb8;margin:5px 0;display:grid;gap:6px}#rv-mini .command-state.good,#rv-mini .diagnostic-good{border-left:3px solid #10b981;background:#10b98114}#rv-mini .command-state.bad,#rv-mini .diagnostic-bad{border-left:3px solid #f43f5e;background:#f43f5e14}#rv-mini .command-state.pending{border-left:3px solid #f59e0b}#rv-mini .save-review{border:1px solid #8b5cf6;color:#293765;font-size:11px;grid-column:1/-1}#rv-mini .client-message{grid-column:1/-1;background:#ffffffaa;border-radius:12px;padding:10px}#rv-mini textarea{width:100%;resize:vertical;font:12px system-ui;border:1px solid #cbd7e7;border-radius:8px;padding:8px;margin:8px 0}#rv-mini .diagnostic-hint{display:block;padding:6px 12px;color:#52617a}';
  const interrupted=()=>Object.assign(new Error('Operação interrompida para atualizar o painel.'),{code:'RV_REFRESH'});
  const pause = ms => {const token=operationEpoch;return new Promise((resolve,reject)=>setTimeout(()=>token===operationEpoch?resolve():reject(interrupted()),ms));};
  let card = null, opened = false, editing = false, busy = false, tabName = 'Rede', route = location.hash;
  let options = new Map(), changed = false, timer;
  const generatedPasswords = new Map();
  let editBaseline=null, reviewRequested=false, savedNetwork=null, commandWatch=null;
  const commandHistory=[];
  function networkSnapshot() {
    const data={};
    all(card,'input[placeholder="Nome da rede Wi-Fi"],input[placeholder="Senha da rede"]').forEach((e,i)=>{data[`${headingFor(e)} · ${e.placeholder} · ${i}`]=e.value;});
    all(card,'ion-select').forEach((e,i)=>{const label=e.parentElement.cloneNode(true);all(label,'ion-select').forEach(n=>n.remove());data[`${headingFor(e)} · ${text(label)} · ${i}`]=selectedValue(e);});
    all(card,'ion-switch').forEach((e,i)=>{const b=e.querySelector('button');const explicit=b?.getAttribute('aria-checked')??e.getAttribute('aria-checked');data[`Opção ${i+1} · ${text(e.parentElement).slice(0,45)}`]=explicit!==null?explicit:String(b?.classList.contains('ion-switch--active')||e.classList.contains('checked'));});
    return data;
  }
  function commandFeedback() {
    return all(document,'.ant-message-notice-content,.ant-notification-notice,[role="alert"],.toast-message').filter(e=>!root.contains(e)&&e.getClientRects().length).map(e=>text(e)).join('\n');
  }
  function monitorCommand(name) {
    if(commandWatch)clearInterval(commandWatch);
    const entry={name,state:'Executando',detail:'Aguardando resposta do Revan.',started:Date.now(),route:location.hash,before:commandFeedback()};commandHistory.unshift(entry);commandHistory.splice(5);
    commandWatch=setInterval(()=>{
      if(!root.isConnected||entry.route!==location.hash){clearInterval(commandWatch);commandWatch=null;return;}
      const feedback=commandFeedback();
      if(feedback&&feedback!==entry.before){
        if(/falh|erro|não foi|nao foi|indisponível/i.test(feedback)){entry.state='Falhou';entry.detail=feedback;}
        else if(/sucesso|concluíd|concluid|realizado|executado/i.test(feedback)){entry.state='Concluído';entry.detail=feedback;}
        else entry.detail=feedback;
      }
      if(Date.now()-entry.started>30000&&entry.state==='Executando'){entry.state='Sem confirmação';entry.detail='Tempo limite de 30s. Confira o resultado e os comandos do Revan antes de repetir.';}
      if(entry.state!=='Executando'){clearInterval(commandWatch);commandWatch=null;}
      if(opened&&!busy&&card?.isConnected)render();
    },700);
  }
  function renderCommandHistory(body) {
    if(!commandHistory.length)return;
    const block=make('div','command-section');block.append(make('strong','','Últimas ações'));
    for(const e of commandHistory.filter(e=>e.route===location.hash)){const item=make('div',`command-state ${e.state==='Falhou'?'bad':e.state==='Concluído'?'good':'pending'}`);item.append(make('strong','',`${e.state} · ${e.name}`),make('small','',e.detail));block.append(item);}
    body.append(block);
  }
  let autoPending=false, autoReport='';
  const tagNames=new Set(["(Desativada) Brisa Play","Agendamento de Retorno","Alannio / Concluido","Alannio / Pendência","Alannio / Trabalhando","Alcance do Wi-Fi","Alteração de cômodo","Alteração de dados cadastrais - (Carimbo)","Alteração de Senha do WIFI","Alteração de Senha TV (autocensura)","Alterar data de vencimento","Alterar modo da ONU","Amaury Bezerra / Concluído","Amaury Bezerra / Pendência","Amaury Bezerra / Trabalhando","Área do Cliente - (Carimbo)","Ativo sem contato/Env. SMS","Atualização de E-mail","Atualização de telefone","Atualização do Plano","Aumento/Redução do Limite da Telefonia","Bloqueio de chamadas fixo","Brisa Móvel","BrisaCliente","BrisaMusic","BrisaMusicPremium","BrisaPlay","Cabo da Fibra Rompido","Cabo de fibra baixo/remanejamento - FTTH","Cabo de Rede não disponibilizado no ato da Instalação - até 7d","Cabo desconectado","Caio Vinicius / Pendência","Canais Quadriculando","Canal Em Manutenção","Chamado IMOC","Chamado interno incorreto (suporte interno)","Chamado proativo","Chamado Teste","Cliente desistiu da visita técnica","Cliente já atendido","Cliente Não Localizado - AGR","Cliente não pagou","Cliente priorizado - atendimento","Cob. Alteração de Plano (dentro do prazo)","Cob. Alteração de Plano (fora do prazo)","Cobrança de equipamento danificado/perdido","Cobrança De Instalação Dentro Do Prazo","Cobrança De Instalação Fora Do Prazo","COBRANÇA DE RECOLHIMENTO DE KIT","COBRANÇA DE REPARO DENTRO DO PRAZO","COBRANÇA DE REPARO FORA DO PRAZO","Cobrança de Retorno Interno","Compartilhamento de Rede","Conecta+","Configuração de roteador não realizada n​a instalação - 7d","Configuração Estruturada de Rede Interna","David Myquellyson / Concluido","David Myquellyson / Pendência","David Myquellyson / Trabalhando","Declaração de débito","Declaração de quitação anual","Desbloqueio temporário","Desbloqueio temporário - (Carimbo)","Desbloqueio/Bloqueio para ligações 0300/0500","Desbloqueio/Bloqueio para ligações internacionais","Desbloqueio/Bloqueio para números especifico","Desbloqueio/Bloqueio para realizar ligações a cobrar","Desconto sem acesso","Discovery Kids","E00","Eliwelton Alves / Concluído","Eliwelton Alves / Pendência","Eliwelton Alves / Trabalhando","Encerrado por falta de cordialidade","Endereços de pontos de pagamento","Expansão dos pontos de pagamento","Facebook","Falha de Autenticação","Falta de Recolhimento de equipamento","Fidelização (termos do contrato)","Formas de pagamento - (Carimbo)","FOX","Francielio / Concluido","Francielio / Pendência","Francielio / Trabalhando","Globoplay","Heroapp","Histórico de Ligações do Fixo","Horários de funcionamento de escritórios","Indisponibilidade area de risco","Informação APP/SITE","Informação atendimento","Informação de nota fiscal","Informação Técnica","Informações do Serviço","Informações sobre cartão brisanet","Informações sobre vencimento","Insatisfeito com o equipamento instalado - 7d","Instabilidade no WI-FI","Instabilidade TP-LINK","Instagram","Instalação de Roteador TP-LINK","Instalação Inadequada (local) - 7d","Instalação mal sucedida (sem acesso) - 7d","IPTV - (Carimbo)","Israel Henrick / Pendência","Jaquicione / Pendência","Jaquicione / Trabalhando","Jean Aires / Concluído","Jean Aires / Pendência","Jean Aires / Trabalhando","Jeymerson / Pendência","Jeymerson / Trabalhando","João Neto / Concluido","João Neto / Pendência","João Neto / Trabalhando","Klaus Vasconcelos / Concluído","Klaus Vasconcelos / Pendência","Klaus Vasconcelos / Trabalhando","Latência alta para servidor do jogo","Ligação caiu","LinkedIn","Live FC","Mau atendimento de vendedor externo","Max","Max Walney / Concluído","Max Walney / Pendência","Max Walney / Trabalhando","Monitoria CSAT","Mudança de Numero Fixo","Multas e juros","Multas e Juros","Não Efetua Ligações","Não recebe Ligações","Nat Geo kid's","Netflix","Nooggin","Notificação de débito/bloqueio ou desativação","Pendências / Agend. J.A - Kaio","Perda de pacotes","Personalização da Rede wifi","Ping alto","Plano não chega o contratado - FTTH","Pon apagada - FTTH","Pon piscando - FTTH","Porta Incorreta","Portas virtuais bloqueadas","Pós atendimento","Pós-Venda (CX)","Premiere","Problema em Redes sociais","Problema na Maquineta de Cartão","Problema na OLT","Problema na portabilidade","Problema no Áudio","Problema no Pabx do Cliente","Problema no Replay","Problemas com o Telefone Fixo","Qualifica","Reagendou visita","Receptor Bloqueado","Reclamação de jogos online","Recolher roteador","Recolhimento Desativado automático","REPARO MAL SUCEDIDO","Restrição de NAT","Retenção Suporte","Revisão de Equipamento","Rota Inoperante - FTTH","Sebastião Felix / Concluido","Sebastião Felix / Pendência","Sebastião Felix / Trabalhando","sem Acesso","Sem acesso","Sem acesso site ou sistema específico - FTTH","Sem acesso site ou sistema específico - FWA","Sem acesso TP-LINK","Sem contato","Senha de Autenticação","Servidor do jogo em manutenção","Servidor Inoperante (Rádio)","Sinal da fibra do cliente irregular - FTTH","Skeelo","SKY+ - Informações do plano","Solicitação de alteração de parede","Solicitação de alteração na Forma Pagamento não disponibilizada","Solicitação para separar redes Wi-Fi - FTTH","Solicitação para separar redes Wi-Fi - FWA","Solicitação para unificar redes Wi-Fi - FTTH","Solicitação para unificar redes Wi-Fi - FWA","Suporte a equipamento particular","Suporte ao técnico - (Carimbo)","Suspeita de LOS","Tarifação da telefonia","Taxa de alteração de Cômodo","Taxa de mudança de endereço","Tela Preta","Telecine","Telefone mudo","Telefonia - (Carimbo)","Troca de Cabo de Rede","Troca de Cabo Fibra - FTTH","Troca de Cabo HDMI/RCA","Troca de Conector (ONU)","Troca de Conector (RJ)","Troca de Conector (Splitter)","Troca de Controle","Troca de Equipamento","Troca de Fonte - FTTH","Troca de onu - FTTH","Troca de Radio","Troca de Receptor","Troca de roteador - FTTH","Troca de Telefone","Twitter","Ubook Select","Upgrade de roteador","Valor de fatura divergente","Valor de IP fixo","Valores cobrados durante bloqueio/desativação/sem acesso","Velocidade (Taxa de Download/Upload)","Visita sem êxito","Visita sem êxito 2","Visita sem êxito 3","Visita técnica (dentro do prazo)","Visita técnica (fora do prazo)","Watch Espn","Webmail","Wi-Fi da ONU/Roteador desativado"]);
  const emptyTagDraft=()=>({query:'',selected:'',comment:'',progress:null,external:false,destination:'Suporte Externo',problem:'',problemQuery:'',service:'',forwardProgress:null});
  let tagDraft=emptyTagDraft();
  const selectedValue = e => text(e.querySelector('.ion-select-item__content'));
  const note = message => { $('.status').textContent = message; };
  const technology = () => nativeButton('CPE') ? 'FWA' : 'Fibra';
  const nativeEditing = () => Boolean(nativeButton('Cancelar')) || Boolean(nativeButton('Salvar') && !nativeButton('Editar'));
  function pageSection(title, selector) {
    const known = document.querySelector(selector);
    if (known && !root.contains(known)) return known;
    const heading = all(document, 'span,h1,h2,h3,h4,div').find(e => !root.contains(e) && !e.children.length && normalized(text(e)) === normalized(title));
    return heading?.closest('.card') || null;
  }
  function clientName() {
    return text(document.querySelector('.customer-name')) || 'Nome do cliente não disponível';
  }
  function financialSection() {
    const heading=all(document,'.primary-txt,span').find(e=>!root.contains(e)&&normalized(text(e))==='situacao financeira');
    return heading?.parentElement || null;
  }
  function financialStatus() {
    const section=financialSection();
    return text(section?.querySelector('.secondary-txt')) || section?.innerText.split('\n').map(v=>v.trim()).find(v=>v&&normalized(v)!=='situacao financeira') || 'Não informado';
  }
  function fixedIPs() {
    const ipv4 = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
    return [...new Set(all(document, '.contract-name').filter(e => !root.contains(e) && /ip\s*fixo/i.test(text(e)) && e.closest('.contract')?.querySelector('.active-indicator')).flatMap(e => text(e).match(ipv4) || []).filter(ip => ip.split('.').every(part => Number(part) <= 255)))];
  }
  function syncDialogs() {
    const hasDialog = all(document, '[role="dialog"],.ant-modal-wrap,.ant-drawer-open,.ant-popover,.sup-container').some(element =>
      !root.contains(element) && element.getClientRects().length && getComputedStyle(element).visibility !== 'hidden'
    );
    root.classList.toggle('rv-dialog-open', hasDialog);
  }
  const valid = () => {
    if (!root.isConnected || !card?.isConnected || location.hash !== route) throw new Error('O atendimento ou o painel mudou. Reabra o painel.');
  };
  async function until(check, timeout = 2500) {
    const token=operationEpoch;
    const deadline = Date.now() + timeout;
    while (Date.now() < deadline) { if(token!==operationEpoch)throw interrupted();valid(); const result = check(); if (result) return result; await pause(60); }
    throw new Error('O Revan não respondeu como esperado. Confira a tela original.');
  }
  async function run(action, allowStale=false) {
    if (busy) return;
    const token=operationEpoch;
    busy = true; lock();
    let limit;
    try { if(!allowStale)valid(); await Promise.race([Promise.resolve().then(action),new Promise((_,reject)=>{limit=setTimeout(()=>reject(Object.assign(new Error('Tempo limite da operação. Use ↻ para reler os controles antes de repetir.'),{code:'RV_TIMEOUT'})),45000);})]); }
    catch (e) { if(token===operationEpoch)note(e.message); }
    finally { clearTimeout(limit);if(token===operationEpoch){operationEpoch++;busy = false; if (opened && card?.isConnected) render(); lock();} }
  }
  function lock() {
    root.dataset.busy=String(busy);
    all(root, 'button,input,select,textarea').forEach(e => {
      if (!e.classList.contains('launch') && !e.classList.contains('close') && !e.classList.contains('refresh-panel')) e.disabled = busy || e.dataset.lock === 'true';
    });
  }
  function make(tag, className, content) {
    const e = document.createElement(tag); if (className) e.className = className;
    if (content !== undefined) e.textContent = content; return e;
  }
  function actionButton(name, action, className = '', disabled = false) {
    const b = make('button', className, name); b.type = 'button';
    b.dataset.lock = String(disabled); b.disabled = disabled;
    b.addEventListener('click', () => void run(action,name==='Cancelar'||name==='Recarregar opções')); return b;
  }
  function headingFor(element) {
    const band = element.closest('.fiber-network__band,.network-config__band');
    if (band) return band.textContent.match(/2\.4\s*GHz|5\.[08]\s*GHz/)?.[0] || 'Rede unificada';
    return 'Rede unificada';
  }
  function changeSSID(source, value) {
    valid();
    if (!editing || !source.isConnected || source.disabled || source.readOnly) throw new Error('Clique em Editar para alterar o SSID.');
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(source, value);
    source.dispatchEvent(new Event('input', {bubbles:true}));
    source.dispatchEvent(new Event('change', {bubbles:true}));
    source.dispatchEvent(new FocusEvent('blur', {bubbles:true}));
    changed = true;
    note('Nome da rede preparado. Clique em Salvar para aplicar no Revan.');
  }
  async function readOptions(element) {
    const trigger = element.querySelector('.icon') || element.querySelector('.ion-select');
    if (!trigger) throw new Error('Seletor sem controle de abertura.');
    if (!element.querySelector('ion-dropdown')) trigger.click();
    await until(() => element.querySelector('ion-dropdown .option-label'));
    const labels = all(element, 'ion-dropdown .option-label').map(text);
    if (element.querySelector('ion-dropdown')) trigger.click();
    await until(() => !element.querySelector('ion-dropdown'));
    await pause(100);
    return labels;
  }
  async function loadOptions() {
    const token=operationEpoch;
    options = new Map();
    const failures = [];
    for (const element of all(card, 'ion-select')) {
      if(token!==operationEpoch)throw interrupted();
      const input = element.querySelector('input');
      if (!input?.disabled) {
        try { options.set(element, await readOptions(element)); }
        catch (error) { if(error.code==='RV_REFRESH')throw error;failures.push(headingFor(element)); }
      }
    }
    if (failures.length) note('Alguns seletores não abriram no Revan. Clique em Recarregar opções para tentar novamente.');
    return failures.length;
  }
  async function setSelect(element, value) {
    if (!element.isConnected || element.querySelector('input')?.disabled) throw new Error('O seletor mudou ou está bloqueado.');
    const trigger = element.querySelector('.icon') || element.querySelector('.ion-select');
    if (!element.querySelector('ion-dropdown')) trigger.click();
    await until(() => element.querySelector('ion-dropdown .option-label'));
    const match = all(element, 'ion-dropdown .option-label').find(e => text(e) === value);
    if (!match) {
      trigger.click();
      throw new Error('Essa opção não está disponível no Revan. Carregue novamente os campos.');
    }
    match.closest('.ion-dropdown-item').click();
    await until(() => selectedValue(element) === value);
    await pause(100);
    await loadOptions();
    changed = true; note('Alteração preparada. Clique em Salvar para enviar ao Revan.');
  }
  async function switchTab(name) {
    if (editing || nativeEditing()) throw new Error('Salve ou cancele a edição antes de trocar de aba.');
    if (['Testes', 'Autenticação','Etiquetar'].includes(name)) { tabName = name; note(name === 'Etiquetar'?'Pesquise, escolha a etiqueta e clique em Anexar. O texto será registrado nos Eventos.':name === 'Testes' ? 'Resultados lidos do Revan. Expanda cada teste para ver os detalhes.' : 'Login de autenticação do cliente e ações disponíveis no Revan.'); return; }
    nativeButton(name).click(); tabName = name; await pause(100);
    if (name === 'Roteador') {
      await until(() => nativeButton('Verificar gerência') || nativeButton('Acessar Axess') || nativeButton('Adicionar roteador'));
      if (!nativeButton('Verificar gerência') && !nativeButton('Acessar Axess')) {
        nativeButton('Rede').click(); tabName = 'Rede';
        note('Sem roteador cadastrado. Configurações disponíveis em Rede.');
      } else note('Roteador cadastrado. Abra Rede para configurar o Wi-Fi.');
    } else note(name === 'Rede' ? 'Clique em Editar para alterar as configurações pelo painel.' : 'Ações da ONU disponíveis abaixo.');
    options.clear();
  }
  async function startEdit() {
    if (nativeEditing()) throw new Error('Já existe uma edição na tela original. Salve ou cancele antes de começar pelo painel.');
    const edit = nativeButton('Editar');
    if (!edit || edit.disabled) throw new Error('O Revan não disponibilizou a edição.');
    edit.click(); await until(() => nativeEditing() && nativeButton('Salvar'));
    editing = true; changed = false; generatedPasswords.clear();editBaseline=networkSnapshot();reviewRequested=false;savedNetwork=null;
    note('Carregando as opções do Revan…');
    const failures = await loadOptions();
    if (!failures) note('Edite os campos abaixo e clique em Salvar. As alterações ficam em edição até salvar.');
  }
  async function save(confirmed=false) {
    if (!nativeEditing() || !nativeButton('Salvar')) {await refreshDashboard();note('A edição já foi encerrada no Revan. Painel atualizado.');return;}
    const invalid = card.querySelector('input.ng-invalid,input[aria-invalid="true"]');
    if (invalid) throw new Error('Há um campo inválido no Revan. Corrija antes de salvar.');
    if (!changed) { note('Nenhuma alteração para salvar.'); return; }
    if(!confirmed){reviewRequested=true;note('Confira o resumo e clique em Confirmar salvar.');return;}
    const b = nativeButton('Salvar');
    if (b.disabled) throw new Error('O Revan ainda não liberou Salvar. Confira os campos.');
    const prepared=networkSnapshot();b.click();
    note('Salvar acionado no Revan. Aguardando saída do modo de edição…');
    try {
      await until(() => nativeButton('Editar') && !nativeEditing(), 12000);
      editing = false; changed = false; options.clear();reviewRequested=false;editBaseline=null;savedNetwork=prepared;
      note('O Revan encerrou a edição após Salvar. Confira as mensagens do sistema e a aplicação no equipamento.');
    } catch (e) { if(e.code==='RV_REFRESH')throw e;note('O salvamento não foi confirmado. Confira os avisos do Revan; o painel não reenviará automaticamente.'); }
  }
  async function cancel() {
    if(!card?.isConnected||route!==location.hash){await refreshDashboard();note('Controles recuperados a partir do atendimento atual.');return;}
    const b = nativeButton('Cancelar');
    if (!b) {await refreshDashboard();note('A edição já não está ativa no Revan. Os controles foram recuperados.');return;}
    b.click(); await until(() => !nativeEditing());
    editing = false; changed = false; options.clear(); generatedPasswords.clear();reviewRequested=false;editBaseline=null;savedNetwork=null;note('Edição cancelada no Revan.');
  }
  async function refreshDashboard() {
    const token=++operationEpoch;busy=true;lock();
    try{
      note('Atualizando painel e localizando os controles do Revan…');
      const list=cards();const previous=card;
      card=list.includes(previous)?previous:list[Number($('.equipment').value)||0]||list[0];route=location.hash;
      autoPending=false;autoReport='';options.clear();
      if(!card){editing=false;changed=false;generatedPasswords.clear();$('nav').replaceChildren();$('.body').replaceChildren();$('footer').replaceChildren();note('A seção ainda está carregando. Clique em ↻ novamente quando o Revan terminar.');return;}
      if(card!==previous)generatedPasswords.clear();
      const actual=nativeEditing(), retained=editing&&card===previous;
      editing=actual;if(!actual)changed=false;else if(!retained)changed=true;
      if(actual){tabName='Rede';const failures=await loadOptions();if(!failures)note('Painel recuperado. Edição do Revan preservada: Salvar ou Cancelar.');}
      else{
        if(tabName==='Rede'){
          const network=nativeButton('Rede');if(network&&!network.disabled){network.click();await pause(120);}
        }
        note('Painel atualizado. Os controles foram recuperados sem recarregar o atendimento.');
      }
      syncDialogs();
    }catch(error){if(token===operationEpoch)note(error.message);}
    finally{if(token===operationEpoch){busy=false;if(opened&&card?.isConnected)render();lock();}}
  }
  async function prepareAutomaticRadios() {
    if(root.classList.contains('rv-dialog-open'))throw new Error('Conclua primeiro o diálogo de otimização do Revan.');
    if(!editing)await startEdit();
    const report=[];
    for(const band of ['2.4','5.8']){
      const selectors=()=>all(card,'ion-select').filter(e=>headingFor(e).replace(/\s/g,'').startsWith(band));
      const fieldName=e=>{const copy=e.parentElement.cloneNode(true);all(copy,'ion-select').forEach(n=>n.remove());return normalized(text(copy));};
      const mode=selectors().find(e=>fieldName(e)==='modo do wi-fi');
      const widths=()=>selectors().find(e=>fieldName(e)==='largura de banda');
      if(!mode||!widths()){report.push(`${band}GHz: campos não disponíveis.`);continue;}
      const choices=options.get(mode)||[];
      const automatic=choices.find(v=>/^(auto|automatico|todos)/.test(normalized(v)));
      const compact=v=>normalized(v).replace(/[^a-z]/g,'');
      const priority=band==='2.4'?['bgnax','bgn','ax','gn','n']:['anacax','anac','acax','ax','ac','an'];
      const targetMode=automatic||priority.map(v=>choices.find(c=>compact(c)===v)).find(Boolean)||selectedValue(mode);
      if(targetMode!==selectedValue(mode))await setSelect(mode,targetMode);
      const width=widths(), available=options.get(width)||[];
      const dynamicWidth=available.find(v=>/^(auto|automatico|todos|all)/.test(normalized(v)))||available.find(v=>(v.match(/20|40|80|160/g)||[]).length>1);
      const targetWidth=band==='2.4'?(available.find(v=>/^20\s*mhz$/i.test(v))||selectedValue(width)):(dynamicWidth||selectedValue(width));
      if(targetWidth!==selectedValue(width))await setSelect(width,targetWidth);
      const channel=selectors().find(e=>fieldName(e)==='canal');
      report.push(`${band}GHz · modo ${targetMode} · largura ${targetWidth} · canal ${channel?selectedValue(channel):'não informado'}${band==='5.8'&&!dynamicWidth?' (largura atual preservada)':''}`);
    }
    autoPending=false;
    if(!changed){
      const stop=nativeButton('Cancelar');if(stop){stop.click();await until(()=>!nativeEditing());editing=false;options.clear();}
      autoReport=['Otimização dos canais solicitada ao Revan.',...report,'Modo e largura já atendem ao perfil. Nenhuma alteração adicional para salvar.'].join('\n');
      note('Otimização nativa solicitada. Modo/largura já atendem ao perfil.');return;
    }
    autoReport=['Otimização dos canais solicitada ao Revan.',...report,'Modo/largura preparados. Revise e clique em Salvar.'].join('\n');
    note('Configuração automática preparada para as duas bandas. Revise e clique em Salvar.');
  }
  async function automaticNetwork() {
    if(autoPending){await prepareAutomaticRadios();return;}
    if(editing||nativeEditing())throw new Error('Salve ou cancele a edição antes de executar a otimização nativa.');
    const optimizer=nativeButton('Otimizar canal');
    if(!optimizer||optimizer.disabled)throw new Error('O Revan não oferece Otimizar canal neste equipamento.');
    autoPending=true;
    optimizer.click();await pause(300);syncDialogs();
    if(root.classList.contains('rv-dialog-open')){
      autoReport='Conclua a otimização no diálogo original do Revan e clique em Continuar configuração automática. A otimização nativa pode aplicar canais diretamente.';
      note('O Revan abriu a otimização de canais. Conclua o diálogo para continuar.');return;
    }
    await until(()=>{const button=nativeButton('Otimizar canal');return button&&!button.disabled&&button.getAttribute('loading')!=='true'},15000);
    await prepareAutomaticRadios();
  }
  function renderNetwork(body) {
    const actions = make('div', 'actions network-toolbar');
    const devices = nativeButton('Dispositivos conectados');
    actions.append(actionButton('Dispositivos conectados', async () => {
      if (!devices?.isConnected || devices.disabled) throw new Error('Dispositivos conectados indisponível no Revan.');
      devices.click();
      await pause(100); syncDialogs();
      note('Consulta de dispositivos acionada no Revan. O painel permanece aberto.');
    }, '', !devices || devices.disabled || editing));
    body.append(actions);
    const enableNetwork=nativeButton('Habilitar rede');
    const disableNetwork=nativeButton('Desabilitar rede');
    const power=enableNetwork||disableNetwork;
    if(power){
      const label=enableNetwork?'Habilitar rede':'Desabilitar rede';
      actions.append(actionButton(label,async()=>{
        const latest=nativeButton(label);
        if(!latest?.isConnected||latest.disabled)throw new Error('Controle da rede indisponível no Revan.');
        latest.click();await pause(150);syncDialogs();
        note(`${label} acionado no Revan. Confira o retorno ou a confirmação do sistema.`);
      },enableNetwork?'':'danger',power.disabled||editing));
    }
    const networkOptions=make('div','network-options');
    for (const switchElement of all(card, 'ion-switch')) {
      const native = switchElement.querySelector('button');
      const title = text(switchElement.closest('.fiber-network__toggle-item'));
      if (!native || !['Rede unificada','Rede visível','Ativar UPnP'].includes(title)) continue;
      const wrap = make('label', 'toggle', title); const input = make('input'); input.type = 'checkbox';
      input.checked = native.classList.contains('ion-switch--active');
      // Unificação muda os campos. O fluxo nativo continua em edição e só persiste ao salvar.
      input.dataset.lock = String(!editing || native.disabled);
      input.addEventListener('change', () => void run(async () => {
        if (!native.isConnected || native.disabled) throw new Error('O controle mudou ou está bloqueado.');
        native.click(); changed = true;
        if(title==='Rede unificada'){generatedPasswords.clear();await pause(100);await loadOptions();}
        note('Alteração preparada. Revise os campos e clique em Salvar.');
      })); wrap.append(input); networkOptions.append(wrap);
    }
    if(networkOptions.children.length)body.append(networkOptions);
    const auto=make('div','auto-network');
    const optimizer=nativeButton('Otimizar canal');
    auto.append(actionButton(autoPending?'Continuar configuração automática':'Configuração automática · 2.4 + 5.8GHz',automaticNetwork,'',editing||(!autoPending&&(!optimizer||optimizer.disabled))));
    const explanation=make('small','',optimizer?'Canais: Revan · 2.4: 20MHz · 5.8: Auto, se disponível. A etapa nativa pode aplicar canais diretamente.':'Otimização nativa indisponível neste equipamento.');
    explanation.title='Perfil de compatibilidade baseado nas recomendações de Wi-Fi da Apple. Em 5GHz, a largura atual é mantida se o equipamento não oferece Auto ou larguras combinadas. A seleção do canal depende da otimização nativa do Revan e das condições locais.';
    auto.append(explanation);
    if(autoReport)auto.append(make('div','auto-report',autoReport));
    body.append(auto);
    const groups = new Map();
    function groupFor(name) {
      if (!groups.has(name)) {
        const group = make('div', 'network-band');
        group.append(make('h3', 'band', name));
        groups.set(name, group); body.append(group);
      }
      return groups.get(name);
    }
    const ssids = all(card, 'input[placeholder="Nome da rede Wi-Fi"]');
    const generators = all(card, 'button').filter(e => matches(e, 'Gerar senha'));
    const restorers = all(card, 'button').filter(e => matches(e, 'Restaurar SSID'));
    ssids.forEach((source, index) => {
      const bandName = headingFor(source);
      const key = `${bandName}:${index}`;
      const group = groupFor(bandName);
      const field = make('div', 'field ssid-field');
      const label = make('label', '', 'Nome da rede Wi-Fi (SSID)');
      const input = make('input'); input.type = 'text'; input.value = source.value;
      input.maxLength = source.maxLength > 0 ? source.maxLength : 32;
      input.autocomplete = 'off'; input.dataset.lock = String(!editing || source.disabled || source.readOnly);
      input.addEventListener('input', () => { try { changeSSID(source, input.value); } catch (error) { note(error.message); } });
      label.append(input); field.append(label);
      input.title = 'Edite o SSID permitido pelo Revan. Prefixos e sufixos fixos são mantidos pelo sistema.';
      const buttons = make('div', 'actions');
      const generator = generators[index];
      buttons.append(actionButton('Gerar senha', async () => {
        if (!editing || !generator?.isConnected || generator.disabled) throw new Error('Gerar senha indisponível. Clique em Editar.');
        const previous = all(card, 'input[placeholder="Senha da rede"]')[index]?.value;
        generator.click(); changed = true;
        const newPassword = await until(() => {
          const value = all(card, 'input[placeholder="Senha da rede"]')[index]?.value;
          return value && value !== previous ? value : false;
        }, 5000);
        generatedPasswords.set(key, newPassword);
        syncDialogs(); note('Senha gerada e capturada. Clique em Salvar antes de enviar ao cliente.');
      }, '', !editing || !generator || generator.disabled));
      const restorer = restorers[index];
      buttons.append(actionButton('Restaurar SSID', async () => {
        if (!editing || !restorer?.isConnected || restorer.disabled) throw new Error('Restaurar SSID indisponível. Clique em Editar.');
        restorer.click(); changed = true; await pause(100); syncDialogs();
        note('Restauração do SSID acionada. Revise o nome e clique em Salvar.');
      }, '', !editing || !restorer || restorer.disabled));
      field.append(buttons);
      const password = generatedPasswords.get(key);
      if (password) {
        const passwordLabel = make('label', '', 'Senha gerada');
        const output = make('input'); output.type = 'text'; output.readOnly = true;
        output.value = password; output.autocomplete = 'off'; passwordLabel.append(output); field.append(passwordLabel);
        field.append(actionButton('Copiar senha para o cliente', async () => {
          await navigator.clipboard.writeText(`Senha do Wi-Fi (${bandName}): ${password}`);
          note(editing ? 'Senha copiada. Salve as alterações antes de enviar ao cliente.' : 'Senha copiada para enviar ao cliente.');
        }));
        output.title = 'Salve as alterações antes de enviar a senha ao cliente.';
      }
      group.append(field);
    });
    for (const source of all(card, 'ion-select')) {
      const bandName = headingFor(source);
      const labelCopy = source.parentElement.cloneNode(true);
      all(labelCopy, 'ion-select').forEach(e => e.remove());
      const name = text(labelCopy);
      if (!['Modo do Wi-Fi', 'Largura de banda', 'Canal'].includes(name)) continue;
      groupFor(bandName);
      const field = make('div', 'field select-field');
      const label = make('label', '', name);
      const select = make('select'); const current = selectedValue(source);
      const choices = [...new Set([current, ...(options.get(source) || [])])].filter(Boolean);
      for (const value of choices) { const o = make('option', '', value); o.value = value; select.append(o); }
      select.value = current;
      select.dataset.lock = String(!editing || source.querySelector('input')?.disabled || !options.has(source));
      select.addEventListener('change', () => void run(() => setSelect(source, select.value)));
      label.append(select); field.append(label); groups.get(bandName).append(field);
    }
  }
  function renderDevice(body) {
    renderCommandHistory(body);
    if (tabName === 'ONU' || tabName === 'CPE') renderCommands(body);
    const container = card.querySelector('ion-tab-group')?.nextElementSibling;
    if (container) {
      const copy = container.cloneNode(true); all(copy, 'button,ion-icon,input').forEach(e => e.remove());
      const summary = make('div', 'summary');
      const info = make('div', 'device-info');
      const keys = ['Tipo','Local','Modo','Número de série','Status da linha','Modelo','OLT','MAC','PON','Modelo PON','Slot','Rota','Firmware','Data de ativação','Status CPE','IP','ICCID','Fabricante','Número da linha'];
      const lines = container.innerText.split('\n').map(v=>v.trim()).filter(Boolean);
      const used = new Set();
      for (let i=0;i<lines.length-1;i++) {
        if (!keys.includes(lines[i]) || keys.includes(lines[i+1]) || used.has(lines[i])) continue;
        const item=make('div');if(/Status/i.test(lines[i]))item.className=/ativa|bom|atualizado/i.test(lines[i+1])?'diagnostic-good':/falha|inativa|ruim|offline/i.test(lines[i+1])?'diagnostic-bad':'diagnostic-neutral';item.append(make('span','',lines[i]),make('strong','',lines[i+1]));info.append(item);used.add(lines[i]);
      }
      if (info.children.length >= 3) summary.append(info);
      else summary.textContent = text(copy).replace(/Operações sensíveis/g,'').trim();
      body.append(summary);
    }
    const actions = make('div', 'actions device-actions');
    const requested = tabName === 'CPE' ? ['Trocar', 'Troca de Chip', 'Reiniciar'] : tabName === 'ONU'
      ? ['Consultar sinal', 'Consultar spliter', 'Ativar ONU', 'Reconfigurar']
      : ['Ativar', 'Verificar gerência'];
    for (const name of requested) {
      const source = nativeButton(name);
      actions.append(actionButton(name, async () => {
        if (!source?.isConnected || source.disabled) throw new Error('Ação indisponível no Revan.');
        monitorCommand(name);source.click();
        // Mantém o painel aberto; confirmações originais ficam à frente dele.
        await pause(100); syncDialogs();
        note(`Comando acionado no Revan: ${name}. Confira o resultado ou a confirmação do sistema.`);
      }, /Reconfigurar|Ativar/.test(name) ? 'danger' : '', !source || source.disabled));
    }
    body.append(actions);
  }
  function commandSection() {
    return card?.closest('.middleContainer')?.querySelector('brisanet-commands-card') || pageSection('COMANDOS','brisanet-commands-card');
  }
  function renderCommands(body) {
    const source = commandSection();
    const block = make('div','command-section');
    const header = make('div','command-heading');header.append(make('span','','Comandos do equipamento'));
    const refresh = source?.querySelector('ion-button[icontype="refresh"] button') || source?.querySelector('.card-header button');
    header.append(actionButton('Atualizar',async()=>{
      const latest = commandSection();
      const button=latest?.querySelector('ion-button[icontype="refresh"] button') || latest?.querySelector('.card-header button');
      if (!button?.isConnected || button.disabled) throw new Error('Atualização de comandos indisponível no Revan.');
      button.click();await pause(250);note('Consulta de comandos atualizada no Revan.');
    },'',!refresh || refresh.disabled));block.append(header);
    const content=source?.querySelector('.card-content,.card-body');
    const value=content?.innerText.trim();
    if (!source) block.append(make('div','command-empty','Seção de comandos não disponível nesta tela.'));
    else if (!value || /^Não há dados$/i.test(value)) block.append(make('div','command-empty','Nenhum comando listado no Revan.'));
    else {
      const records=all(content,'.result');
      if(records.length){
        block.append(make('small','',`${records.length} comando(s) registrado(s) no Revan. Abra para ver os detalhes.`));
        for(const record of records){
          const indicator=record.querySelector('.indicator');
          const status=indicator?.classList.contains('error')?'Erro':indicator?.classList.contains('success')?'Concluído':indicator?.classList.contains('warning')?'Atenção':'Estado informado abaixo';
          const details=make('details',`test-result ${status==='Erro'?'test-error':status==='Concluído'?'test-success':'test-warning'}`);
          details.append(make('summary','',`${status} · ${text(record.querySelector('.description'))||'Comando'}`));
          const copy=record.cloneNode(true);all(copy,'button,svg').forEach(e=>e.remove());
          const result=make('div','command-content',text(copy));result.style.overflowWrap='anywhere';result.style.maxHeight='220px';result.style.overflow='auto';details.append(result);block.append(details);
        }
      }else block.append(make('div','command-content',value));
    }
    body.append(block);
  }
  function renderTests(body) {
    const section = pageSection('RESULTADOS DOS TESTES', 'brisanet-config-report');
    if (!section) { body.append(make('div', 'summary', 'Resultados dos testes não disponíveis nesta tela.')); return; }
    const results = all(section, '.result');
    if (!results.length) { body.append(make('div', 'summary', section.querySelector('.card-content')?.innerText.trim() || 'Não há resultados disponíveis.')); return; }
    const counters = {success:0, error:0, warning:0, unknown:0};
    const entries = results.map(source => {
      const status = source.querySelector('.error-text,[data-icon="close-circle"]') ? 'error' : source.querySelector('.warning-text,[data-icon="exclamation-circle"]') ? 'warning' : source.querySelector('.success-text,[data-icon="check-circle"]') ? 'success' : 'unknown';
      counters[status]++;
      const title = text(source.querySelector('.description')) || 'Teste';
      const labels = {success:'OK',error:'Falha',warning:'Atenção',unknown:'Sem status'};
      const details = make('details', `test-result test-${status}`); details.open = status === 'error' || status === 'warning';
      details.append(make('summary', '', `${labels[status]} · ${title}`));
      const hint=status==='success'?'O Revan não identificou falha neste teste.':/vers[aã]o/i.test(title)?'Compare a versão obtida com a esperada. Use a correção original do Revan quando disponível.':/sinal/i.test(title)?'Confira as medições RX/TX e os limites indicados pelo Revan; os limites dependem do equipamento.':/uptime/i.test(title)?'Confira o tempo ligado e possíveis reinicializações.':/rota|olt|manuten/i.test(title)?'Confira os eventos de rota e a situação da OLT antes de reconfigurar o equipamento.':'Abra os detalhes e confira a mensagem do Revan antes de executar uma correção.';
      details.append(make('small','diagnostic-hint',hint));
      const copy = source.cloneNode(true); all(copy, '.main,button,ion-button,svg').forEach(e => e.remove());
      const content = text(copy).replace(/(Obtido:|Esperado:)/g, '\n$1\n').replace(/(RX Local:|RX Remoto:|TX Local:|TX Remoto:|Temperatura:|Resultado:|Estado:)/g, '\n$1');
      const messages = all(source, '.main-data').map(e => e.innerText).join('\n').replace(title, '').trim();
      const detail=make('div','test-detail');
      if(messages)detail.append(make('div','test-message',messages));
      const obtained=content.match(/Obtido:\s*([\s\S]*?)(?=\nEsperado:|$)/)?.[1].trim();
      const expected=content.match(/Esperado:\s*([\s\S]*)/)?.[1].trim();
      if(obtained||expected){
        const metrics=make('div','test-metrics');
        for(const [title,value,kind] of [['Obtido',obtained,'obtained'],['Esperado',expected,'expected']]){
          if(!value)continue;const metric=make('div',`metric-card ${kind}`);metric.append(make('span','',title),make('div','',value));metrics.append(metric);
        }
        const extra=content.split(/Obtido:|Esperado:/)[0].trim();if(extra)detail.append(make('div','test-message',extra));
        detail.append(metrics);
      }else detail.append(make('div','',content||'O Revan não apresentou detalhes adicionais.'));
      details.append(detail);
      return details;
    });
    const stats=make('div','test-stats');
    for(const [kind,count,label] of [['success',counters.success,'Testes OK'],['error',counters.error,'Falhas'],['warning',counters.warning,'Atenções']]){
      const stat=make('div',`test-stat stat-${kind}`);stat.append(make('strong','',String(count)),make('span','',label));stats.append(stat);
    }
    body.append(stats);
    body.append(make('small','',`${results.length} testes${counters.unknown ? ` · ${counters.unknown} sem status informado` : ''}`));
    body.append(actionButton('Atualizar leitura', async () => { note('Resultados atualizados a partir da tela do Revan.'); },'refresh-reading'));
    body.append(...entries);
  }
  function authControl(section, mode) {
    if (!section) return null;
    if (mode === 'password') return section.querySelector('ion-button[icontype="security"] button') || all(section, 'button').find(b => b.querySelector('[id="ion-icon-security"]'));
    return section.querySelector('button[nztooltiptitle="Criar login"]') || all(section, 'button').find(b => b.querySelector('[data-icon="plus"]'));
  }
  css.textContent+='#rv-mini nav{flex-wrap:wrap}#rv-mini .tag-results{max-height:190px;overflow:auto;display:grid;gap:5px}#rv-mini .tag-results button{text-align:left;font-size:11px;padding:7px}#rv-mini .tag-results button.active{background:linear-gradient(110deg,#d5f5ef,#e7deff);border-color:#8d8be2}#rv-mini .tagger{display:grid;gap:10px}';
  const tagKey=value=>normalized(value).replace(/[\u200b-\u200d\ufeff]/g,'');
  const eventCard=()=>document.querySelector('app-new-events-card')||all(document,'.card').find(e=>!root.contains(e)&&e.querySelector('textarea[placeholder="Escreva uma nova mensagem..."]'));
  const attachedTags=()=>all(document,'.tags .tag:not(.new) nz-tag span').map(text);
  const tagDialog=()=>all(document,'.ant-modal-content').find(e=>e.getClientRects().length&&all(e,'.ant-modal-title').some(n=>text(n)==='Adicionar etiquetas'));
  function setNativeText(input,value){const proto=input.tagName==='TEXTAREA'?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(input,value);input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));}
  async function openTagDialog(){
    if(tagDialog())throw new Error('Feche ou conclua o formulário de etiquetas já aberto no Revan.');
    const plus=document.querySelector('.tags .tag.new nz-tag.editable-tag')||document.querySelector('.tags .tag.new nz-tag')||document.querySelector('.tags .tag.new');if(!plus)throw new Error('Botão + de etiquetas indisponível.');
    plus.click();return await until(()=>tagDialog(),5000);
  }
  function closeTagDialog(dialog){if(!dialog?.isConnected)return;all(dialog,'button').find(b=>text(b)==='Cancelar')?.click();}
  async function nativeTagOptions(dialog,query){
    const select=dialog.querySelector('nz-select#tags');const input=select?.querySelector('input');
    if(!input)throw new Error('Campo de etiquetas não encontrado.');
    if(!select.classList.contains('ant-select-open'))select.querySelector('.ant-select-selection')?.click();await pause(100);
    if(!select.classList.contains('ant-select-open')){select.querySelector('.ant-select-selection')?.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,cancelable:true,view:window}));await pause(100);}
    if(!select.classList.contains('ant-select-open'))throw new Error('O segundo campo de etiquetas não abriu no Revan.');
    const term=query.replace(/\s*-\s*\(Carimbo\)\s*$/i,'');setNativeText(input,term);await pause(1300);
    let previous='',since=Date.now();
    return await until(()=>{
      const rows=all(document,'.ant-select-dropdown li[nz-option-li]').filter(e=>e.getClientRects().length);
      if(rows.some(e=>/loading|carregando/i.test(text(e))))return false;
      if(rows.some(e=>!tagKey(text(e)).includes(tagKey(term))))return false;
      const signature=rows.map(text).join('\n');if(signature!==previous){previous=signature;since=Date.now();return false;}
      return Date.now()-since>250?{rows}:false;
    },8000);
  }
  async function attachTag(){
    valid();let selected=tagDraft.selected||tagDraft.query.trim();const comment=tagDraft.comment.trim();if(!selected)throw new Error('Digite o nome ou escolha uma etiqueta antes de anexar.');
    const payload=JSON.stringify([route,selected,comment]);
    if(tagDraft.progress&&tagDraft.progress.payload!==payload&&tagDraft.progress.attempted&&!tagDraft.progress.sent)throw new Error('Há envio anterior sem confirmação. Confira os Eventos antes de iniciar outro.');
    const progress=tagDraft.progress?.payload===payload?tagDraft.progress:(tagDraft.progress={payload,tagged:false,attempted:false,sent:false});
    const events=eventCard(),area=events?.querySelector('textarea[placeholder="Escreva uma nova mensagem..."]');
    if(comment&&!progress.sent){if(!area||area.disabled)throw new Error('Campo de comentário dos Eventos indisponível.');if(area.value.trim()&&!((progress.tagged||progress.attempted)&&area.value.trim()===comment))throw new Error('Existe um comentário em rascunho nos Eventos. Conclua ou limpe por lá antes de anexar.');}
    if(!progress.tagged){
      if(attachedTags().some(t=>tagKey(t)===tagKey(selected)))progress.tagged=true;
      else{
        let dialog;try{
          dialog=await openTagDialog();const {rows}=await nativeTagOptions(dialog,selected);
          rows.forEach(e=>tagNames.add(text(e)));
          const exact=rows.filter(e=>text(e)===selected);let matches=exact.length?exact:rows.filter(e=>tagKey(text(e))===tagKey(selected));
          if(!matches.length&&rows.length===1)matches=rows;
          if(matches.length!==1)throw new Error(rows.length?'Encontrei várias etiquetas. Escolha o nome exato na lista e clique em Anexar novamente.':'Nenhuma etiqueta encontrada no Revan. Confira o nome digitado.');
          selected=text(matches[0]);tagDraft.selected=selected;progress.payload=JSON.stringify([route,selected,comment]);
          valid();matches[0].click();await pause(100);
          const selectedNames=all(dialog,'nz-select#tags .ant-select-selection__choice').map(text);
          if(selectedNames.length!==1||!selectedNames.some(n=>tagKey(n)===tagKey(selected)))throw new Error('Seleção nativa da etiqueta não confirmada.');
          const conclude=all(dialog,'button').find(b=>text(b)==='Concluir');if(!conclude||conclude.disabled)throw new Error('O Revan não liberou Concluir.');
          valid();conclude.click();await until(()=>attachedTags().some(t=>tagKey(t)===tagKey(selected)),10000);progress.tagged=true;
        }finally{closeTagDialog(dialog);}
      }
    }
    if(comment&&!progress.sent){
      if(progress.attempted)throw new Error('Etiqueta aplicada; o comentário foi enviado sem confirmação. Confira os Eventos. Nenhum reenvio automático será feito.');
      valid();setNativeText(area,comment);const send=events.querySelector('button#send_button');
      await until(()=>send&&!send.disabled,3000);valid();
      const content=()=>events.querySelector('.card-content')?.innerText||'';const occurrences=()=>normalized(content()).split(normalized(comment)).length-1;const before=occurrences();
      progress.attempted=true;send.click();
      try{await until(()=>!area.value.trim()&&occurrences()>before,12000);progress.sent=true;}
      catch(error){throw new Error('Etiqueta aplicada. O envio do comentário não foi confirmado; confira os Eventos antes de repetir.');}
    }
    note(comment?'Etiqueta anexada e comentário confirmado nos Eventos.':'Etiqueta anexada ao atendimento.');
  }
  const forwardSectors=['Suporte Externo','Financeiro','Liberação','Solicitação de dados','Fidelização','Pós venda','Comercial','Suporte Corporativo'];
  css.textContent+='#rv-mini .external-toggle{display:flex;align-items:center;gap:9px;padding:10px;border:1px solid #9a8de866;border-radius:12px;background:linear-gradient(110deg,#a4e9ed44,#d0b4ff44)}#rv-mini .external-toggle input{width:17px;height:17px;margin:0;accent-color:#7256da}#rv-mini .external-fields,#rv-mini .external-problems{display:grid;gap:8px}#rv-mini .external-fields[hidden],#rv-mini .external-problems[hidden]{display:none}#rv-mini .external-fields{padding:10px;border-radius:12px;background:#e8ecff88}';
  const externalProblems=["Adicionar fotos (reparo físico)","Alcance do Wi-Fi (reparo rápido)","Alteração de cômodo (serviço adicional)","Alteração de Endereço Mal Sucedida (reparo físico)","Cabo da Fibra Rompido (reparo físico)","Cabo de Fibra Baixo/Remanejamento (serviço adicional)","Cabo desconectado (reparo físico)","Chamado IMOC (serviço adicional)","Chamado proativo (intermitência) (serviço adicional)","Chamado proativo (serviço adicional)","Chamado proativo (sinal irregular) (serviço adicional)","Cobrança de equipamento danificado/perdido (serviço adicional)","Conecta+ (Cabo não deixado no ato da inst.) - 7d (serviço adicional)","Conf. roteador não realizada n​a instalação - 7d (serviço adicional)","Configuração Estruturada de Rede Interna (serviço adicional)","Erro de NTP (reparo rápido)","Insatisfeito com o equipamento instalado - 7d (serviço adicional)","Instabilidade no WI-FI (reparo rápido)","Instabilidade TP-LINK (reparo rápido)","Instalação de Roteador TP-LINK (serviço adicional)","Instalação Inadequada (local) - 7d (serviço adicional)","Lentidão (reparo rápido)","Ligação Falhando (reparo rápido)","Metragem de Cabos (serviço adicional)","Migração de TV (serviço adicional)","Não Efetua Ligações (reparo rápido)","Ouvidoria (reparo rápido)","Perda de pacotes (reparo rápido)","Plano não chega o contratado (reparo rápido)","PON Apagada (reparo rápido)","PON Piscando (reparo físico)","Proativo -FWA (serviço adicional)","Problema em Redes sociais (reparo rápido)","Problema na Maquineta de Cartão (reparo rápido)","Problema no Identificador de Chamada (reparo rápido)","Problemas com o Telefone Fixo (reparo rápido)","Recolher TP-LINK (serviço adicional)","Regularização de cabo drop (serviço adicional)","Revisão de Equipamento (reparo rápido)","Sem acesso (reparo rápido)","Sem acesso TP-LINK (reparo rápido)","Sem sinal (reparo físico)","Sinal Irregular Fibra (reparo físico)","Suporte a equipamento particular (serviço adicional)","Suspeita de LOS (reparo físico)","Telefone mudo (reparo rápido)","Telefonia Desativada (reparo rápido)","Troca de Cabo de Rede (reparo físico)","Troca de Cabo HDMI/RCA (reparo rápido)","Troca de Conector (ONU) (reparo rápido)","Troca de Conector (RJ) (reparo rápido)","Troca de Conector (Splitter) (reparo físico)","Troca de Controle (reparo rápido)","Troca de Fonte (reparo rápido)","Troca de ONU (reparo rápido)","Troca de Receptor (reparo rápido)","Troca de Roteador TP-LINK (serviço adicional)","Troca de Telefone (reparo rápido)","Tv sem sinal (reparo rápido)","Upgrade de roteador (serviço adicional)","Valor da metragem de cabo (serviço adicional)"];
  const serviceForProblem=name=>/reparo físico\)/i.test(name)?'Reparo Físico':/reparo rápido\)/i.test(name)?'Reparo Rápido':/serviço adicional\)/i.test(name)?'Serviço Adicional':'';
  const visibleNative=selector=>all(document,selector).filter(e=>!root.contains(e)&&e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden');
  const scheduleDialog=()=>visibleNative('.ant-modal-content').find(e=>e.querySelector('app-new-schedule'));
  const forwardDialog=()=>visibleNative('.ant-modal-content').find(e=>e.querySelector('app-brisanet-forward-form'));
  const calendarVisible=()=>Boolean(scheduleDialog()?.querySelector('[data-testid="component-calendar-step"]'));
  let scheduleMessage=null,pendingSchedule=null,scheduleMonitor=null;
  window.addEventListener('hashchange',()=>{scheduleMessage=null;pendingSchedule=null;if(scheduleMonitor)clearInterval(scheduleMonitor);scheduleMonitor=null;});
  function readScheduleReview(dialog){
    const review=dialog?.querySelector('[data-testid="component-revision-step"],app-revision-confirmation-step');
    if(!review)return null;
    const values=all(review,'[data-testid="data-to-confirm"]').map(text);
    const day=values.find(v=>/^\d{1,2}\s+de\s+\S+\s+de\s+\d{4}$/i.test(v));
    const windowText=values.find(v=>/\d{1,2}:\d{2}.*\d{1,2}:\d{2}/.test(v));
    const hours=windowText?.match(/\d{1,2}:\d{2}/g);
    if(!day||hours?.length!==2)return null;
    return {day,start:hours[0],end:hours[1]};
  }
  function finishScheduleMessage(){
    const pending=pendingSchedule;if(!pending)return;
    if(!root.isConnected||pending.route!==location.hash){clearInterval(scheduleMonitor);scheduleMonitor=null;pendingSchedule=null;return;}
    const feedback=commandFeedback();
    if(feedback!==pending.before&&/(?:reagendamento|agendamento)\s+realizado\s+com\s+sucesso/i.test(feedback))pending.confirmed=true;
    if(pending.confirmed&&!scheduleDialog()){
      const data=pending.data;const begin=Number(data.start.split(':')[0]),end=Number(data.end.split(':')[0]);
      const period=end<=12?'no período da manhã':begin>=12?'no período da tarde':'no período informado';
      const message=`Olá! Seu atendimento técnico foi agendado para o dia ${data.day}, ${period}, das ${data.start} às ${data.end}.\n\nO horário de atendimento da empresa é das 08:00 às 18:00.`;
      scheduleMessage={route:pending.route,message};pendingSchedule=null;clearInterval(scheduleMonitor);scheduleMonitor=null;
      if(!card?.isConnected){card=cards()[0]||null;route=location.hash;}
      if(card?.isConnected){tabName='Etiquetar';opened=true;$('.panel').hidden=false;$('.launch').hidden=true;note('Agendamento confirmado pelo Revan. Mensagem pronta para copiar.');render();$('.panel').scrollTop=0;}
    }else if(Date.now()-pending.started>45000){pendingSchedule=null;clearInterval(scheduleMonitor);scheduleMonitor=null;note('A confirmação do agendamento não foi identificada. Nenhuma mensagem de confirmação foi gerada.');}
  }
  document.addEventListener('click',event=>{
    if(!root.isConnected)return;
    const button=event.target.closest?.('button');if(!button||button.disabled||text(button)!=='Confirmar')return;
    const dialog=button.closest('.ant-modal-content');
    if(!dialog?.querySelector('app-new-schedule [data-testid="component-revision-step"],app-new-schedule app-revision-confirmation-step'))return;
    const check=dialog.querySelector('[data-testid="confirm-schedule-checkbox"] input');if(!check?.checked)return;
    const data=readScheduleReview(dialog);if(!data)return;
    if(scheduleMonitor)clearInterval(scheduleMonitor);
    pendingSchedule={route:location.hash,data,before:commandFeedback(),started:Date.now(),confirmed:false};
    scheduleMonitor=setInterval(finishScheduleMessage,200);
  },true);
  function renderScheduleMessage(body){
    if(!scheduleMessage||scheduleMessage.route!==location.hash)return;
    const box=make('div','field save-review');box.append(make('strong','','Agendamento confirmado · mensagem para o cliente'));
    const area=make('textarea');area.readOnly=true;area.rows=5;area.value=scheduleMessage.message;area.setAttribute('aria-label','Mensagem de agendamento');
    box.append(area,actionButton('Copiar mensagem de agendamento',async()=>{await navigator.clipboard.writeText(scheduleMessage.message);note('Mensagem de agendamento copiada.');}));
    box.append(make('small','','Gerada a partir da revisão e da confirmação de sucesso do Revan.'));body.append(box);
  }
  async function chooseForwardOption(dialog,id,name){
    const select=await until(()=>{const e=dialog.querySelector('nz-select#'+id);return e&&!e.classList.contains('ant-select-disabled')&&e;},6000);
    const choices=all(select,'.ant-select-selection__choice').map(text);
    if(choices.length){if(choices.length===1&&tagKey(choices[0])===tagKey(name))return name;throw new Error('Há outra seleção em '+id+'. Confira o formulário original antes de continuar.');}
    if(tagKey(text(select.querySelector('.ant-select-selection-selected-value')))===tagKey(name))return name;
    dialog.querySelector('.ant-modal-title,app-new-schedule header')?.click();
    select.querySelector('.ant-select-selection')?.click();await pause(120);
    if(!select.classList.contains('ant-select-open'))select.querySelector('.ant-select-selection')?.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,cancelable:true,view:window}));
    let row;
    if(id==='problem'){
      const input=select.querySelector('input');if(!input)throw new Error('A pesquisa nativa de problemas não foi encontrada.');
      const term=name.replace(/\s*\((?:reparo físico|reparo rápido|serviço adicional)\)\s*$/i,'');setNativeText(input,term);await pause(1300);
      let signature='',stable=Date.now();
      const rows=await until(()=>{
        const found=visibleNative('.ant-select-dropdown li[nz-option-li]');
        if(found.some(e=>/loading|carregando/i.test(text(e))||!tagKey(text(e)).includes(tagKey(term))))return false;
        const next=found.map(text).join('\n');if(signature!==next){signature=next;stable=Date.now();return false;}
        return Date.now()-stable>250?{found}:false;
      },8000);
      rows.found.forEach(e=>{const value=text(e).replace(/\s+/g,' ');if(!externalProblems.some(n=>tagKey(n)===tagKey(value)))externalProblems.push(value);});
      const exact=rows.found.filter(e=>tagKey(text(e))===tagKey(name));row=exact.length===1?exact[0]:rows.found.length===1?rows.found[0]:null;
      if(!row)throw new Error(rows.found.length?'A pesquisa encontrou vários problemas. Escolha o nome exato no formulário do Revan; nenhum problema foi aplicado automaticamente.':'A opção “'+name+'” não está disponível neste cliente. Continue no formulário do Revan; nenhuma alternativa será escolhida.');
      name=text(row).replace(/\s+/g,' ');
    }else row=await until(()=>{const matches=visibleNative('.ant-select-dropdown li[nz-option-li]').filter(e=>tagKey(text(e))===tagKey(name));return matches.length===1&&matches[0];},6500).catch(()=>{throw new Error('A opção “'+name+'” não está disponível neste cliente. Continue no formulário do Revan; nenhuma alternativa será escolhida.');});
    valid();row.click();await until(()=>all(select,'.ant-select-selection__choice,.ant-select-selection-selected-value').some(e=>tagKey(text(e))===tagKey(name)),3000);
    dialog.querySelector('.ant-modal-title,app-new-schedule header')?.click();
    return name;
  }
  async function forwardExternal(){
    const payload=JSON.stringify([route,tagDraft.destination,tagDraft.problem,tagDraft.service]);
    let progress=tagDraft.forwardProgress;
    if(progress?.started&&progress.payload!==payload)throw new Error('Um encaminhamento já foi iniciado. Conclua ou cancele no Revan antes de preparar outro.');
    if(!progress)progress=tagDraft.forwardProgress={payload,started:false,calendar:false,submitted:false};
    if(progress.calendar){
      if(scheduleDialog()){note('Continue o agendamento manualmente no formulário aberto do Revan.');return;}
      throw new Error('A tela do agendamento foi fechada. Clique em Preparar novamente e depois em Anexar para reabrir o fluxo.');
    }
    if(progress.submitted){note('Encaminhamento já confirmado. Nenhum novo envio foi feito.');return;}
    let dialog=scheduleDialog();
    if(progress.started&&!dialog)throw new Error('O encaminhamento já foi iniciado, mas a tela não está aberta. Confira o Revan; o painel não repetirá o envio.');
    if(!progress.started){
      if(dialog||forwardDialog())throw new Error('Já há um encaminhamento ou agendamento aberto. Conclua ou cancele por lá antes de Anexar.');
      const send=document.querySelector('#forward');if(!send)throw new Error('Botão Enviar não encontrado no atendimento.');
      valid();send.click();const form=await until(()=>forwardDialog()?.querySelector('nz-switch#blocking button')&&forwardDialog(),6000);
      const wait=form.querySelector('nz-switch#blocking button');if(!wait.classList.contains('ant-switch-checked'))wait.click();
      await until(()=>wait.classList.contains('ant-switch-checked'),2500);
      progress.started=true;
      await chooseForwardOption(form,'sector',tagDraft.destination);
      if(tagDraft.destination!=='Suporte Externo'){
        const submit=all(form,'button').find(b=>text(b)==='Encaminhar');
        if(!submit||submit.disabled)throw new Error('Este destino exige dados adicionais. Preencha e conclua no formulário do Revan.');
        const events=eventCard();const before=text(events);
        valid();submit.click();await until(()=>!form.isConnected||!form.getClientRects().length,10000);
        await until(()=>text(eventCard())!==before&&tagKey(text(eventCard())).includes(tagKey(tagDraft.destination)),10000);
        progress.submitted=true;note('Encaminhamento confirmado para '+tagDraft.destination+'.');return;
      }
      dialog=await until(()=>scheduleDialog(),7000);
    }
    if(calendarVisible()){progress.calendar=true;note('Escolha a data e conclua manualmente no Revan.');return;}
    tagDraft.problem=await chooseForwardOption(dialog,'problem',tagDraft.problem||tagDraft.problemQuery.trim());
    if(!tagDraft.service)tagDraft.service=serviceForProblem(tagDraft.problem);
    progress.payload=JSON.stringify([route,tagDraft.destination,tagDraft.problem,tagDraft.service]);
    if(!tagDraft.service)throw new Error('Confira o tipo de serviço no formulário nativo antes de continuar.');
    await chooseForwardOption(dialog,'service',tagDraft.service);
    const next=all(dialog,'button').find(b=>text(b)==='Continuar');if(!next||next.disabled)throw new Error('O Revan não liberou Continuar. Confira os dados do serviço no formulário original.');
    valid();next.click();await until(()=>calendarVisible(),10000);progress.calendar=true;
    note('Problema e serviço preenchidos. Escolha a data e conclua manualmente no Revan.');
  }
  async function attachAndForward(){
    if(!tagDraft.external){await attachTag();return;}
    valid();
    if(!tagDraft.selected&&!tagDraft.query.trim())throw new Error('Escolha a etiqueta do atendimento antes de Anexar.');
    if(!forwardSectors.includes(tagDraft.destination))throw new Error('Escolha um destino válido.');
    if(tagDraft.destination==='Suporte Externo'&&!tagDraft.problem&&!tagDraft.problemQuery.trim())throw new Error('Escolha o problema ou digite o nome para pesquisar ao Anexar.');
    if(tagDraft.destination==='Suporte Externo'&&tagDraft.problem&&!tagDraft.service)throw new Error('Escolha o tipo de serviço do chamado externo.');
    const previous=tagDraft.forwardProgress;
    if(previous?.started&&!scheduleDialog()&&!forwardDialog())throw new Error('O formulário anterior foi fechado. Clique em Preparar novamente e depois em Anexar. O comentário confirmado não será reenviado.');
    if(previous?.started&&previous.payload!==JSON.stringify([route,tagDraft.destination,tagDraft.problem,tagDraft.service]))throw new Error('Há um encaminhamento iniciado com outros dados. Confira o Revan antes de continuar.');
    if(!previous?.started&&(scheduleDialog()||forwardDialog()))throw new Error('Já há um formulário de encaminhamento aberto no Revan. Conclua ou cancele por lá.');
    minimize();
    try{await attachTag();await forwardExternal();$('.launch').title=$('.status').textContent;}
    catch(error){$('.launch').title=error.message;if(!scheduleDialog()&&!forwardDialog()){opened=true;$('.panel').hidden=false;$('.launch').hidden=true;tabName='Etiquetar';render();}throw error;}
  }
  async function attachRequested(){
    try{await attachAndForward();}
    catch(error){
      note(error.message);
      if(!scheduleDialog()&&!forwardDialog()){opened=true;$('.panel').hidden=false;$('.launch').hidden=true;render();$('.panel').scrollTop=0;}
      throw error;
    }
  }
  function renderExternalFields(field){
    const toggleLabel=make('label','external-toggle');const toggle=make('input');toggle.type='checkbox';toggle.checked=tagDraft.external;toggle.setAttribute('aria-label','Abrir chamado externo');toggleLabel.append(toggle,make('strong','','Abrir chamado externo'));field.append(toggleLabel);
    const extra=make('div','external-fields');extra.hidden=!tagDraft.external;
    if(tagDraft.forwardProgress?.started&&!scheduleDialog()&&!forwardDialog()){
      const recovery=make('div','save-review');recovery.append(make('strong','','O formulário anterior foi fechado.'));
      recovery.append(make('small','','Para iniciar outro preparo, confira os Eventos e o agendamento no Revan. A etiqueta e o comentário já confirmados serão preservados.'));
      const reset=make('button','','Preparar novamente');reset.type='button';reset.addEventListener('click',()=>{tagDraft.forwardProgress=null;note('Novo preparo liberado. Revise os dados e clique em Anexar.');render();$('.panel').scrollTop=0;});recovery.append(reset);extra.append(recovery);
    }
    toggle.addEventListener('change',()=>{tagDraft.external=toggle.checked;extra.hidden=!toggle.checked;});
    const destLabel=make('label','','Encaminhar para');const dest=make('select');dest.setAttribute('aria-label','Encaminhar para');for(const name of forwardSectors){const o=make('option','',name);o.value=name;dest.append(o);}dest.value=tagDraft.destination;destLabel.append(dest);extra.append(destLabel);
    const problemFields=make('div','external-problems');const problemLabel=make('label','','Problema do agendamento · catálogo próprio');const search=make('input');search.type='search';search.value=tagDraft.problemQuery||'';search.placeholder='Ex.: estruturada, cabo, sem acesso…';search.setAttribute('aria-label','Buscar problema do chamado externo');problemLabel.append(search);problemFields.append(problemLabel);
    const list=make('select');list.setAttribute('aria-label','Problema do chamado externo');
    const hits=make('div','tag-results external-results'),counter=make('small');problemFields.append(counter,hits,list);
    const serviceLabel=make('label','','Tipo de serviço');const service=make('select');service.setAttribute('aria-label','Tipo de serviço do chamado externo');for(const name of ['','Reparo Rápido','Reparo Físico','Serviço Adicional','Serviço adicional - AXESS','Migração de Tv','Homologação','upgrade de equipamento']){const o=make('option','',name||'Selecione o serviço');o.value=name;service.append(o);}service.value=tagDraft.service;serviceLabel.append(service);problemFields.append(serviceLabel);
    function choose(name){tagDraft.problem=name;tagDraft.service=serviceForProblem(name);service.value=tagDraft.service;update();}
    function update(){
      const q=tagKey(search.value),found=externalProblems.filter(n=>q.split(' ').filter(Boolean).every(t=>tagKey(n).includes(t))).sort((a,b)=>a.localeCompare(b,'pt-BR'));
      counter.textContent=q?(found.length?found.length+' resultado(s) · clique no problema abaixo':'Nenhum resultado local. Anexar consultará este nome no Revan.'):externalProblems.length+' problemas catalogados · pesquise ou escolha na lista';
      hits.hidden=!q;hits.replaceChildren(...(q?found:[]).map(name=>{const b=make('button',tagDraft.problem===name?'active':'',name);b.type='button';b.addEventListener('click',()=>choose(name));return b;}));
      list.replaceChildren(make('option','','Selecione o problema'));list.firstChild.value='';for(const name of [...new Set([...found,...(tagDraft.problem?[tagDraft.problem]:[])])]){const o=make('option','',name);o.value=name;list.append(o);}list.value=tagDraft.problem;
    }
    search.addEventListener('input',()=>{tagDraft.problemQuery=search.value;tagDraft.problem='';tagDraft.service='';service.value='';update();});list.addEventListener('change',()=>choose(list.value));service.addEventListener('change',()=>{tagDraft.service=service.value;});update();
    problemFields.append(make('small','','Pesquisa local por nome, trecho ou letra, sem acentos. Só Anexar abre a busca nativa do Revan. Opções encontradas de A a Z em cliente Fibra; a disponibilidade é confirmada neste cliente.'));
    extra.append(problemFields);const info=make('small');extra.append(info);
    const updateDest=()=>{problemFields.hidden=dest.value!=='Suporte Externo';info.textContent=dest.value==='Suporte Externo'?'Após Anexar: minimizar → etiqueta e Eventos → Enviar → Aguardar chamado → Suporte Externo → problema → serviço → calendário. Data e conclusão são manuais.':'Após Anexar: minimizar → etiqueta e Eventos → Enviar → Aguardar chamado → destino → Encaminhar. Se houver campos adicionais, continue no Revan.';};dest.addEventListener('change',()=>{tagDraft.destination=dest.value;updateDest();});updateDest();field.append(extra);
  }
  function renderTagger(body){
    renderScheduleMessage(body);
    const field=make('div','field tagger');const label=make('label','','Nome, parte do nome ou letra');
    const query=make('input');query.type='search';query.value=tagDraft.query;query.placeholder='Ex.: wifi, sinal, retorno…';query.setAttribute('aria-label','Buscar etiqueta');label.append(query);field.append(label);
    const results=make('div','tag-results');const counter=make('small');
    function updateResults(){
      const q=tagKey(query.value);const found=[...tagNames].filter(n=>!q||tagKey(n).includes(q)).sort((a,b)=>a.localeCompare(b,'pt-BR'));
      counter.textContent=`${found.length} etiqueta(s) no catálogo · selecione o nome exato`;
      results.replaceChildren(...found.map(name=>{const b=make('button',tagDraft.selected===name?'active':'',name);b.type='button';b.addEventListener('click',()=>{tagDraft.selected=name;updateResults();chosen.textContent='Selecionada: '+name;});return b;}));
    }
    query.addEventListener('input',()=>{tagDraft.query=query.value;tagDraft.selected='';chosen.textContent='Selecionada: nenhuma';updateResults();});
    field.append(counter,results);const chosen=make('strong','','Selecionada: '+(tagDraft.selected||'nenhuma'));field.append(chosen);
    field.append(make('small','','A busca acima é local. O Revan só será aberto após Anexar. Se faltar uma etiqueta, digite o nome e clique em Anexar; resultados ambíguos serão apresentados para sua escolha.'));
    const messageLabel=make('label','','Informações para os Eventos (opcional)');const message=make('textarea');message.rows=4;message.value=tagDraft.comment;message.placeholder='Digite a observação do atendimento…';message.setAttribute('aria-label','Informações para os Eventos');message.addEventListener('input',()=>{tagDraft.comment=message.value;});messageLabel.append(message);field.append(messageLabel);
    field.append(make('small','','Anexar aplica a etiqueta selecionada e publica o texto acima como comentário interno nos Eventos deste atendimento. Categoria é opcional e não será selecionada.'));
    if(tagDraft.progress)field.append(make('small','',`Etiqueta: ${tagDraft.progress.tagged?'confirmada':'não confirmada'} · Comentário: ${tagDraft.progress.sent?'confirmado':tagDraft.progress.attempted?'enviado, confira os Eventos':'não enviado'}`));
    renderExternalFields(field);
    updateResults();body.append(field);
  }
  function renderAuthentication(body) {
    renderCommandHistory(body);
    const section = pageSection('AUTENTICAÇÃO', 'brisanet-auth-card');
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const email = section && all(section, 'small,span,a,p').map(text).find(value => emailPattern.test(value));
    const info = make('div', 'field auth-card');
    info.append(make('label', '', 'Usuário / e-mail de autenticação'));
    info.append(make('div', 'auth-email', email || 'Não há login cadastrado nesta tela.'));
    const status = section?.querySelector('.status')?.textContent.trim();
    if (status) info.append(make('small', '', `Status: ${status}`));
    body.append(info);
    const actions = make('div', 'actions auth-actions');
    for (const [label,mode] of [['Gerar nova senha','password'],['Novo e-mail / login','email']]) {
      const native = authControl(section, mode);
      actions.append(actionButton(label, async () => {
        const latest = authControl(pageSection('AUTENTICAÇÃO', 'brisanet-auth-card'), mode);
        if (!latest?.isConnected || latest.disabled) throw new Error('Esta ação não está disponível no Revan.');
        monitorCommand(label);latest.click(); await pause(100); syncDialogs();
        note(mode === 'password' ? 'Confirme a geração de senha no diálogo do Revan. O painel continua aberto.' : 'Preencha o novo e-mail no formulário Criar login do Revan e conclua por lá.');
      }, '', !native || native.disabled));
    }
    body.append(actions);
    body.append(actionButton('Atualizar leitura', async () => { note('Autenticação atualizada a partir da tela do Revan.'); },'refresh-reading'));
    body.append(make('small', '', 'Estas ações alteram o login de autenticação do contrato. O e-mail mostrado é o usuário de acesso, não necessariamente o e-mail de contato.'));
  }
  function render() {
    if (!card?.isConnected) return;
    if(editing&&!nativeEditing()&&nativeButton('Editar')){editing=false;changed=false;options.clear();generatedPasswords.clear();}
    const ips = fixedIPs();
    $('.context').textContent = `Atendimento ${route.split('/').pop()} · ${clientName()}${ips.length ? ` · IP fixo: ${ips.join(', ')}` : ''} · ${technology()}`;
    const financial=financialStatus();
    const financialClass=/^ativ[oa]$/i.test(financial)?'finance-active':/^(bloquead|suspens|inativ)/i.test(financial)?'finance-blocked':'finance-other';
    const badge=make('span',`finance-badge ${financialClass}`,financial);badge.title='Situação financeira no Revan';
    $('.context').append(' · ',badge);
    const tabs = technology() === 'FWA' ? ['CPE','Rede','Testes','Autenticação','Etiquetar'] : ['ONU','Roteador','Rede','Testes','Autenticação','Etiquetar'];
    $('nav').replaceChildren(...tabs.map(name => actionButton(name, () => switchTab(name), name === tabName ? 'active' : '', editing)));
    const body = $('.body'); body.replaceChildren();
    body.classList.toggle('network-layout', tabName === 'Rede');
    if (tabName === 'Rede') renderNetwork(body); else if (tabName === 'Testes') renderTests(body); else if (tabName === 'Autenticação') renderAuthentication(body); else if(tabName==='Etiquetar')renderTagger(body);else renderDevice(body);
    if(tabName==='Rede'){
      if(reviewRequested&&editing){
        const box=make('div','save-review');box.append(make('strong','','Revisar alterações'));
        const current=networkSnapshot();const keys=[...new Set([...Object.keys(editBaseline||{}),...Object.keys(current)])];let count=0;
        for(const key of keys){if(editBaseline&&editBaseline[key]===current[key])continue;count++;const secret=/Senha/i.test(key);box.append(make('div','',`${key.replace(/ · \d+$/,'')}: ${secret?'••••••':editBaseline?.[key]??'Não registrado'} → ${secret?'Nova senha':current[key]??'Campo removido'}`));}
        if(!count)box.append(make('small','','Nenhuma diferença detectada nos campos lidos. Confira também a tela original.'));
        box.append(make('small','','Use Confirmar salvar no rodapé fixo para aplicar as alterações.'));body.prepend(box);
      }
      const message=make('details','client-message');message.append(make('summary','','Mensagem para o cliente'));
      const config=savedNetwork||networkSnapshot();const lines=Object.entries(config).filter(([k])=>/Nome da rede Wi-Fi|Senha da rede/.test(k));
      const status=editing?'RASCUNHO — alterações ainda não salvas':savedNetwork?'Salvamento confirmado pela saída do modo de edição do Revan. Confira a aplicação no equipamento.':'Configurações lidas da tela. Salvamento não acompanhado pelo painel.';
      const payload=[status,...lines.filter(([k,v])=>!/Senha/.test(k)||(v&&!/^[*•]+$/.test(v))).map(([k,v])=>`${k.replace(/ · \d+$/,'')}: ${v}`)].join('\n');
      const area=make('textarea');area.readOnly=true;area.value=payload;area.rows=5;message.append(area,actionButton('Copiar mensagem',async()=>{await navigator.clipboard.writeText(payload);note(editing?'Rascunho copiado. Salve antes de enviar ao cliente.':'Mensagem copiada.');}));body.append(message);
    }
    const footer = $('footer'); footer.replaceChildren();
    if(tabName==='Etiquetar')footer.append(actionButton('Anexar',attachRequested,'primary'));
    if (tabName === 'Rede') {
      if (editing) {
        footer.append(actionButton(reviewRequested?'Confirmar salvar':'Salvar',()=>save(reviewRequested),'primary'));
        if(reviewRequested)footer.append(actionButton('Voltar à edição',()=>{reviewRequested=false;note('Continue editando.');}));
        footer.append(actionButton('Cancelar', cancel), actionButton('Recarregar opções', refreshDashboard));
      }
      else footer.append(actionButton('Editar', startEdit, 'primary', !nativeButton('Editar')));
    }
    lock();
    restorePositions();
  }
  async function open() {
    const anchor=root.getBoundingClientRect();
    opened = true; $('.panel').hidden = false; $('.launch').setAttribute('aria-expanded','true');
    $('.launch').hidden=true;
    if (!positions.widget) positions.widget={x:anchor.left,y:anchor.top};
    restorePositions();
    const list = cards(); const picker = $('.equipment'); picker.replaceChildren();
    list.forEach((c, i) => { const o = make('option','',`Equipamento ${i + 1} · ${text(c.querySelector('ion-tab-group')?.previousElementSibling).slice(0,80)}`); o.value = String(i); picker.append(o); });
    picker.hidden = list.length < 2;
    if (card?.isConnected && route === location.hash && editing && nativeEditing()) { picker.value = String(list.indexOf(card)); render(); return; }
    if (card !== list[0] || route !== location.hash) {generatedPasswords.clear();savedNetwork=null;editBaseline=null;reviewRequested=false;tagDraft=emptyTagDraft();}
    card = list[0]; route = location.hash; editing = false; changed = false;
    if (!card) { $('.context').textContent = `Atendimento ${route.split('/').pop()}`; $('nav').replaceChildren(); $('.body').replaceChildren(); $('footer').replaceChildren(); note('Não localizei as abas dos equipamentos nesta tela. Aguarde o atendimento carregar e abra o painel novamente.'); return; }
    if (nativeEditing()) { tabName = 'Rede'; note('Há edição na tela original. Conclua ou cancele antes de editar pelo painel.'); render(); return; }
    await run(() => switchTab(technology() === 'FWA' ? 'CPE' : 'ONU'));
  }
  function minimize() {
    const rect=root.getBoundingClientRect();positions.widget={x:rect.left,y:rect.top};
    opened = false; $('.panel').hidden = true; $('.launch').hidden=false; $('.launch').setAttribute('aria-expanded','false');
    restorePositions();try{localStorage.setItem(positionKey,JSON.stringify(positions));}catch{}
  }
  $('.launch').addEventListener('click', () => { if (suppressLaunchClick) { suppressLaunchClick = false; return; } if (busy) return; if (opened) minimize(); else void open(); });
  $('.close').addEventListener('click', minimize);
  $('.refresh-panel').addEventListener('click',()=>void refreshDashboard());
  $('.equipment').addEventListener('change', () => {
    if (editing || nativeEditing()) { $('.equipment').value = String(cards().indexOf(card)); note('Salve ou cancele antes de trocar de equipamento.'); return; }
    generatedPasswords.clear(); savedNetwork=null;editBaseline=null;reviewRequested=false;autoPending=false;autoReport='';card = cards()[Number($('.equipment').value)]; void run(() => switchTab(technology() === 'FWA' ? 'CPE' : 'ONU'));
  });
  window.addEventListener('hashchange', () => { minimize(); tagDraft=emptyTagDraft();savedNetwork=null;editBaseline=null;reviewRequested=false;card = null; editing = false; changed = false; options.clear(); generatedPasswords.clear();autoPending=false;autoReport='';$('.context').textContent = ''; $('nav').replaceChildren(); $('.body').replaceChildren(); $('footer').replaceChildren(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') minimize(); });
  new MutationObserver(records => {
    syncDialogs();
    const sections=[card,commandSection(),financialSection(),pageSection('RESULTADOS DOS TESTES','brisanet-config-report'),pageSection('AUTENTICAÇÃO','brisanet-auth-card')].filter(Boolean);
    if (!opened || busy || !card || !records.some(r => sections.some(section=>section.contains(r.target)))) return;
    clearTimeout(timer); timer = setTimeout(() => {
      if (busy || !opened || (root.contains(document.activeElement) && document.activeElement.matches('input:not([readonly]),select,textarea'))) return;
      render();
    }, 150);
  }).observe(document.body, {childList:true, subtree:true});
})();
