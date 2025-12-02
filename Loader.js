// ==UserScript==
// @name         Genesys Loader (V7.1 - Bookmarklet)
// @description  Carrega toda a suite a partir do GitHub via Favoritos.
// ==/UserScript==

(function() {
    'use strict';

    // ⚠️ CONFIGURAÇÃO: Coloca aqui o teu utilizador e repositório do GitHub
    const GITHUB_USER = "scriptgenesys-code"; 
    const GITHUB_REPO = "Script-Completo";
    const BRANCH = "main"; // ou "master", verifica no teu GitHub

    // Base URL (Raw do GitHub)
    const BASE_URL = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${BRANCH}/`;

    // Lista de Scripts na Ordem de Carregamento
    const SCRIPTS = [
        "compatibility.js", // 1. Configuração Global (Essencial)
        "bar.js",
        "extrator.js",
        "protocolos.js",
        "respostas.js",
        "pausas.js",
        "cronometros.js",
        "ia.js",
        "monitor.js",
        "central.js",
        "gerente.js",
        "menu.js"           // ÚLTIMO: O Menu só carrega quando as ferramentas estiverem prontas
    ];

    console.log(`[Loader] Iniciando injeção da Suite V7.1 de: ${BASE_URL}`);

    // Função para injetar CSS (Style.css)
    function loadCSS(filename) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = BASE_URL + filename + "?v=" + Date.now(); // Cache buster
        document.head.appendChild(link);
    }

    // Função para injetar JS
    function loadScript(filename) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = BASE_URL + filename + "?v=" + Date.now(); // Cache buster
            script.onload = () => {
                console.log(`[Loader] Carregado: ${filename}`);
                resolve();
            };
            script.onerror = () => {
                console.error(`[Loader] Falha ao carregar: ${filename}`);
                reject();
            };
            document.body.appendChild(script);
        });
    }

    // Carrega CSS primeiro
    loadCSS("style.css");

    // Carrega Scripts em Sequência (para garantir dependências)
    async function loadAll() {
        for (const script of SCRIPTS) {
            await loadScript(script);
        }
        console.log("[Loader] Suite carregada com sucesso! 🚀");
        
        // Notificação Visual
        const div = document.createElement('div');
        div.style.cssText = "position:fixed;top:10px;right:10px;background:#28a745;color:white;padding:10px;border-radius:5px;z-index:999999;";
        div.innerText = "Genesys Suite V7.1 Carregada!";
        document.body.appendChild(div);
        setTimeout(()=>div.remove(), 3000);
    }

    loadAll();

})();
