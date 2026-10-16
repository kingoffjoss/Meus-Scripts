# Revan — Equipamentos e rede

Minidashboard flutuante para o Revan. Versão 4.7.1.

## Instalar o favorito

Baixe [instalar-favorito-revan.html](outputs/instalar-favorito-revan.html), abra o arquivo no Chrome ou Edge e arraste o botão para a barra de favoritos. Use Ctrl + Shift + B para exibir a barra. Abra um atendimento no Revan e clique no favorito.

Alternativa: baixe e importe [revan-favoritos.html](outputs/revan-favoritos.html) no gerenciador de favoritos. Para Tampermonkey, use [revan-minidashboard.user.js](outputs/revan-minidashboard.user.js).

Os arquivos HTML precisam ser baixados e abertos no navegador; a visualização de código do GitHub não executa o instalador.

## Recursos

- ONU e CPE, roteador, rede, testes e autenticação.
- Redes unificadas ou separadas, SSID e senha por banda, modo, largura e canal.
- Editar, salvar e cancelar pelos controles originais do Revan.
- Painel móvel, minimizar e atualizar para recuperar operações travadas.
- Revisão antes de salvar e mensagem com SSID/senha de cada banda.
- Histórico de comandos com confirmação pelo Revan e limite de espera.
- Diagnóstico com explicações dos testes e destaque de estados.
- Otimização de canal do próprio Revan quando disponível.

O favorito principal busca a versão mais recente no GitHub a cada clique e inicia como botão. Instale este novo favorito uma vez para receber as próximas atualizações. Não atualiza durante uma edição. Se o navegador bloquear o carregamento remoto, use outputs/instalar-favorito-revan-offline.html; esse favorito precisa ser substituído manualmente após atualizações.

## Manutenção

Edite `outputs/revan-minidashboard.user.js` e aumente `@version`. Na pasta `Revan`, execute:

```sh
node scripts/build-bookmarklet.cjs
```

O gerador valida a sintaxe e recria o instalador, o arquivo de importação e o URL do favorito. Requer Node.js, sem dependências externas. Faça commit do código e dos arquivos gerados juntos.

O painel depende da estrutura da interface do Revan. Alterações nessa interface podem exigir ajustes nos seletores. Os detalhes de operação estão em [LEIA-ME.txt](outputs/LEIA-ME.txt).

O repositório contém apenas o código e os instaladores, sem capturas de atendimentos ou dados de clientes. As ações usam a sessão já aberta no Revan.


ETIQUETAR — versão 4.6
Aba Etiquetar: busque nome, trecho ou letra; a lista local ignora acentos e é ordenada alfabeticamente. Escolha o nome exato. A digitação filtra somente o catálogo local. O segundo campo nativo só é aberto ao clicar em Anexar. Se o nome digitado não estiver no catálogo, Anexar consulta o Revan e exige uma correspondência exata ou única; resultados ambíguos voltam para seleção, sem aplicar. O catálogo inicial reúne etiquetas observadas e é complementado pela busca ao vivo; não é inventário completo. Não garante totalidade.
Digite uma observação opcional. Anexar aplica a etiqueta no atendimento e publica a observação como comentário interno nos Eventos. A categoria não é selecionada. O painel preserva comentários já em rascunho e evita repetir envios acompanhados nesta sessão. Confira confirmações e erros: etiqueta e comentário são etapas separadas, sem transação única. Se o comentário ficar sem confirmação, confira os Eventos antes de repetir; atualizar o painel não reenvia.

Correção 4.6.3: clique no nz-tag interno do botão +; catálogo inicial de 229 nomes, incluindo Sem acesso e Chamado Teste. A pesquisa nativa pode limitar resultados: refine o nome para localizar outras etiquetas.

Correção da consulta: aguarda o debounce nativo de 1 segundo e valida resultados correspondentes antes de selecionar. Sufixo visual (Carimbo) é removido somente do termo de pesquisa.

Fluxo 4.6.3: nenhuma consulta ao Revan durante a digitação. Categoria, busca nativa, seleção, inclusão da etiqueta e comentário só são acionados após Anexar. Selecione um resultado local ou digite o nome de uma etiqueta ausente. Resultados ambíguos exigem escolha e novo clique em Anexar.


## Abrir chamado externo — 4.7.0

Na aba Etiquetar, marque **Abrir chamado externo**. Escolha o destino (padrão: Suporte Externo), o problema do agendamento e o tipo de serviço. A escolha do problema preenche o tipo de reparo, que pode ser revisado. A lista do agendamento é independente das etiquetas do atendimento. O catálogo observado reúne oito destinos e 15 problemas para cliente Fibra; outros clientes podem apresentar opções diferentes.

Preencher, pesquisar e marcar a caixa não aciona o Revan. **Anexar** minimiza o dashboard, aplica a etiqueta e a observação, abre Enviar, marca Aguardar chamado e seleciona o destino. Em Suporte Externo, preenche problema e serviço, avança uma vez e para no calendário. Data, janela, revisão e conclusão ficam manuais. Para outros destinos, usa Encaminhar quando liberado; se o Revan exigir dados adicionais, a operação para no formulário.

Se a etiqueta ou o comentário não forem confirmados, o encaminhamento não começa. Se uma opção não existir para o cliente, nenhuma substituição é escolhida: o formulário original permanece para continuação manual. Encaminhamentos iniciados não são reenviados automaticamente quando sua confirmação é incerta. Não há transação única entre as etapas; etiquetas e comentários já confirmados permanecem se uma etapa seguinte falhar.

Catálogo: [texto](outputs/revan-catalogo-encaminhamento.txt) e [JSON](outputs/revan-catalogo-encaminhamento.json). Validação: testes de navegador em página simulada cobrem ausência de ações durante preenchimento, validação prévia, minimização, etiqueta/comentário, Aguardar chamado, problema/serviço, parada na data, ausência de duplicação e opção indisponível. Os formulários e a transição Serviço → Data também foram inspecionados manualmente no Revan, sem escolher data nem concluir.

Correção 4.7.1 — repetir o preparo após fechar o agendamento
O painel verifica se o formulário continua aberto antes de informar que a etapa de data já foi alcançada. Se o formulário anterior foi fechado, mantém o dashboard aberto, exibe a mensagem no início do painel e oferece Preparar novamente. Essa ação libera um novo preparo, preservando a confirmação da etiqueta e do comentário para não reenviá-los. Confira o estado do chamado no Revan antes de preparar outro. A automação continua parando na data, sem concluir agendamento.