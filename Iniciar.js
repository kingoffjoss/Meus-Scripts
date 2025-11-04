// Este é o conteúdo do seu novo arquivo Iniciar.js (com correção de cache)
(function() {
    'use strict';
    console.log('Bootloader: Iniciar.js carregado.');

    const LOG_URL = 'https://script.google.com/macros/s/AKfycbzmr6yi55mM6VMHs7rS5WWW2Ceahz71UHBkJ2fzFmnNBC3pXN2RMqemYh00knM6nHbWvg/exec';

    /* --- INÍCIO DO CÓDIGO DE LOG --- */
    let userName = "Usuário Anônimo";
    try {
        let userElement = document.querySelector('div.name span-entry-value');
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
        // ATUALIZAÇÃO AQUI: Adiciona '?v='+Date.now() para ignorar o cache
        s1.src = 'https://kingoffjoss.github.io/Meus-Scripts/Cronometros.js?v='+Date.now();
        document.body.appendChild(s1);
        
        var s2 = document.createElement('script');
        // ATUALIZAÇÃO AQUI: Adiciona '?v='+Date.now() para ignorar o cache
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
            // Verificamos se o seu script Cronometros.js já carregou o analyticsManager
            if (typeof window.analyticsManager !== 'undefined') {
                console.log('Bootloader: analyticsManager encontrado. Enviando dados de analytics e atendimentos...');
                
                let currentUserName = "Usuário Anônimo";
                let userEl = document.querySelector('div.name span.entry-value');
                if (userEl) {
                    currentUserName = userEl.innerText;
                }

                // 1. Prepara dados de Analytics
                const stats = window.analyticsManager.calculateStats();
                const analyticsPayload = {
                    conversasUnicas: stats.count,
                    tmaGeral: stats.tma,
                    tmeAtivo: stats.tme,
                    encAgente: stats.endedByAgentCount,
                    inicio: stats.last, 
                    ultima: stats.first, 
                    meta: window.CONFIG ? window.CONFIG.CONVERSATION_TARGET : 45,
                    transferidos: stats.transferClicks
                };

                fetch(LOG_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify({
                        type: 'analytics',
                        user: currentUserName,
                        stats: analyticsPayload
                    })
                });

                // 2. Prepara dados de Atendimentos
                const mapClass = (c) => {
                    switch(c) {
                        case 'AVALIACAO': return 'Avaliação';
                        case 'BALAO': return 'Agente/Balão';
                        case 'TRANSFERIDO': return 'Transferido';
                        default: return 'Agente/Hibernado';
                    }
                };

                const atendimentosPayload = window.analyticsManager.getData().conversations.map(conv => ({
                    tipo: conv.interactionType || 'unknown',
                    horaFim: new Date(conv.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                    cliente: conv.participantName,
                    tme: (() => {
                        const s = Math.floor(conv.activeDuration / 1000);
                        return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`
                    })(),
                    recorrencia: conv.isRecurrence ? 'Sim' : 'Não',
                    encerradoPor: mapClass(conv.endedByAgent),
                    link: conv.interactionUrl || 'N/A'
                }));

                fetch(LOG_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    body: JSON.stringify({
                        type: 'atendimento',
                        user: currentUserName,
                        atendimentos: atendimentosPayload
                    })
                });
                
                console.log('Bootloader: Dados de Analytics e Atendimentos enviados com sucesso.');

            } else {
                console.log('Bootloader: ERRO! window.analyticsManager não foi definido após 5 segundos. O script Cronometros.js pode ter falhado ao carregar.');
            }
        } catch (e) {
            console.log('Bootloader: Erro ao enviar dados de analytics/atendimentos.', e);
        }
    }, 5000); // 5 segundos de espera

})();
