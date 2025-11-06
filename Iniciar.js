// Este é o conteúdo ATUALIZADO do seu Iniciar.js (V2 - Simplificado)
(function() {
    'use strict';
    console.log('Bootloader (V2): Iniciar.js carregado.');

    // URL DE LOG (Será usada pelo Cronometros.js, mas mantemos aqui para referência)
    const LOG_URL = 'https://script.google.com/macros/s/AKfycbwIRwR7V6eo2BWFQqtVfnomi5zn-VCFe76ltXLN25eYcAqPn4nakZDxv1QdWPvOXz12vA/exec';

    /* --- INÍCIO DO CÓDIGO DE LOG (SÓ ACESSO INICIAL) --- */
    let userName = "Usuário Anônimo";
    try {
        // Espera um pouco para o nome do usuário carregar na UI
        setTimeout(function() {
            let userElement = document.querySelector('div.name span.entry-value');
            if (userElement) {
                userName = userElement.innerText;
            }
            
            fetch(LOG_URL, {
                method: 'POST',
                mode: 'no-cors', 
                body: JSON.stringify({
                    type: 'log',
                    user: userName,
                    page: window.location.href
                })
            });
            console.log('Bootloader (V2): Log de acesso enviado.');

        }, 5000); // Espera 5s para pegar o nome

    } catch (err) {
        console.log('Bootloader (V2): Falha ao registrar log:', err);
    }

    /* --- CARREGAR SCRIPTS ORIGINAIS (COM CORREÇÃO DE CACHE) --- */
    try {
        var s1 = document.createElement('script');
        s1.src = 'https://kingoffjoss.github.io/Meus-Scripts/Cronometros.js?v='+Date.now();
        document.body.appendChild(s1);
        
        var s2 = document.createElement('script');
        s2.src = 'https://kingoffjoss.github.io/Meus-Scripts/Pausas%20Automaticas.js?v='+Date.now();
        document.body.appendChild(s2);
        console.log('Bootloader (V2): Cronometros.js e Pausas Automaticas.js sendo carregados.');
    } catch(e) {
        console.log('Bootloader (V2): Erro ao carregar scripts principais.', e);
    }

    // A LÓGICA DE 'setTimeout(30000)' FOI REMOVIDA DAQUI E MOVIDA PARA O 'Cronometros.js'

})();
