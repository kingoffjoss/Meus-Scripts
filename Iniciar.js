// Este é o conteúdo ATUALIZADO do seu Iniciar.js (compatível com MOD_4 e novo envio de Encerrados)
(function() {
    'use strict';
    console.log('Bootloader: Iniciar.js carregado.');

    const LOG_URL = 'https://script.google.com/macros/s/AKfycbzmr6yi55mM6VMHs7rS5WWW2Ceahz71UHBkJ2fzFmnNBC3pXN2RMqemYh00knM6nHbWvg/exec';

    /* --- INÍCIO DO CÓDIGO DE LOG (Não muda) --- */
    let userName = "Usuário Anônimo";
    try {
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
        console.log('Bootloader: Log de acesso enviado.');

    } catch (err) {
        console.log('Bootloader: Falha ao registrar log:', err);
    }

    /* --- CARREGAR SCRIPTS ORIGINAIS (COM CORREÇÃO DE CACHE) --- */
    try {
        var s1 = document.createElement('script');
        s1.src = 'https://kingoffjoss.github.io/Meus-Scripts/Cronometros.js?v='+Date.now();
        document.body.appendChild(s1);
        
        var s2 = document.createElement('script');
        s2.src = 'https://kingoffjoss.github.io/Meus-Scripts/Pausas%20Automaticas.js?v='+Date.now();
        document.body.appendChild(s2);
        console.log('Bootloader: Cronometros.js e Pausas Automaticas.js sendo carregados (sem cache).');
    } catch(e) {
        console.log('Bootloader: Erro ao carregar scripts principais.', e);
    }

    /* --- EXTRAIR DADOS (APÓS ATRASO) --- */
    console.log('Bootloader: Aguardando 5 segundos para o analyticsManager carregar...');
    setTimeout(function() {
        try {
            if (typeof window.analyticsManager !== 'undefined' && typeof window.v4_counters !== 'undefined') { // Checagem dupla
                console.log('Bootloader: analyticsManager e v4_counters encontrados. Enviando todos os dados...');
                
                let currentUserName = "Usuário Anônimo";
                let userEl = document.querySelector('div.name span.entry-value');
                if (userEl) {
                    currentUserName = userEl.innerText;
                }

                // 1. Envio de Analytics (Não muda)
                const stats = window.analyticsManager.calculateStats();
                const analyticsPayload = {
                    conversasUnicas: stats.count, tmaGeral: stats.tma, tmeAtivo: stats.tme, encAgente: stats.baloonClicks,
                    inicio: stats.last, ultima: stats.first, meta: window.CONFIG ? window.CONFIG.CONVERSATION_TARGET : 45, transferidos: stats.transferClicks
                };

                fetch(LOG_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify({ type: 'analytics', user: currentUserName, stats: analyticsPayload }) });

                // 2. Envio de Atendimentos (Não muda)
                const atendimentosPayload = window.analyticsManager.getData().conversations.map(conv => ({
                    tipo: conv.interactionType || 'unknown',
                    horaFim: new Date(conv.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                    cliente: conv.participantName,
                    tme: (() => {
                        const s = Math.floor(conv.activeDuration / 1000);
                        return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`
                    })(),
                    recorrencia: conv.isRecurrence ? 'Sim' : 'Não',
                    link: conv.interactionUrl || 'N/A'
                }));

                fetch(LOG_URL, { method: 'POST', mode: 'no-cors', body: JSON.stringify({ type: 'atendimento', user: currentUserName, atendimentos: atendimentosPayload }) });

                // 3. NOVO: Envio de Encerrados (Balão)
                const encerradosBalao = window.v4_counters.balao;
                if (encerradosBalao && encerradosBalao.length > 0) {
                     fetch(LOG_URL, {
                        method: 'POST',
                        mode: 'no-cors',
                        body: JSON.stringify({
                            type: 'encerrados', // NOVO TIPO DE DADO
                            user: currentUserName,
                            encerrados: encerradosBalao
                        })
                    });
                     console.log(`Bootloader: Enviando ${encerradosBalao.length} logs de encerramento (Balão).`);
                }

                console.log('Bootloader: Dados completos enviados com sucesso.');

            } else {
                console.log('Bootloader: ERRO! Falha ao carregar objetos de analytics.');
            }
        } catch (e) {
            console.log('Bootloader: Erro ao enviar dados. Verifique a nova aba Encerrados no Apps Script.', e);
        }
    }, 5000); 

})();
