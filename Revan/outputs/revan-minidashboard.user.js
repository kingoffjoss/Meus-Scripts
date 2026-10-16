// ==UserScript==
// @name         Revan — Minidashboard de equipamentos
// @namespace    local.revan.minidashboard
// @version      4.11.0
// @updateURL    https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/Revan/outputs/revan-minidashboard.user.js
// @downloadURL  https://raw.githubusercontent.com/kingoffjoss/Meus-Scripts/main/Revan/outputs/revan-minidashboard.user.js
// @description  Campos próprios e ações integradas aos controles originais do Revan.
// @match        https://revan-atendimento.brisanet.net.br/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  'use strict';
  if(document.getElementById('rv-mini')?.dataset.draft==='true'){alert('Salve ou cancele o rascunho antes de atualizar o dashboard.');return;}
  if(document.getElementById('rv-mini')?.dataset.queueRunning==='true'){alert('Pause a fila antes de atualizar o dashboard.');return;}
  document.getElementById('rv-mini')?.remove();
  document.querySelectorAll('style').forEach(style => {
    if (style.textContent.includes('#rv-mini')) style.remove();
  });
  const root = document.createElement('section');
  root.id = 'rv-mini';
  root.dataset.version = '4.11.0';
  root.innerHTML = `<button class="launch" aria-expanded="false"><span class="launch-icon">◈</span> Equipamentos <span class="launch-dot"></span></button><div class="panel" hidden><header><strong><span class="brand-icon">◈</span> Revan <small>REDE & CONEXÃO</small></strong><button class="close" aria-label="Minimizar" title="Minimizar para botão">−</button></header><div class="context"></div><select class="equipment" aria-label="Equipamento"></select><nav></nav><p class="status" role="status"></p><div class="body"></div><footer></footer></div>`;
  const refreshButton=document.createElement('button');refreshButton.className='refresh-panel';refreshButton.type='button';refreshButton.textContent='↻';refreshButton.setAttribute('aria-label','Atualizar painel');refreshButton.title='Atualizar painel e recuperar os controles';
  root.querySelector('header').insertBefore(refreshButton,root.querySelector('.close'));
  const css = document.createElement('style');
  css.textContent = "#rv-mini{--bg:#091727;--card:#102238;--line:#253d5b;--text:#eaf2ff;--muted:#a8bbd6;--cyan:#00d9f5;position:fixed;right:20px;bottom:20px;z-index:10000;color:var(--text);font:12px 'Segoe UI',system-ui,sans-serif;color-scheme:dark}\n#rv-mini *{box-sizing:border-box}#rv-mini [hidden]{display:none!important}\n#rv-mini button,#rv-mini input,#rv-mini select,#rv-mini textarea{font:inherit}\n#rv-mini button{cursor:pointer;color:var(--text);background:#13263d;border:1px solid var(--line);border-radius:8px;padding:8px 10px;transition:background .16s,border-color .16s,box-shadow .16s}\n#rv-mini button:hover:not(:disabled){border-color:#26b6d3;background:#18334d;box-shadow:0 0 12px #00d9f519}#rv-mini button:disabled{opacity:.45;cursor:default}\n#rv-mini button:focus-visible,#rv-mini input:focus-visible,#rv-mini select:focus-visible,#rv-mini textarea:focus-visible{outline:2px solid var(--cyan);outline-offset:2px}\n#rv-mini .launch{display:flex;align-items:center;gap:8px;padding:13px 18px;background:linear-gradient(115deg,#09243b,#252051);border-color:#40608b;border-radius:14px;box-shadow:0 8px 32px #0007;cursor:grab;touch-action:none;user-select:none;font-weight:700}\n#rv-mini .launch-icon,#rv-mini .brand-icon{color:var(--cyan);font-size:23px}#rv-mini .launch-dot{width:6px;height:6px;border-radius:50%;background:#31ebba;box-shadow:0 0 9px #31ebba80}\n#rv-mini .panel{width:min(570px,calc(100vw - 24px));height:min(690px,calc(100dvh - 40px));display:grid;grid-template-columns:78px minmax(0,1fr);grid-template-rows:auto auto auto auto minmax(0,1fr) auto;overflow:hidden;background:linear-gradient(135deg,#071424f5,#102039f2);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid #35537d;border-radius:17px;box-shadow:0 20px 65px #0008,inset 0 1px 0 #89bdff19;animation:rv-reveal .18s ease-out}\n#rv-mini header{grid-column:1/-1;display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid var(--line);background:#0b192cbb;cursor:move;touch-action:none;user-select:none}\n#rv-mini header strong{display:flex;align-items:center;gap:7px;font-size:19px}#rv-mini header small{display:none}\n#rv-mini .refresh-panel{margin-left:auto}#rv-mini .close,#rv-mini .refresh-panel{height:30px;min-width:31px;padding:0;background:transparent;border-color:#314762;font-size:21px;color:#c8dcf7}\n#rv-mini .context{grid-column:1/-1;padding:9px 14px;color:var(--muted);font-size:10.5px;line-height:1.6;border-bottom:1px solid #253d5b80}\n#rv-mini .finance-badge{padding:2px 6px;border-radius:5px;background:#203c50;font-weight:700}#rv-mini .finance-active{color:#42e5b0!important}#rv-mini .finance-blocked{color:#ff9caa!important}#rv-mini .finance-other{color:#ffcd77!important}\n#rv-mini .equipment{grid-column:2;margin:8px 12px 0;width:calc(100% - 24px)}\n#rv-mini nav{grid-column:1;grid-row:3/7;display:flex;flex-direction:column;gap:6px;padding:10px 5px;border-right:1px solid var(--line);background:#08172799;overflow:auto;min-height:0}\n#rv-mini nav button{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;min-height:61px;border-color:transparent;background:transparent;color:#b7c9e4;padding:7px 2px;font-size:10px}\n#rv-mini nav button.active{color:var(--cyan);background:linear-gradient(90deg,#083c55,#10243d);border-color:#174d6c;box-shadow:inset 3px 0 0 var(--cyan)}\n#rv-mini .nav-icon{width:23px;height:23px;display:block}#rv-mini svg{fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}\n#rv-mini .status{grid-column:2;margin:8px 12px 0;padding:7px 9px;font-size:10.5px;line-height:1.5;color:#aac7e0;background:#12334a80;border:1px solid #22465f;border-radius:8px}\n#rv-mini .body{grid-column:2;min-height:0;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:10px;scrollbar-width:thin;scrollbar-color:#355476 transparent}\n#rv-mini .section-title{margin:0;font-size:18px;letter-spacing:-.3px;color:#edf5ff}\n#rv-mini footer{grid-column:2;display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:7px;padding:10px 12px;background:#0a192be8;border-top:1px solid var(--line)}#rv-mini footer:empty{display:none}\n#rv-mini .primary,#rv-mini .auto-network button{background:linear-gradient(110deg,#9100f1,#00cde8);border-color:transparent;color:#fff;font-weight:700;box-shadow:0 3px 14px #5600bd30}\n#rv-mini input:not([type=checkbox]),#rv-mini select,#rv-mini textarea{width:100%;min-width:0;min-height:33px;padding:7px 9px;background:#071727b8;border:1px solid #304c70;border-radius:8px;color:var(--text)}#rv-mini input:disabled,#rv-mini select:disabled{color:#a8b9ce;background:#0b1a2b}\n#rv-mini input::placeholder,#rv-mini textarea::placeholder{color:#869bb7}#rv-mini label{font-size:11px;font-weight:500;color:#bfd0e8}#rv-mini small{font-size:10px;line-height:1.5;color:var(--muted)}\n#rv-mini .field,#rv-mini .summary,#rv-mini .command-section,#rv-mini .auth-card,#rv-mini .save-review,#rv-mini .auto-network,#rv-mini .client-message{background:linear-gradient(135deg,#11263ab3,#102036a6);border:1px solid var(--line);border-radius:11px;padding:10px;line-height:1.5;min-width:0}\n#rv-mini .field{display:grid;gap:6px}#rv-mini .summary{white-space:pre-line}#rv-mini .actions{display:flex;flex-wrap:wrap;gap:6px}#rv-mini .device-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}#rv-mini .device-actions button{text-align:left}\n#rv-mini .device-info{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}#rv-mini .device-info>div{padding:8px;border:1px solid #29405b;border-radius:8px;background:#0a1b2d}#rv-mini .device-info span{font-size:10px;color:var(--muted)}#rv-mini .device-info strong{display:block;overflow-wrap:anywhere;color:#e1edff;margin-top:3px;font-size:11px}\n#rv-mini .command-heading{display:flex;align-items:center;justify-content:space-between;gap:6px;font-weight:700}#rv-mini .command-content{white-space:pre-wrap;overflow-wrap:anywhere;background:#59431938;border-left:3px solid #e2ad42;padding:8px;margin-top:7px;border-radius:6px}#rv-mini .command-empty{color:var(--muted);font-size:11px;margin-top:6px}\n#rv-mini .band-tabs{display:flex;gap:0;background:#142b47;border:1px solid #284c70;border-radius:9px;padding:3px}#rv-mini .band-tabs button{flex:1;background:transparent;border:0;color:#abb9dc}#rv-mini .band-tabs button.active{background:#064565;color:var(--cyan);box-shadow:inset 0 -2px 0 var(--cyan)}\n#rv-mini .network-band{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}#rv-mini .network-band .ssid-field{grid-column:1/-1;background:transparent;border:0;padding:0 0 5px;display:flex;flex-wrap:wrap;gap:6px}#rv-mini .ssid-field>label{width:100%;display:grid;gap:6px}#rv-mini .ssid-field>small{width:100%}#rv-mini .band{display:none}#rv-mini .select-field{padding:0;background:transparent;border:0}#rv-mini .select-field label{display:grid;gap:6px}\n#rv-mini .toggle-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px}#rv-mini .toggle{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:10px;background:#10263bb3;border:1px solid var(--line);border-radius:9px;min-width:0}\n#rv-mini input[type=checkbox]{appearance:none;-webkit-appearance:none;flex-shrink:0;width:32px;height:19px;border-radius:12px;background:#40516e;border:1px solid #607394;cursor:pointer;position:relative}#rv-mini input[type=checkbox]:before{content:'';position:absolute;width:13px;height:13px;left:2px;top:2px;background:#d9e7ff;border-radius:50%;transition:transform .16s}#rv-mini input[type=checkbox]:checked{background:#00cce8;border-color:#00d9f5}#rv-mini input[type=checkbox]:checked:before{transform:translateX(13px);background:white}#rv-mini input:disabled{cursor:default}\n#rv-mini .save-review{background:#5e431929;border-color:#836219;color:#ffd185;display:grid;gap:5px}#rv-mini .draft-banner{color:#ffcf75;background:#59411d38;border:1px solid #805f25;border-radius:9px;padding:9px;font-size:11px;width:100%}\n#rv-mini .danger{color:#ffb0c5;border-color:#714059;background:#45203377}#rv-mini .auth-email{font-weight:700;overflow-wrap:anywhere}#rv-mini .auth-actions{display:flex;flex-wrap:wrap;gap:6px}\n#rv-mini .test-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}#rv-mini .test-stat{padding:9px;border-radius:9px;background:#132c41;border:1px solid var(--line)}#rv-mini .test-stat strong{display:block;font-size:21px}#rv-mini .test-stat span{font-size:10px}#rv-mini .stat-success{color:#46deb3}#rv-mini .stat-error{color:#ff94ac}#rv-mini .stat-warning{color:#f9c973}\n#rv-mini .test-result{border:1px solid var(--line);border-radius:9px;background:#10253a;overflow:hidden}#rv-mini summary{cursor:pointer;padding:9px;font-size:11px}#rv-mini .test-detail{white-space:pre-wrap;padding:0 10px 10px;font-size:11px;line-height:1.5}#rv-mini .test-success{border-left:3px solid #31c99d}#rv-mini .test-error{border-left:3px solid #f17b9b}#rv-mini .test-warning{border-left:3px solid #e9b948}#rv-mini .test-metrics{display:grid;grid-template-columns:1fr 1fr;gap:7px}#rv-mini .metric-card{padding:8px;background:#0b1b2d;border-radius:7px;white-space:pre-wrap}#rv-mini .metric-card>span{display:block;color:var(--muted);font-size:10px}\n#rv-mini .tag-results{display:grid;gap:5px;max-height:190px;overflow:auto}#rv-mini .tag-results button{text-align:left}#rv-mini .tag-selected{border-color:#00aeca;color:#66e8ff;background:#07374e}#rv-mini .external-fields{display:grid;gap:8px}#rv-mini .client-message textarea{margin-bottom:6px}\n#rv-mini.rv-dialog-open{z-index:900}#rv-mini ::-webkit-scrollbar{width:5px}#rv-mini ::-webkit-scrollbar-thumb{background:#355476;border-radius:8px}\n@keyframes rv-reveal{from{opacity:0;transform:scale(.98)}to{opacity:1;transform:scale(1)}}\n@media(max-width:460px){#rv-mini .panel{grid-template-columns:61px minmax(0,1fr)}#rv-mini .body{padding:8px}#rv-mini .network-band{grid-template-columns:1fr}#rv-mini .network-band .ssid-field{grid-column:1}#rv-mini nav button{font-size:9px}#rv-mini .toggle-grid{grid-template-columns:1fr}}\n@media(prefers-reduced-motion:reduce){#rv-mini .panel{animation:none}#rv-mini button,#rv-mini input[type=checkbox]:before{transition:none}}\n#rv-mini header{grid-row:1}#rv-mini .context{grid-row:2}#rv-mini .equipment{grid-row:3}#rv-mini .status{grid-row:4}#rv-mini .body{grid-row:5}#rv-mini footer{grid-row:6}#rv-mini .client-message{background:#102238;color:#bed0e9}#rv-mini .client-message summary{background:transparent;color:#bed0e9}\r\n";
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
  css.textContent += "#rv-mini .panel{height:auto;max-height:min(720px,calc(100dvh - 24px))}\n#rv-mini .body{max-height:calc(100dvh - 255px);min-height:100px;font-size:12px}\n#rv-mini .context{font-size:11px}#rv-mini .device-info span,#rv-mini small{font-size:11px}#rv-mini .device-info strong{font-size:12px}\n#rv-mini .command-state,#rv-mini .command-state.pending{background:#302c214d;color:#f7dba7;border:1px solid #6a542d;border-left:3px solid #e0ad4d;border-radius:9px;padding:9px;margin-top:7px;display:grid;gap:5px}\n#rv-mini .command-state small{color:#d1c2a5}#rv-mini .command-state.good{background:#123e374f;color:#81efc7;border-color:#28675a}#rv-mini .command-state.good small{color:#a6dacc}#rv-mini .command-state.bad{background:#49233366;color:#ffb6c7;border-color:#804459}#rv-mini .command-state.bad small{color:#e8b6c5}\n#rv-mini .save-review{grid-column:auto;background:#32291e;color:#ffdc9c;border-color:#7b5f31}#rv-mini .save-review small{color:#e8c89d}\n#rv-mini .client-message{grid-column:auto;background:#102238;color:#bed0e9;border:1px solid #29435e}#rv-mini .client-message summary{background:transparent;color:#bed0e9}#rv-mini textarea{background:#08192b;color:#e6f1ff;border-color:#34516e;resize:vertical}\n#rv-mini .shared-ssid{padding:0;background:transparent;border:0;display:flex;flex-wrap:wrap;gap:6px}#rv-mini .shared-ssid>label{width:100%;display:grid;gap:6px}#rv-mini .ssid-input-wrap{display:flex;align-items:center;border:1px solid #304c70;border-radius:8px;background:#071727b8;overflow:hidden}#rv-mini .ssid-prefix{padding-left:9px;color:#a7c9e6;white-space:nowrap}#rv-mini .ssid-input-wrap input{border:0;background:transparent;padding-left:2px}#rv-mini .password-reading{width:100%;display:flex;justify-content:space-between;gap:8px;font-size:11px;color:#a9c2dc;background:#0c1d30;padding:7px 9px;border-radius:7px}\n#rv-mini.queue-view .panel{grid-template-columns:1fr}#rv-mini.queue-view nav{display:none}#rv-mini.queue-view .body,#rv-mini.queue-view .status,#rv-mini.queue-view footer{grid-column:1}#rv-mini.queue-view .body{min-height:180px}\n#rv-mini .queue-count{font-size:11px;color:#71deec}#rv-mini .queue-list{display:flex;flex-direction:column;gap:7px}#rv-mini .queue-item{display:flex;align-items:center;gap:10px;padding:10px;background:#10283c;border:1px solid #29465f;border-radius:10px;cursor:pointer}#rv-mini .queue-item:has(input:checked){background:#0a3649;border-color:#00abc8}#rv-mini .queue-item:has(input:disabled){cursor:default}#rv-mini .queue-info{display:grid;gap:4px;min-width:0}#rv-mini .queue-info strong{font-size:12px;overflow-wrap:anywhere;color:#e5f1ff}#rv-mini .queue-info small{color:#b4c8dc}#rv-mini .queue-unavailable{color:#e3bb7a!important}\n#rv-mini .queue-running{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;padding:8px;border:1px solid #27576c;border-radius:8px;color:#81e4ef;font-size:11px;background:#0c3041}\n#rv-mini .queue-item input[type=checkbox]{width:19px;height:19px;border-radius:5px;background:#0a192d;border-color:#51708e}\n#rv-mini .queue-item input[type=checkbox]:before{content:'';width:auto;height:auto;inset:0;background:none;border-radius:0;transform:none}\n#rv-mini .queue-item input[type=checkbox]:checked{background:#00cde5;border-color:#00dff5}\n#rv-mini .queue-item input[type=checkbox]:checked:before{content:'✓';display:grid;place-items:center;color:#06283a;font-weight:800;transform:none;background:none}\n@media(max-width:460px){#rv-mini .body{max-height:calc(100dvh - 270px)}#rv-mini.queue-view .body{max-height:calc(100dvh - 215px)}}\n";
  const interrupted=()=>Object.assign(new Error('Operação interrompida para atualizar o painel.'),{code:'RV_REFRESH'});
  const pause = ms => {const token=operationEpoch;return new Promise((resolve,reject)=>setTimeout(()=>token===operationEpoch?resolve():reject(interrupted()),ms));};
  let card = null, opened = false, editing = false, busy = false, tabName = 'Rede', route = location.hash;
  let options = new Map(), changed = false, timer;
  let networkDraft=null,pendingAction=null,authResult=null;
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
    if(commandWatch){clearInterval(commandWatch);const previous=commandHistory.find(e=>e.state==='Executando');if(previous){previous.state='Sem confirmação';previous.detail='Acompanhamento anterior encerrado ao iniciar outra consulta. Confira o retorno no Revan.';}}

    const entry={tab:tabName,name,state:'Executando',detail:'Aguardando resposta do Revan.',started:Date.now(),route:location.hash,before:commandFeedback()};commandHistory.unshift(entry);commandHistory.splice(5);
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
    const relevant=commandHistory.filter(e=>e.route===location.hash&&(!e.tab||e.tab===tabName));if(!relevant.length)return;
    const block=make('div','command-section');block.append(make('strong','','Últimas ações'));
    for(const e of relevant){const item=make('div',`command-state ${e.state==='Falhou'?'bad':e.state==='Concluído'?'good':'pending'}`);item.append(make('strong','',`${e.state} · ${e.name}`),make('small','',e.detail));block.append(item);}
    body.append(block);
  }
  let autoPending=false, autoReport='';
  const tagNames=new Set(["(Desativada) Brisa Play","Agendamento de Retorno","Alannio / Concluido","Alannio / Pendência","Alannio / Trabalhando","Alcance do Wi-Fi","Alteração de cômodo","Alteração de dados cadastrais - (Carimbo)","Alteração de Senha do WIFI","Alteração de Senha TV (autocensura)","Alterar data de vencimento","Alterar modo da ONU","Amaury Bezerra / Concluído","Amaury Bezerra / Pendência","Amaury Bezerra / Trabalhando","Área do Cliente - (Carimbo)","Ativo sem contato/Env. SMS","Atualização de E-mail","Atualização de telefone","Atualização do Plano","Aumento/Redução do Limite da Telefonia","Bloqueio de chamadas fixo","Brisa Móvel","BrisaCliente","BrisaMusic","BrisaMusicPremium","BrisaPlay","Cabo da Fibra Rompido","Cabo de fibra baixo/remanejamento - FTTH","Cabo de Rede não disponibilizado no ato da Instalação - até 7d","Cabo desconectado","Caio Vinicius / Pendência","Canais Quadriculando","Canal Em Manutenção","Chamado IMOC","Chamado interno incorreto (suporte interno)","Chamado proativo","Chamado Teste","Cliente desistiu da visita técnica","Cliente já atendido","Cliente Não Localizado - AGR","Cliente não pagou","Cliente priorizado - atendimento","Cob. Alteração de Plano (dentro do prazo)","Cob. Alteração de Plano (fora do prazo)","Cobrança de equipamento danificado/perdido","Cobrança De Instalação Dentro Do Prazo","Cobrança De Instalação Fora Do Prazo","COBRANÇA DE RECOLHIMENTO DE KIT","COBRANÇA DE REPARO DENTRO DO PRAZO","COBRANÇA DE REPARO FORA DO PRAZO","Cobrança de Retorno Interno","Compartilhamento de Rede","Conecta+","Configuração de roteador não realizada n​a instalação - 7d","Configuração Estruturada de Rede Interna","David Myquellyson / Concluido","David Myquellyson / Pendência","David Myquellyson / Trabalhando","Declaração de débito","Declaração de quitação anual","Desbloqueio temporário","Desbloqueio temporário - (Carimbo)","Desbloqueio/Bloqueio para ligações 0300/0500","Desbloqueio/Bloqueio para ligações internacionais","Desbloqueio/Bloqueio para números especifico","Desbloqueio/Bloqueio para realizar ligações a cobrar","Desconto sem acesso","Discovery Kids","E00","Eliwelton Alves / Concluído","Eliwelton Alves / Pendência","Eliwelton Alves / Trabalhando","Encerrado por falta de cordialidade","Endereços de pontos de pagamento","Expansão dos pontos de pagamento","Facebook","Falha de Autenticação","Falta de Recolhimento de equipamento","Fidelização (termos do contrato)","Formas de pagamento - (Carimbo)","FOX","Francielio / Concluido","Francielio / Pendência","Francielio / Trabalhando","Globoplay","Heroapp","Histórico de Ligações do Fixo","Horários de funcionamento de escritórios","Indisponibilidade area de risco","Informação APP/SITE","Informação atendimento","Informação de nota fiscal","Informação Técnica","Informações do Serviço","Informações sobre cartão brisanet","Informações sobre vencimento","Insatisfeito com o equipamento instalado - 7d","Instabilidade no WI-FI","Instabilidade TP-LINK","Instagram","Instalação de Roteador TP-LINK","Instalação Inadequada (local) - 7d","Instalação mal sucedida (sem acesso) - 7d","IPTV - (Carimbo)","Israel Henrick / Pendência","Jaquicione / Pendência","Jaquicione / Trabalhando","Jean Aires / Concluído","Jean Aires / Pendência","Jean Aires / Trabalhando","Jeymerson / Pendência","Jeymerson / Trabalhando","João Neto / Concluido","João Neto / Pendência","João Neto / Trabalhando","Klaus Vasconcelos / Concluído","Klaus Vasconcelos / Pendência","Klaus Vasconcelos / Trabalhando","Latência alta para servidor do jogo","Ligação caiu","LinkedIn","Live FC","Mau atendimento de vendedor externo","Max","Max Walney / Concluído","Max Walney / Pendência","Max Walney / Trabalhando","Monitoria CSAT","Mudança de Numero Fixo","Multas e juros","Multas e Juros","Não Efetua Ligações","Não recebe Ligações","Nat Geo kid's","Netflix","Nooggin","Notificação de débito/bloqueio ou desativação","Pendências / Agend. J.A - Kaio","Perda de pacotes","Personalização da Rede wifi","Ping alto","Plano não chega o contratado - FTTH","Pon apagada - FTTH","Pon piscando - FTTH","Porta Incorreta","Portas virtuais bloqueadas","Pós atendimento","Pós-Venda (CX)","Premiere","Problema em Redes sociais","Problema na Maquineta de Cartão","Problema na OLT","Problema na portabilidade","Problema no Áudio","Problema no Pabx do Cliente","Problema no Replay","Problemas com o Telefone Fixo","Qualifica","Reagendou visita","Receptor Bloqueado","Reclamação de jogos online","Recolher roteador","Recolhimento Desativado automático","REPARO MAL SUCEDIDO","Restrição de NAT","Retenção Suporte","Revisão de Equipamento","Rota Inoperante - FTTH","Sebastião Felix / Concluido","Sebastião Felix / Pendência","Sebastião Felix / Trabalhando","sem Acesso","Sem acesso","Sem acesso site ou sistema específico - FTTH","Sem acesso site ou sistema específico - FWA","Sem acesso TP-LINK","Sem contato","Senha de Autenticação","Servidor do jogo em manutenção","Servidor Inoperante (Rádio)","Sinal da fibra do cliente irregular - FTTH","Skeelo","SKY+ - Informações do plano","Solicitação de alteração de parede","Solicitação de alteração na Forma Pagamento não disponibilizada","Solicitação para separar redes Wi-Fi - FTTH","Solicitação para separar redes Wi-Fi - FWA","Solicitação para unificar redes Wi-Fi - FTTH","Solicitação para unificar redes Wi-Fi - FWA","Suporte a equipamento particular","Suporte ao técnico - (Carimbo)","Suspeita de LOS","Tarifação da telefonia","Taxa de alteração de Cômodo","Taxa de mudança de endereço","Tela Preta","Telecine","Telefone mudo","Telefonia - (Carimbo)","Troca de Cabo de Rede","Troca de Cabo Fibra - FTTH","Troca de Cabo HDMI/RCA","Troca de Conector (ONU)","Troca de Conector (RJ)","Troca de Conector (Splitter)","Troca de Controle","Troca de Equipamento","Troca de Fonte - FTTH","Troca de onu - FTTH","Troca de Radio","Troca de Receptor","Troca de roteador - FTTH","Troca de Telefone","Twitter","Ubook Select","Upgrade de roteador","Valor de fatura divergente","Valor de IP fixo","Valores cobrados durante bloqueio/desativação/sem acesso","Velocidade (Taxa de Download/Upload)","Visita sem êxito","Visita sem êxito 2","Visita sem êxito 3","Visita técnica (dentro do prazo)","Visita técnica (fora do prazo)","Watch Espn","Webmail","Wi-Fi da ONU/Roteador desativado"]);
  const emptyTagDraft=()=>({query:'',selected:'',comment:'',progress:null,external:false,onlyExternal:false,destination:'Suporte Externo',problem:'',problemQuery:'',service:'',forwardProgress:null});
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
    root.dataset.draft=String(Boolean(networkDraft||pendingAction));
    all(root, 'button,input,select,textarea').forEach(e => {
      if (!e.classList.contains('launch') && !e.classList.contains('close') && !e.classList.contains('refresh-panel')) e.disabled = busy || e.dataset.lock === 'true';
      if(tabName==='Rede'&&networkDraft&&networkDraft.state!=='draft'&&e.matches('input,select,textarea'))e.disabled=true;
    });
  }
  function make(tag, className, content) {
    const e = document.createElement(tag); if (className) e.className = className;
    if (content !== undefined) e.textContent = content; return e;
  }
  function actionButton(name, action, className = '', disabled = false) {
    const b = make('button', className, name); b.type = 'button';
    b.setAttribute('aria-label',name);
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
    changed = true; note('Alteração preparada. Clique em Salvar para enviar ao Revan.');
  }
  async function switchTab(name) {
    pendingAction=null;
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
  function networkLabel(e){const copy=e.parentElement.cloneNode(true);all(copy,'ion-select').forEach(n=>n.remove());return text(copy);}
  function networkSwitchTitle(e){const parent=e.closest('.fiber-network__toggle-item,.network-config__toggle-item')||e.parentElement;const copy=parent.cloneNode(true);all(copy,'ion-switch').forEach(n=>n.remove());return ['Rede unificada','Rede visível','Ativar UPnP'].find(name=>normalized(text(copy))===normalized(name))||'';}
  function networkSignature(){return JSON.stringify(networkSnapshot());}
  function captureNetworkPlan(baseline){
    const fields=all(card,'ion-select').map((e,index)=>({index,band:headingFor(e),label:networkLabel(e),value:selectedValue(e),choices:[...new Set([selectedValue(e),...(options.get(e)||[])])],available:options.has(e)})).filter(f=>['Modo do Wi-Fi','Largura de banda','Canal'].includes(f.label));
    const ssids=all(card,'input[placeholder="Nome da rede Wi-Fi"]').map((e,index)=>({index,band:headingFor(e),value:e.value,max:e.maxLength>0?e.maxLength:32,generate:false,restore:false,prefix:text(e.closest('.fiber-network__ssid-wrap')?.querySelector('.fiber-network__ssid-prefix')),hasPassword:Boolean(all(card,'input[placeholder="Senha da rede"]')[index]?.value)}));
    const switches={};for(const e of all(card,'ion-switch')){const title=networkSwitchTitle(e);if(title)switches[title]=e.querySelector('button')?.classList.contains('ion-switch--active')||false;}
    return {route,card,baseline,fields,ssids,switches,power:nativeButton('Habilitar rede')?false:nativeButton('Desabilitar rede')?true:null,powerChanged:false,optimize:false,state:'draft'};
  }
  function planSnapshot(){
    const data={};if(!networkDraft)return networkSnapshot();
    networkDraft.ssids.forEach((s,i)=>{data[`${s.band} · Nome da rede Wi-Fi · ${i}`]=s.restore?'Restaurar SSID ao aplicar':s.value;if(s.generate)data[`${s.band} · Senha · ${i}`]='Gerar ao aplicar';});
    networkDraft.fields.forEach(f=>data[`${f.band} · ${f.label} · ${f.index}`]=f.value);
    Object.entries(networkDraft.switches).forEach(([k,v])=>data[k]=String(v));if(networkDraft.powerChanged)data['Habilitar rede']=String(networkDraft.power);if(networkDraft.optimize)data['Otimizar canal']='Executar após salvar';return data;
  }
  async function startEdit(){
    if(networkDraft)return;
    if(nativeEditing())throw new Error('Há uma edição aberta no Revan. Conclua ou cancele por lá antes de criar o rascunho.');
    const edit=nativeButton('Editar');if(!edit||edit.disabled)throw new Error('Edição de rede indisponível neste equipamento.');
    const baseline=networkSignature();let plan;
    try{
      edit.click();await until(()=>nativeEditing()&&nativeButton('Salvar'));
      await loadOptions();plan=captureNetworkPlan(baseline);
    }finally{
      const stop=nativeButton('Cancelar');if(stop){stop.click();await until(()=>!nativeEditing(),4000);}
      options.clear();
    }
    if(!plan)throw new Error('Não foi possível ler as opções de rede. Nenhuma configuração foi salva.');
    networkDraft=plan;editing=true;changed=false;generatedPasswords.clear();editBaseline=networkSnapshot();reviewRequested=false;savedNetwork=null;autoReport='';
    note('Rascunho local. O formulário original foi cancelado após a leitura das opções. Escolha tudo e clique em Salvar.');
  }
  function requireDraft(){valid();if(!networkDraft||networkDraft.route!==location.hash||networkDraft.card!==card)throw new Error('Abra Editar para preparar as configurações.');if(networkDraft.state!=='draft')throw new Error('Há uma aplicação sem confirmação. Confira o Revan antes de iniciar outra.');}
  function draftChanged(){requireDraft();changed=true;reviewRequested=false;note('Escolha guardada somente no dashboard. Nada foi enviado ao Revan.');}
  async function save(confirmed=false){
    requireDraft();const plan=networkDraft;
    if(!changed){note('Nenhuma alteração para salvar.');return;}
    for(const s of plan.ssids)if(!s.restore&&(!s.value.trim()||s.value.length>s.max))throw new Error('Confira o nome da rede antes de aplicar.');
    if(!confirmed){reviewRequested=true;note('Confira o rascunho. Confirmar salvar aplica todas as escolhas no Revan.');return;}
    if(nativeEditing())throw new Error('Existe outra edição aberta no Revan. Cancele ou conclua por lá.');
    if(networkSignature()!==plan.baseline)throw new Error('As configurações do Revan mudaram após a leitura. Cancele o rascunho e releia antes de salvar.');
    plan.state='applying';minimize();let remoteAttempted=false,saveAttempted=false;
    try{
      const edit=nativeButton('Editar');if(!edit||edit.disabled)throw new Error('O Revan não liberou a edição.');edit.click();await until(()=>nativeEditing()&&nativeButton('Salvar'));
      for(const [title,value] of Object.entries(plan.switches)){
        const item=all(card,'ion-switch').find(e=>networkSwitchTitle(e)===title);const b=item?.querySelector('button');
        if(!b)throw new Error('Controle indisponível: '+title);
        if(b.classList.contains('ion-switch--active')!==value){if(b.disabled)throw new Error('Controle bloqueado: '+title);b.click();await pause(120);}
      }
      const sources=all(card,'input[placeholder="Nome da rede Wi-Fi"]');
      for(let i=0;i<sources.length;i++){
        const source=sources[i],item=plan.ssids.find(s=>s.band===headingFor(source))||plan.ssids[i]||plan.ssids[0];if(!item)throw new Error('O formulário de nomes de rede mudou.');
        if(item.restore){const b=all(card,'button').filter(e=>matches(e,'Restaurar SSID'))[i];if(!b||b.disabled)throw new Error('Restaurar SSID indisponível.');b.click();await pause(100);}
        else if(source.value!==item.value){if(source.disabled||source.readOnly)throw new Error('O Revan bloqueou a edição do SSID.');setNativeText(source,item.value);source.dispatchEvent(new FocusEvent('blur',{bubbles:true}));}
      }
      for(const item of plan.fields){
        const source=all(card,'ion-select').find(e=>headingFor(e)===item.band&&networkLabel(e)===item.label);
        if(!source)throw new Error('Campo de rede não encontrado: '+item.band+' · '+item.label);
        if(selectedValue(source)===item.value)continue;
        const available=await readOptions(source);if(!available.includes(item.value))throw new Error('A combinação escolhida não está disponível: '+item.band+' · '+item.label+' = '+item.value+'. Revise o rascunho.');
        await setSelect(source,item.value);
      }
      for(let i=0;i<sources.length;i++){
        const source=all(card,'input[placeholder="Nome da rede Wi-Fi"]')[i],item=plan.ssids.find(s=>s.band===headingFor(source))||plan.ssids[i]||plan.ssids[0];if(!item?.generate)continue;
        const b=all(card,'button').filter(e=>matches(e,'Gerar senha'))[i];if(!b||b.disabled)throw new Error('Geração de senha Wi-Fi indisponível.');
        const previous=all(card,'input[placeholder="Senha da rede"]')[i]?.value;remoteAttempted=true;b.click();
        const password=await until(()=>{const v=all(card,'input[placeholder="Senha da rede"]')[i]?.value;return v&&v!==previous&&v;},6000);generatedPasswords.set(item.band+':'+i,password);
      }
      if(card.querySelector('input.ng-invalid,input[aria-invalid="true"]'))throw new Error('O Revan informou um campo inválido.');
      const button=nativeButton('Salvar');if(!button||button.disabled)throw new Error('O Revan ainda não liberou Salvar para essa combinação.');
      const prepared=networkSnapshot();saveAttempted=true;button.click();await until(()=>nativeButton('Editar')&&!nativeEditing(),12000);
      savedNetwork=prepared;networkDraft=null;editing=false;changed=false;reviewRequested=false;editBaseline=null;options.clear();
      if(plan.powerChanged){const b=nativeButton(plan.power?'Habilitar rede':'Desabilitar rede');if(b){remoteAttempted=true;b.click();await pause(150);syncDialogs();}}
      if(plan.optimize){const b=nativeButton('Otimizar canal');if(!b||b.disabled)throw new Error('Rede salva, mas a otimização nativa não está disponível.');remoteAttempted=true;b.click();await pause(150);syncDialogs();}
      note('Salvar foi confirmado pela saída da edição no Revan. Confira o retorno e a aplicação no equipamento.');$('.launch').title=$('.status').textContent;
    }catch(error){
      if(!saveAttempted){const stop=nativeButton('Cancelar');if(stop){stop.click();await pause(150);}}
      if(networkDraft)networkDraft.state=(remoteAttempted||saveAttempted)?'uncertain':'draft';
      note((saveAttempted||remoteAttempted?'Há ação enviada sem confirmação completa. Confira o Revan antes de repetir. ':'Nenhuma configuração foi salva. ')+error.message);
      $('.launch').title=$('.status').textContent;opened=true;$('.panel').hidden=false;$('.launch').hidden=true;throw new Error($('.status').textContent);
    }
  }
  async function cancel(){
    if(networkDraft?.state!=='draft'&&networkDraft)throw new Error('Confira a aplicação no Revan antes de descartar o acompanhamento.');
    networkDraft=null;editing=false;changed=false;reviewRequested=false;editBaseline=null;options.clear();generatedPasswords.clear();autoReport='';note('Rascunho descartado. Nenhuma configuração foi enviada.');
  }
  async function automaticNetwork(){
    if(!networkDraft)await startEdit();requireDraft();
    for(const f of networkDraft.fields){const automatic=f.choices.find(v=>/^(auto|automatico|todos)/.test(normalized(v)));if(f.label==='Modo do Wi-Fi'&&automatic)f.value=automatic;if(f.label==='Largura de banda'&&f.band.startsWith('2.4'))f.value=f.choices.find(v=>/^20\s*mhz$/i.test(v))||f.value;if(f.label==='Largura de banda'&&f.band.startsWith('5.8')&&automatic)f.value=automatic;}
    networkDraft.optimize=Boolean(nativeButton('Otimizar canal'));draftChanged();autoReport='Perfil preparado localmente. A otimização nativa, quando disponível, só será acionada após Confirmar salvar.';
  }
  let selectedBand = '';
  function renderNetwork(body){
    body.append(make('h2','section-title','Configurações Wi-Fi'));
    const toggles=make('div','toggle-grid');
    const readonly=!networkDraft,plan=networkDraft||captureNetworkPlan(networkSignature());const actions=make('div','actions network-toolbar');
    const devices=nativeButton('Dispositivos conectados');actions.append(actionButton('Dispositivos conectados',async()=>{if(!devices||devices.disabled)throw new Error('Consulta indisponível.');devices.click();await pause(100);syncDialogs();},'',!devices||devices.disabled||editing));body.append(actions);
    if(readonly)body.append(make('small','','Clique em Editar para ler as opções e montar um rascunho local. As escolhas só serão aplicadas depois de Confirmar salvar.'));
    for(const [title,value] of Object.entries(plan.switches)){const label=make('label','toggle',title),input=make('input');input.type='checkbox';input.checked=value;input.dataset.lock=String(readonly);input.addEventListener('change',()=>{plan.switches[title]=input.checked;if(title==='Rede unificada'&&!input.checked&&plan.ssids.length===1){const first=plan.ssids[0],bands=[...new Set(plan.fields.map(f=>f.band))];if(bands.length>1)plan.ssids=bands.map((band,index)=>({...first,band,index}));}draftChanged();render();});label.append(input);toggles.append(label);}
    if(plan.power!==null){const label=make('label','toggle','Habilitar rede'),input=make('input');input.type='checkbox';input.checked=plan.power;input.dataset.lock=String(readonly);input.addEventListener('change',()=>{plan.power=input.checked;plan.powerChanged=true;draftChanged();});label.append(input);toggles.append(label);}
    body.append(actionButton('Configuração automática · preparar',automaticNetwork));if(autoReport)body.append(make('small','',autoReport));
    const groups=new Map();function group(band){if(!groups.has(band)){const e=make('div','network-band');e.append(make('h3','band',band));groups.set(band,e);body.append(e);}return groups.get(band);}
    plan.ssids.forEach((item,index)=>{
      if(plan.switches['Rede unificada']&&index>0)return;
      const field=make('div','field ssid-field'),label=make('label','','Nome da rede Wi-Fi (SSID)'),input=make('input');input.value=item.value;input.maxLength=item.max;input.dataset.lock=String(readonly);input.addEventListener('input',()=>{item.value=input.value;item.restore=false;draftChanged();});if(item.prefix){const wrap=make('div','ssid-input-wrap');wrap.append(make('span','ssid-prefix',item.prefix),input);label.append(wrap);}else label.append(input);field.append(label);
      const secret=make('div','password-reading');secret.append(make('span','','Senha da rede'),make('span','',item.hasPassword?'••••••••':'Não disponibilizada pelo Revan'));field.append(secret);
      field.append(actionButton(item.generate?'Cancelar geração de senha':'Gerar senha ao salvar',()=>{item.generate=!item.generate;draftChanged();},'',readonly),actionButton(item.restore?'Cancelar restauração do SSID':'Restaurar SSID ao salvar',()=>{item.restore=!item.restore;draftChanged();},'',readonly));
      if(item.generate)field.append(make('small','','A senha será gerada pelo Revan somente durante a aplicação após Confirmar salvar.'));
      if(item.restore)field.append(make('small','','O nome padrão será solicitado ao Revan somente ao aplicar.'));
      if(item.band==='Rede unificada'){field.classList.add('shared-ssid');body.append(field);}else group(item.band).append(field);
    });
    for(const f of plan.fields){const field=make('div','field select-field'),label=make('label','',f.label),select=make('select');for(const value of f.choices){const o=make('option','',value);o.value=value;select.append(o);}select.value=f.value;select.dataset.lock=String(readonly||!f.available);select.addEventListener('change',()=>{f.value=select.value;draftChanged();});label.append(select);field.append(label);group(f.band).append(field);}
    const bands=[...groups.keys()];
    if(!bands.includes(selectedBand))selectedBand=bands[0]||'';
    if(bands.length){
      const guides=make('div','band-tabs');guides.setAttribute('role','tablist');guides.setAttribute('aria-label','Faixa de frequência');
      function choose(band){selectedBand=band;for(const [name,element] of groups)element.hidden=name!==band;for(const b of guides.children){const active=b.dataset.band===band;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));}}
      for(const band of bands){const b=document.createElement('button');b.type='button';b.textContent=band;b.dataset.band=band;b.setAttribute('role','tab');b.addEventListener('click',()=>choose(band));guides.append(b);}
      const first=groups.values().next().value;body.insertBefore(guides,first);choose(selectedBand);
    }
    if(toggles.children.length)body.append(toggles);
  }

  async function refreshDashboard() {
    if(isDashboard()){queueRows();renderQueue();return;}
    const token=++operationEpoch;busy=true;lock();
    try{
      if(networkDraft&&card?.isConnected&&route===location.hash){if(networkDraft.state==='applying')networkDraft.state='uncertain';note(networkDraft.state==='draft'?'Rascunho local preservado. Nenhuma configuração foi reenviada.':'Aplicação interrompida. Confira o Revan antes de repetir.');return;}
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
        if(!/^(Consultar|Verificar)/.test(name)){pendingAction={tab:tabName,name,kind:'device',route};note('Ação selecionada localmente. Clique em Executar ação para acionar o Revan.');return;}
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
    const create=section.querySelector('button[nztooltiptitle="Criar login"]') || all(section, 'button').find(b => b.querySelector('[data-icon="plus"]'));
    return create?.querySelector('i[nztype="plus"]')||create;
  }
  async function executePreparedAction(){
    valid();const pending=pendingAction;if(!pending||pending.route!==route||pending.tab!==tabName)throw new Error('Selecione a ação novamente no atendimento atual.');
    const source=pending.kind==='device'?nativeButton(pending.name):authControl(pageSection('AUTENTICAÇÃO','brisanet-auth-card'),pending.mode);
    if(!source?.isConnected||source.disabled||source.closest('button')?.disabled)throw new Error('O Revan não disponibilizou essa ação. Nenhum comando foi enviado.');
    pendingAction=null;minimize();
    if(pending.mode==='password'){
      const before=commandFeedback(),previousNotices=new Map(visibleNative('.ant-notification-notice').map(e=>[e,text(e)]));source.click();
      try{await until(()=>visibleNative('.ion-popconfirm,.ant-popover,.sup-container,[role="dialog"],.ant-modal-content').some(e=>/gerar.*senha/i.test(text(e)))||commandFeedback()!==before,5000);}
      catch(error){throw new Error('A confirmação de senha não apareceu. Nenhuma geração foi confirmada; confira o botão de segurança do Revan.');}
      note('Aguardando sua confirmação no Revan para gerar a senha PPPoE. O painel não considera a senha gerada antes da resposta.');$('.launch').title=$('.status').textContent;
      watchAuthPassword(before,previousNotices);return;
    }
    monitorCommand(pending.name);source.click();await pause(150);syncDialogs();note('Ação acionada: '+pending.name+'. Confira a confirmação ou o retorno original do Revan.');$('.launch').title=$('.status').textContent;
  }
  function watchAuthPassword(before,previousNotices){
    const origin=route;let tries=0;
    const monitor=setInterval(()=>{
      if(!root.isConnected||location.hash!==origin||++tries>1000){clearInterval(monitor);return;}
      const notices=visibleNative('.ant-notification-notice');
      const notice=notices.find(e=>/senha gerada/i.test(text(e))&&previousNotices.get(e)!==text(e));
      if(notice){const description=text(notice.querySelector('.ant-notification-notice-description'))||text(notice);const password=description.match(/Nova senha:\s*(\S+)/i)?.[1];if(password){authResult={route:origin,password};note('Senha PPPoE retornada pelo Revan. Disponível na aba Autenticação.');$('.launch').title=$('.status').textContent;}clearInterval(monitor);}
      else if(commandFeedback()!==before&&/falha|erro/i.test(commandFeedback())){note('O Revan informou falha na geração de senha. Confira a notificação original.');clearInterval(monitor);}
    },300);
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
  async function attachTag(allowNoTag=false){
    valid();let selected=tagDraft.selected||tagDraft.query.trim();const comment=tagDraft.comment.trim();if(!selected&&!allowNoTag)throw new Error('Digite o nome ou escolha uma etiqueta antes de anexar.');
    const payload=JSON.stringify([route,selected,comment]);
    if(tagDraft.progress&&tagDraft.progress.payload!==payload&&tagDraft.progress.attempted&&!tagDraft.progress.sent)throw new Error('Há envio anterior sem confirmação. Confira os Eventos antes de iniciar outro.');
    const progress=tagDraft.progress?.payload===payload?tagDraft.progress:(tagDraft.progress={payload,tagged:!selected,skipTag:!selected,attempted:false,sent:false});
    if(selected&&progress.tagged&&!attachedTags().some(t=>tagKey(t)===tagKey(selected)))progress.tagged=false;
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
    note(selected?(comment?'Etiqueta anexada e comentário confirmado nos Eventos.':'Etiqueta anexada ao atendimento.'):(comment?'Comentário confirmado nos Eventos.':'Preparo externo sem etiqueta nem observação.'));
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
  function formatScheduleMessage(data,confirmed=false){
    const begin=Number(data.start.split(':')[0]),end=Number(data.end.split(':')[0]);
    const period=end<=12?'no período da manhã':begin>=12?'no período da tarde':'no período informado';
    return `Olá! Seu atendimento técnico ${confirmed?'foi agendado':'está previsto'} para o dia ${data.day}, ${period}, das ${data.start} às ${data.end}.\n\nO horário de atendimento da empresa é das 08:00 às 18:00.`;
  }
  document.addEventListener('change',event=>{
    if(!root.isConnected)return;
    const input=event.target;if(!input.matches?.('[data-testid="confirm-schedule-checkbox"] input')||!input.checked)return;
    const dialog=input.closest('.ant-modal-content');const data=readScheduleReview(dialog);if(!data)return;
    const message=formatScheduleMessage(data);scheduleMessage={route:location.hash,message,confirmed:false};
    let feedback=dialog.querySelector('[data-rv-schedule-copy]');if(!feedback){feedback=make('small');feedback.setAttribute('data-rv-schedule-copy','');feedback.style.cssText='display:block;padding:8px;color:#163e73';dialog.querySelector('[data-testid="component-revision-step"],app-revision-confirmation-step').append(feedback);}
    feedback.textContent='Copiando mensagem…';
    try{
      Promise.resolve(navigator.clipboard.writeText(message)).then(()=>{if(!root.isConnected)return;feedback.textContent='Mensagem copiada! Use Ctrl+V. A confirmação final do agendamento continua manual.';$('.launch').title='Mensagem de agendamento copiada. Use Ctrl+V.';},()=>{feedback.textContent='A cópia automática foi bloqueada. A mensagem ficou disponível na aba Etiquetar para copiar manualmente.';});
    }catch(error){feedback.textContent='A cópia automática está indisponível. Copie a mensagem pela aba Etiquetar.';}
  },true);
  function finishScheduleMessage(){
    const pending=pendingSchedule;if(!pending)return;
    if(!root.isConnected||pending.route!==location.hash){clearInterval(scheduleMonitor);scheduleMonitor=null;pendingSchedule=null;return;}
    const feedback=commandFeedback();
    if(feedback!==pending.before&&/(?:reagendamento|agendamento)\s+realizado\s+com\s+sucesso/i.test(feedback))pending.confirmed=true;
    if(pending.confirmed&&!scheduleDialog()){
      const message=formatScheduleMessage(pending.data,true);
      scheduleMessage={route:pending.route,message,confirmed:true};pendingSchedule=null;clearInterval(scheduleMonitor);scheduleMonitor=null;
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
    const box=make('div','field save-review');box.append(make('strong','',scheduleMessage.confirmed?'Agendamento confirmado · mensagem para o cliente':'Prévia do agendamento · confirmação final pendente'));
    const area=make('textarea');area.readOnly=true;area.rows=5;area.value=scheduleMessage.message;area.setAttribute('aria-label','Mensagem de agendamento');
    box.append(area,actionButton('Copiar mensagem de agendamento',async()=>{await navigator.clipboard.writeText(scheduleMessage.message);note('Mensagem de agendamento copiada.');}));
    box.append(make('small','',scheduleMessage.confirmed?'Gerada a partir da revisão e da confirmação de sucesso do Revan.':'Gerada ao marcar a caixa da revisão. Não conclui o agendamento.'));body.append(box);
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
    if(!forwardSectors.includes(tagDraft.destination))throw new Error('Escolha um destino válido.');
    if(tagDraft.destination==='Suporte Externo'&&!tagDraft.problem&&!tagDraft.problemQuery.trim())throw new Error('Escolha o problema ou digite o nome para pesquisar ao Anexar.');
    if(tagDraft.destination==='Suporte Externo'&&tagDraft.problem&&!tagDraft.service)throw new Error('Escolha o tipo de serviço do chamado externo.');
    const previous=tagDraft.forwardProgress;
    if(previous?.started&&!scheduleDialog()&&!forwardDialog())throw new Error('O formulário anterior foi fechado. Clique em Preparar novamente e depois em Anexar. O comentário confirmado não será reenviado.');
    if(previous?.started&&previous.payload!==JSON.stringify([route,tagDraft.destination,tagDraft.problem,tagDraft.service]))throw new Error('Há um encaminhamento iniciado com outros dados. Confira o Revan antes de continuar.');
    if(!previous?.started&&(scheduleDialog()||forwardDialog()))throw new Error('Já há um formulário de encaminhamento aberto no Revan. Conclua ou cancele por lá.');
    minimize();
    try{if(!tagDraft.onlyExternal)await attachTag(true);await forwardExternal();$('.launch').title=$('.status').textContent;}
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
    const onlyLabel=make('label','external-toggle');const only=make('input');only.type='checkbox';only.checked=tagDraft.onlyExternal;only.setAttribute('aria-label','Somente abrir externo');only.addEventListener('change',()=>{tagDraft.onlyExternal=only.checked;});onlyLabel.append(only,make('strong','','Somente abrir externo · ignorar etiqueta e observação'));extra.append(onlyLabel);
    extra.append(make('small','','Para abrir somente o chamado externo, deixe a etiqueta e a observação em branco. Nenhuma etiqueta nem comentário serão exigidos no interno.'));
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
    if(tagDraft.progress)field.append(make('small','',`Etiqueta: ${tagDraft.progress.skipTag?'não solicitada':tagDraft.progress.tagged?'confirmada':'não confirmada'} · Comentário: ${tagDraft.progress.sent?'confirmado':tagDraft.progress.attempted?'enviado, confira os Eventos':'não enviado'}`));
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
        pendingAction={tab:tabName,name:label,mode,kind:'auth',route};
        note('Ação selecionada no dashboard. Clique em Executar ação para abrir o fluxo original do Revan.');
      }, '', !native || native.disabled));
    }
    body.append(actions);
    if(authResult?.route===route){const label=make('label','','Senha PPPoE retornada pelo Revan'),output=make('input');output.type='text';output.readOnly=true;output.value=authResult.password;label.append(output);body.append(label,actionButton('Copiar senha PPPoE',async()=>{await navigator.clipboard.writeText(authResult.password);note('Senha PPPoE copiada.');}));}
    body.append(actionButton('Atualizar leitura', async () => { note('Autenticação atualizada a partir da tela do Revan.'); },'refresh-reading'));
    body.append(make('small', '', 'Estas ações alteram o login de autenticação do contrato. O e-mail mostrado é o usuário de acesso, não necessariamente o e-mail de contato.'));
  }
  function render() {
    if(isDashboard()){renderQueue();return;}
    root.classList.remove('queue-view');
    if (!card?.isConnected) return;
    if(editing&&!networkDraft&&!nativeEditing()&&nativeButton('Editar')){editing=false;changed=false;options.clear();generatedPasswords.clear();}
    const ips = fixedIPs();
    $('.context').textContent = `Atendimento ${route.split('/').pop()} · ${clientName()}${ips.length ? ` · IP fixo: ${ips.join(', ')}` : ''} · ${technology()}`;
    const financial=financialStatus();
    const financialClass=/^ativ[oa]$/i.test(financial)?'finance-active':/^(bloquead|suspens|inativ)/i.test(financial)?'finance-blocked':'finance-other';
    const badge=make('span',`finance-badge ${financialClass}`,financial);badge.title='Situação financeira no Revan';
    $('.context').append(' · ',badge);
    const tabs = technology() === 'FWA' ? ['CPE','Rede','Testes','Autenticação','Etiquetar'] : ['ONU','Roteador','Rede','Testes','Autenticação','Etiquetar'];
    const paths={ONU:'M4 4h16v14H4z M8 21h8 M8 14h1 M12 14h1 M16 14h1',CPE:'M4 6h16v12H4z M8 21h8',Roteador:'M4 13h16v7H4z M8 16h1 M12 16h1 M7 5a8 8 0 0 1 10 0 M9 8a4 4 0 0 1 6 0 M12 11h.01',Rede:'M9 3h6v5H9z M3 16h6v5H3z M15 16h6v5h-6z M12 8v4 M6 16v-4h12v4',Testes:'M8 4h8v3H8z M8 5H5v16h14V5h-3 M8 13l2 2 5-5',Autenticação:'M12 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8 M5 21v-3a7 7 0 0 1 14 0v3z',Etiquetar:'M3 3h8l10 10-8 8L3 11z M7 7h.01'};
    $('nav').setAttribute('aria-label','Seções do dashboard');
    $('nav').replaceChildren(...tabs.map(name=>{const b=actionButton(name,()=>switchTab(name),name===tabName?'active':'',editing);b.textContent='';const icon=document.createElementNS('http://www.w3.org/2000/svg','svg');icon.setAttribute('viewBox','0 0 24 24');icon.setAttribute('class','nav-icon');icon.setAttribute('aria-hidden','true');const path=document.createElementNS(icon.namespaceURI,'path');path.setAttribute('d',paths[name]);icon.append(path);b.append(icon,make('span','',name==='Autenticação'?'Login':name==='Etiquetar'?'Etiquetas':name));b.title=name;if(name===tabName)b.setAttribute('aria-current','page');return b;}));
    const body = $('.body'); body.replaceChildren();
    body.classList.toggle('network-layout', tabName === 'Rede');
    if (tabName === 'Rede') renderNetwork(body); else if (tabName === 'Testes') renderTests(body); else if (tabName === 'Autenticação') renderAuthentication(body); else if(tabName==='Etiquetar')renderTagger(body);else renderDevice(body);
    if(tabName==='Rede'){
      if(reviewRequested&&editing){
        const box=make('div','save-review');box.append(make('strong','','Revisar alterações'));
        const current=planSnapshot();const keys=[...new Set([...Object.keys(editBaseline||{}),...Object.keys(current)])];let count=0;
        for(const key of keys){if(editBaseline&&editBaseline[key]===current[key])continue;count++;const secret=/Senha/i.test(key);box.append(make('div','',`${key.replace(/ · \d+$/,'')}: ${secret?'••••••':editBaseline?.[key]??'Não registrado'} → ${secret?'Nova senha':current[key]??'Campo removido'}`));}
        if(!count)box.append(make('small','','Nenhuma diferença detectada nos campos lidos. Confira também a tela original.'));
        box.append(make('small','','Use Confirmar salvar no rodapé fixo para aplicar as alterações.'));body.prepend(box);
      }
      const message=make('details','client-message');message.append(make('summary','','Mensagem para o cliente'));
      const config=savedNetwork||(networkDraft?planSnapshot():networkSnapshot());const lines=Object.entries(config).filter(([k])=>/Nome da rede Wi-Fi|Senha da rede/.test(k));
      const status=editing?'RASCUNHO — alterações ainda não salvas':savedNetwork?'Salvamento confirmado pela saída do modo de edição do Revan. Confira a aplicação no equipamento.':'Configurações lidas da tela. Salvamento não acompanhado pelo painel.';
      const payload=[status,...lines.filter(([k,v])=>!/Senha/.test(k)||(v&&!/^[*•]+$/.test(v))).map(([k,v])=>`${k.replace(/ · \d+$/,'')}: ${v}`)].join('\n');
      const area=make('textarea');area.readOnly=true;area.value=payload;area.rows=5;message.append(area,actionButton('Copiar mensagem',async()=>{await navigator.clipboard.writeText(payload);note(editing?'Rascunho copiado. Salve antes de enviar ao cliente.':'Mensagem copiada.');}));body.append(message);
    }
    const footer = $('footer'); footer.replaceChildren();
    if(networkDraft)footer.append(make('div','draft-banner','Rascunho local · alterações ainda não aplicadas')); 
    if(pendingAction&&pendingAction.tab===tabName){const review=make('div','save-review');review.append(make('strong','','Ação selecionada: '+pendingAction.name),make('small','','Nada foi acionado ainda. Executar ação abre o fluxo no Revan; confirmações nativas continuam manuais.'));body.prepend(review);footer.append(actionButton('Executar ação',executePreparedAction,'primary'),actionButton('Cancelar seleção',()=>{pendingAction=null;note('Seleção descartada. Nenhum comando foi enviado.');}));}
    if(tabName==='Etiquetar')footer.append(actionButton('Anexar',attachRequested,'primary'));
    if (tabName === 'Rede') {
      if (editing) {
        footer.append(actionButton(reviewRequested?'Confirmar salvar':'Salvar',()=>save(reviewRequested),'primary',Boolean(networkDraft&&networkDraft.state!=='draft')));
        if(reviewRequested)footer.append(actionButton('Voltar à edição',()=>{reviewRequested=false;note('Continue editando.');}));
        footer.append(actionButton('Cancelar', cancel), actionButton('Recarregar opções', refreshDashboard));
      }
      else footer.append(actionButton('Editar', startEdit, 'primary', !nativeButton('Editar')));
    }
    if(queue.current||queue.active)footer.append(queueSummary());
    lock();
    restorePositions();
  }
  // The queue uses rendered native controls only. It never closes a ticket.
  const isDashboard=()=>/^#\/yoda\/dashboard(?:[/?]|$)/.test(location.hash);
  const attendanceID=()=>location.hash.match(/^#\/yoda\/attendance\/(\d+)(?:[/?]|$)/)?.[1]||'';
  let queue={active:false,current:'',pending:[],completed:[],selected:new Set(),message:'Selecione os chamados que deseja atender.',seenWorking:false};
  let queueSearch='',queueOpening=false,queueRestoreOpen=null,queueStartTimer=null,queueTickBusy=false,queueReadBusy=false,queueIntent=null;
  const queueCache=new Map();
  function queueRows(){
    if(!isDashboard())return [];
    const active=all(document,'[role="tab"]').find(e=>!root.contains(e)&&(e.getAttribute('aria-selected')==='true'||e.classList.contains('ant-tabs-tab-active')));
    if(active&&normalized(text(active))!=='meus chamados')return [];
    const hosts=all(document,'brisanet-call-list').filter(e=>!root.contains(e)&&e.getClientRects().length);
    return hosts.flatMap(host=>all(host,'li.list-item').map(element=>{
      const primary=element.querySelector('.primary-text'),id=text(primary).match(/#(\d+)/)?.[1];if(!id)return null;
      const state=text(primary.querySelector('nz-tag')),name=text(element.querySelector('.secondary-text'));
      const start=element.querySelector('button.init-button,button.init-button-dense');
      const eligible=/^aguardando$/i.test(state)?Boolean(start&&!start.disabled):/^trabalhando$/i.test(state);
      const item={id,name,state,labels:all(element,'.label-list nz-tag').map(text).join(' · '),eligible,element,start,primary};
      queueCache.set(id,{id,name,state,labels:item.labels,eligible});return item;
    }).filter(Boolean)).filter((r,i,a)=>a.findIndex(x=>x.id===r.id)===i);
  }
  function queueControl(name,fn,primary=false,disabled=false){
    const b=make('button',primary?'primary':'',name);b.type='button';b.disabled=disabled;b.dataset.lock=String(disabled);
    b.addEventListener('click',()=>Promise.resolve().then(fn).catch(e=>{queue.active=false;queue.message=e.message;queueOpening=false;restoreQueueOpen();renderQueue();}));return b;
  }
  function restoreQueueOpen(){if(queueRestoreOpen){queueRestoreOpen();queueRestoreOpen=null;}clearTimeout(queueStartTimer);}
  function pauseQueue(){queue.active=false;root.dataset.queueRunning='false';queue.message=queue.current?'Fila pausada. Conclua o chamado atual; use Retomar para acompanhar novamente.':'Fila pausada. Nenhum outro chamado será iniciado.';if(isDashboard())renderQueue();else if(opened&&card?.isConnected)render();}
  function queueSummary(){
    const strip=make('div','queue-running');strip.append(make('span','',`Fila: ${queue.current?'#'+queue.current:'aguardando'} · ${queue.pending.filter(id=>id!==queue.current).length} na sequência`),queueControl(queue.active?'Pausar fila':'Retomar fila',()=>{if(queue.active)pauseQueue();else{queue.active=true;queue.message='Fila retomada.';if(queue.current&&isDashboard())location.hash='#/yoda/attendance/'+queue.current;else void queueTick();}},false));return strip;
  }
  function renderQueue(){
    if(!isDashboard()||!opened)return;
    root.classList.add('queue-view');$('.equipment').hidden=true;$('nav').replaceChildren();
    $('.context').textContent='Meus chamados · fila de atendimento';$('.status').textContent=queue.message;
    const body=$('.body');body.classList.remove('network-layout');body.replaceChildren(make('h2','section-title','Fila de chamados'));
    const controls=make('div','actions');controls.append(queueControl(queueReadBusy?'Lendo a lista…':'Carregar toda a lista',readAllQueueRows,false,queueReadBusy||queue.active),queueControl('Atualizar leitura',()=>{queueRows();renderQueue();},false,queueReadBusy));body.append(controls);
    body.append(make('small','','A leitura inclui os itens carregados em Meus chamados. “Carregar toda a lista” percorre a rolagem nativa. Os filtros do Revan continuam valendo.'));
    const search=make('input');search.placeholder='Pesquisar nome, número, estado ou etiqueta';search.value=queueSearch;search.setAttribute('aria-label','Pesquisar chamados');body.append(search);
    const count=make('div','queue-count'),list=make('div','queue-list');body.append(count,list);
    const pick=make('div','actions');body.insertBefore(pick,count);
    function draw(){
      const native=queueRows(),rows=[...queueCache.values()];const query=normalized(queueSearch);const shown=rows.filter(r=>normalized([r.id,r.name,r.state,r.labels].join(' ')).includes(query));
      count.textContent=`${rows.length} lidos · ${queue.selected.size} selecionados · ${queue.completed.length} concluídos`;
      list.replaceChildren();
      for(const item of shown){const row=make('label','queue-item'),check=make('input');check.type='checkbox';check.checked=queue.selected.has(item.id);check.disabled=!item.eligible||queue.active||Boolean(queue.current)||queueReadBusy;check.dataset.lock=String(check.disabled);check.setAttribute('aria-label','Selecionar chamado '+item.id);
        check.addEventListener('change',()=>{if(check.checked)queue.selected.add(item.id);else queue.selected.delete(item.id);draw();updateFooter();});
        const info=make('span','queue-info');info.append(make('strong','',`#${item.id} · ${item.name}`),make('small','',item.state+(item.labels?' · '+item.labels:'')));
        if(!item.eligible)info.append(make('small','queue-unavailable','Sem botão Iniciar: continue este estado pelo Revan.'));
        row.append(check,info);list.append(row);
      }
      if(!shown.length)list.append(make('small','','Nenhum chamado encontrado nesta leitura.'));
      pick.replaceChildren(queueControl('Selecionar filtrados',()=>{shown.filter(r=>r.eligible).forEach(r=>queue.selected.add(r.id));draw();updateFooter();},false,queue.active||Boolean(queue.current)||queueReadBusy),queueControl('Limpar seleção',()=>{queue.selected.clear();draw();updateFooter();},false,queue.active||Boolean(queue.current)||queueReadBusy));
    }
    function updateFooter(){
      const footer=$('footer');footer.replaceChildren();
      if(queue.current||queue.active){footer.append(queueSummary(),queueControl('Parar fila',()=>{pauseQueue();queue.current='';queue.pending=[];queue.message='Fila interrompida. O atendimento permanece como está no Revan.';renderQueue();}));}
      else footer.append(queueControl(`Abrir selecionados (${queue.selected.size})`,startQueue,true,!queue.selected.size||queueReadBusy));
    }
    search.addEventListener('input',()=>{queueSearch=search.value;draw();restorePositions();});draw();updateFooter();restorePositions();
  }
  async function readAllQueueRows(){
    if(queueReadBusy)return;queueReadBusy=true;queue.message='Lendo os chamados pela rolagem da lista…';renderQueue();
    let stopped=false;try{
      let unchanged=0,lastCount=0;
      for(let pass=0;pass<100&&root.isConnected&&isDashboard();pass++){
        const rows=queueRows(),first=rows[0]?.element;if(!first)break;
        let scroll=first.parentElement;while(scroll&&scroll!==document.body&&!(scroll.scrollHeight>scroll.clientHeight+5&&/auto|scroll/.test(getComputedStyle(scroll).overflowY)))scroll=scroll.parentElement;
        if(!scroll||scroll===document.body)break;
        scroll.scrollTop=scroll.scrollHeight;scroll.dispatchEvent(new Event('scroll',{bubbles:true}));await new Promise(r=>setTimeout(r,1100));
        queueRows();const total=queueCache.size;unchanged=total===lastCount?unchanged+1:0;lastCount=total;
        const loading=all(scroll.parentElement||scroll,'.ant-spin-spinning,.loading').some(e=>e.getClientRects().length);
        if(unchanged>=4&&!loading){stopped=true;break;}
      }
      queue.message=`${queueCache.size} chamados lidos${stopped?' até o fim da rolagem detectada':'. Confira se há mais resultados na lista'}.`;
    }finally{queueReadBusy=false;renderQueue();}
  }
  function startQueue(){
    if(queue.active||queue.current)return;
    const visible=queueRows(),ids=[...queue.selected];if(!ids.length)return;
    if(ids.some(id=>!queueCache.get(id)?.eligible))throw new Error('Revise a seleção: há um chamado indisponível.');
    queue.pending=ids;queue.completed=[];queue.current='';queue.active=true;queue.seenWorking=false;queue.message=`Fila iniciada com ${ids.length} chamados. Um por vez.`;renderQueue();void queueTick();
  }
  async function queueNext(){
    if(!queue.active||queue.current||queueOpening||!isDashboard()||networkDraft||pendingAction||busy)return;
    if(!queue.pending.length){queue.active=false;queue.message='Fila concluída. Todos os chamados selecionados foram atendidos.';renderQueue();return;}
    const id=queue.pending[0];let item=queueRows().find(r=>r.id===id);
    if(!item){await readAllQueueRows();if(!queue.active||!isDashboard())return;item=queueRows().find(r=>r.id===id);if(!item){queue.active=false;queue.message=`#${id} não está mais na lista disponível. Fila pausada; confira os filtros e a situação do chamado.`;renderQueue();return;}}
    if(!item.eligible){queue.active=false;queue.message=`#${id} mudou para ${item.state||'um estado indisponível'}. Fila pausada para conferência.`;renderQueue();return;}
    queueOpening=true;queue.current=id;queue.seenWorking=false;queue.message=`Iniciando #${id} pelo controle do Revan…`;root.dataset.queueRunning='true';renderQueue();
    // Reuse this SPA tab when this one native control opens the selected attendance.
    // All unrelated calls retain the browser's original behavior.
    const original=window.open;
    const redirected=function(url,...args){let target;try{target=new URL(String(url),location.href);}catch{}if(target?.origin===location.origin&&target.hash===`#/yoda/attendance/${id}`){restoreQueueOpen();queueOpening=false;location.hash=target.hash;return window;}return original.call(window,url,...args);};
    window.open=redirected;queueRestoreOpen=()=>{if(window.open===redirected)window.open=original;};
    queueStartTimer=setTimeout(()=>{restoreQueueOpen();queueOpening=false;if(attendanceID()!==id){queue.active=false;queue.message=`Não houve confirmação de abertura de #${id}. Confira a tela do Revan antes de retomar; não repetimos o início automaticamente.`;renderQueue();}},15000);
    try{if(item.start&&!item.start.disabled)item.start.click();else item.primary.click();}catch(e){restoreQueueOpen();queueOpening=false;queue.active=false;queue.message=e.message;renderQueue();}
  }
  function queueClosed(){
    if(!queue.active||!queue.current||!queue.seenWorking)return false;
    const state=text(document.querySelector('.custom-card__state-tag'));
    return attendanceID()===queue.current&&/^(encerrad[oa]|finalizad[oa]|conclu[ií]d[oa]|fechad[oa])$/i.test(state);
  }
  async function queueTick(){
    if(queueTickBusy||!root.isConnected)return;queueTickBusy=true;
    try{
      root.dataset.queueRunning=String(queue.active);
      if(queue.active&&queue.current){
        const id=attendanceID();if(id===queue.current){queueOpening=false;restoreQueueOpen();const state=text(document.querySelector('.custom-card__state-tag'));if(/^trabalhando$/i.test(state))queue.seenWorking=true;}
        const notices=all(document,'.ant-message-notice-content,.ant-notification-notice,[role="alert"]').filter(e=>!root.contains(e)&&e.getClientRects().length).map(text);
        const fresh=notices.filter(message=>!queueIntent?.before.has(message)).join('\n');
        const confirmedNotice=queueIntent&&queueIntent.id===queue.current&&Date.now()-queueIntent.time<20000&&/(?:chamado|atendimento)[^\n]{0,100}(?:encerrad|finalizad|conclu[ií]d|fechad)|(?:encerrad|finalizad|conclu[ií]d|fechad)[^\n]{0,80}(?:sucesso)/i.test(fresh)&&!/erro|falh|não foi|nao foi/i.test(fresh);
        if(queueClosed()||(queue.seenWorking&&confirmedNotice&&(id===queue.current||isDashboard()))){
          queue.completed.push(queue.current);queue.selected.delete(queue.current);queue.pending=queue.pending.filter(x=>x!==queue.current);queue.current='';queueIntent=null;queue.message='Encerramento confirmado. Preparando o próximo selecionado…';location.hash='#/yoda/dashboard';return;
        }
        if(!queueOpening&&id!==queue.current){queue.active=false;queue.message=`Fila pausada: saímos de #${queue.current} sem confirmação de encerramento. Nenhum outro chamado foi iniciado.`;renderQueue();}
      }else if(queue.active)await queueNext();
    }finally{queueTickBusy=false;}
  }
  document.addEventListener('click',event=>{
    if(!queue.active||!queue.current||attendanceID()!==queue.current||root.contains(event.target))return;
    const control=event.target.closest('button,[role="button"],.action-item');if(!control)return;
    if(/^(encerrar|finalizar|concluir|fechar)( chamado| atendimento)?$/i.test(text(control)))queueIntent={id:queue.current,time:Date.now(),before:new Set(all(document,'.ant-message-notice-content,.ant-notification-notice,[role="alert"]').filter(e=>!root.contains(e)&&e.getClientRects().length).map(text))};
  },true);
  const queueMonitor=setInterval(()=>{if(!root.isConnected){clearInterval(queueMonitor);restoreQueueOpen();return;}void queueTick();},700);

  async function open() {
    const anchor=root.getBoundingClientRect();
    opened = true; $('.panel').hidden = false; $('.launch').setAttribute('aria-expanded','true');
    $('.launch').hidden=true;
    if (!positions.widget) positions.widget={x:anchor.left,y:anchor.top};
    restorePositions();
    if(isDashboard()){queueRows();renderQueue();return;}
    root.classList.remove('queue-view');
    const list = cards(); const picker = $('.equipment'); picker.replaceChildren();
    list.forEach((c, i) => { const o = make('option','',`Equipamento ${i + 1} · ${text(c.querySelector('ion-tab-group')?.previousElementSibling).slice(0,80)}`); o.value = String(i); picker.append(o); });
    picker.hidden = list.length < 2;
    if (card?.isConnected && route === location.hash && editing && (networkDraft||nativeEditing())) { picker.value = String(list.indexOf(card)); render(); return; }
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
  window.addEventListener('hashchange', () => { minimize(); networkDraft=null;pendingAction=null;authResult=null; tagDraft=emptyTagDraft();savedNetwork=null;editBaseline=null;reviewRequested=false;card = null; editing = false; changed = false; options.clear(); generatedPasswords.clear();autoPending=false;autoReport='';$('.context').textContent = ''; $('nav').replaceChildren(); $('.body').replaceChildren(); $('footer').replaceChildren(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') minimize(); });
  new MutationObserver(records => {
    syncDialogs();
    if(isDashboard()&&opened&&!queueReadBusy&&records.some(r=>!root.contains(r.target)&&r.target.closest?.('brisanet-call-list'))){clearTimeout(timer);timer=setTimeout(()=>{if(!root.contains(document.activeElement)||document.activeElement.tagName!=='INPUT')renderQueue();},200);}
    const sections=[card,commandSection(),financialSection(),pageSection('RESULTADOS DOS TESTES','brisanet-config-report'),pageSection('AUTENTICAÇÃO','brisanet-auth-card')].filter(Boolean);
    if (!opened || busy || !card || !records.some(r => sections.some(section=>section.contains(r.target)))) return;
    clearTimeout(timer); timer = setTimeout(() => {
      if (busy || !opened || (root.contains(document.activeElement) && document.activeElement.matches('input:not([readonly]),select,textarea'))) return;
      render();
    }, 150);
  }).observe(document.body, {childList:true, subtree:true});
})();
