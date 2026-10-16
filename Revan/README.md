# Revan — Equipamentos e rede

Minidashboard flutuante para o Revan. Versão 4.12.0.

## Instalar o favorito

Baixe [instalar-favorito-revan.html](outputs/instalar-favorito-revan.html), abra o arquivo no Chrome ou Edge e arraste o botão para a barra de favoritos. Use Ctrl + Shift + B para exibir a barra. Abra um atendimento no Revan e clique no favorito.

Alternativa: baixe e importe [revan-favoritos.html](outputs/revan-favoritos.html) no gerenciador de favoritos. Para Tampermonkey, use [revan-minidashboard.user.js](outputs/revan-minidashboard.user.js).

Os arquivos HTML precisam ser baixados e abertos no navegador; a visualização de código do GitHub não executa o instalador.

## Fila de chamados

Na página Meus chamados, abra o painel, carregue a lista e marque os atendimentos. Abrir selecionados inicia um por vez usando o botão nativo do Revan, na mesma aba. Após o encerramento confirmado, o próximo selecionado é aberto. Sair do chamado sem confirmação pausa a fila. Pausar e Parar fila não encerram atendimentos. Estados sem Iniciar ficam indisponíveis. A fila permanece apenas na memória desta aba; recarregar a página interrompe o acompanhamento. Os filtros nativos continuam valendo.

O painel substitui a leitura anterior pela lista nativa atual, sem manter itens removidos como abertos. Os quadros Abertos, Pendentes e Fechados filtram a listagem. Fechados registra encerramentos confirmados nesta sessão; sair dos filtros ou da lista não é confirmação. Ao atualizar de uma versão antiga, o total anterior é preservado com aviso quando os detalhes não estiverem disponíveis.

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
Correção 4.7.2 — catálogo e busca do Suporte Externo
Pesquisa nativa de A a Z em cliente Fibra ampliou o catálogo de 15 para 61 problemas observados, incluindo Configuração Estruturada de Rede Interna (serviço adicional). Isso não garante totalidade: a disponibilidade varia e a pesquisa nativa pode limitar resultados.
A pesquisa do dashboard agora apresenta botões com os resultados locais, ignora acentos/maiúsculas e mostra uma mensagem quando nada foi encontrado. Escolher um resultado define o problema e sugere o tipo de reparo. O texto pesquisado é mantido ao atualizar a aba. Digitar não abre telas do Revan.
Ao Anexar, a automação pesquisa no campo nativo de problemas antes de selecionar, aguardando o debounce do Revan e removendo apenas o sufixo visual do tipo de reparo do termo pesquisado. Se o nome não estiver no catálogo local, é possível digitá-lo e consultar ao Anexar. Somente uma correspondência exata ou única é aplicada. Vários resultados interrompem a automação para escolha no formulário original. O calendário e a conclusão permanecem manuais.
Validação: consulta real de A a Z e confirmação nativa de Estruturada/Serviço Adicional; teste de navegador simulado cobre filtro local de A a Z, Estruturada ausente da lista nativa inicial, busca com debounce de 1 segundo e problema novo ausente do catálogo local, além de recuperação do preparo e prevenção de duplicação.
Mensagem de agendamento — versão 4.8.0
Após o usuário clicar no Confirmar final da etapa Revisão, o painel captura a data e a janela dos campos nativos de revisão. Somente depois da notificação de agendamento/reagendamento realizado com sucesso e do fechamento do formulário gera a mensagem. O Confirmar intermediário de escolha da janela não dispara a mensagem. Fechamento sem confirmação de sucesso não é tratado como agendamento confirmado.
A mensagem apresenta dia, período e horas da janela escolhida, seguidos de: O horário de atendimento da empresa é das 08:00 às 18:00. Fica na aba Etiquetar, com botão Copiar mensagem de agendamento. O painel não envia a mensagem ao cliente e não clica nem marca confirmações em nome do usuário. A mensagem e o acompanhamento ficam apenas na memória da página e são limpos ao trocar o atendimento.
Validação: campos da revisão inspecionados no Revan sem confirmar; teste simulado cobre clique intermediário, falha, confirmação final com sucesso, manhã/tarde, cópia e troca de atendimento. A confirmação final real não foi executada.
Abertura externa independente e cópia automática — versão 4.8.1
Na aba Etiquetar, Abrir chamado externo não exige etiqueta nem observação: ambos podem ficar vazios. A opção Somente abrir externo ignora esses campos mesmo quando contêm rascunhos de uso anterior. Essa opção não aplica etiqueta nem publica comentário no interno; o encaminhamento continua pelos controles originais Enviar/Aguardar chamado. Não há ação adicional de encerrar o atendimento interno.
Ao marcar a caixa O cliente está ciente e confirma o agendamento na revisão final, o painel lê o dia e a janela e tenta copiar automaticamente a mensagem para a área de transferência. Basta Ctrl+V no destino desejado. A prévia usa está previsto e permanece pendente de confirmação, sem clicar em Confirmar. Após confirmação final manual e sucesso do Revan, o painel gera a versão confirmada na aba Etiquetar. O horário geral informado é 08:00 às 18:00. O painel não envia mensagem ao cliente.
Se o navegador bloquear o acesso à área de transferência, um aviso aparece na revisão e a mensagem fica disponível na aba Etiquetar com botão de cópia manual.
Validação simulada: externo com campos vazios; modo somente externo com etiqueta e observação preenchidas sem gravá-las; cópia ao marcar a caixa antes de Confirmar, texto de prévia, dados de manhã/tarde e cópia manual após confirmação simulada. Nenhuma confirmação final real foi executada.
Rascunho de rede e execução separada — versão 4.12.0
Editar abre temporariamente a edição nativa apenas para ler as opções disponíveis e a cancela automaticamente, sem alterar campos nem salvar. A partir daí, SSID, unificação, visibilidade, UPnP, energia, modo, largura, canal, geração de senha Wi-Fi e restauração de SSID são escolhas locais do dashboard. Salvar mostra a revisão; Confirmar salvar minimiza o painel, reabre a edição original, aplica as escolhas e aciona Salvar uma vez. Cancelar descarta o rascunho local.
As opções são verificadas novamente durante a aplicação porque modo, largura e canal podem ter dependências específicas do equipamento. Combinação indisponível cancela a edição nativa sem salvar. Mudanças externas nas configurações bloqueiam a aplicação. Se uma geração de senha/comando ou um salvamento já foi enviado e não foi confirmado, o painel não tenta novamente automaticamente. A otimização de canal e o controle de energia podem ter confirmação própria no Revan e são executados somente depois da aplicação final, quando solicitados. As etapas não são uma transação única.
Ativações, reconfiguração e outras ações de alteração exibidas no dispositivo agora são primeiro selecionadas localmente e só abrem o fluxo nativo após Executar ação. Cancelar seleção não envia comando. Consultas de sinal, spliter e gerência continuam disponíveis como consultas.
Autenticação: Gerar nova senha e Novo e-mail/login também têm seleção e execução separadas. A senha PPPoE depende da confirmação original do Revan: o dashboard agora diferencia espera, falha e retorno de Senha gerada; captura a senha retornada na memória da página para cópia. A criação de login usa o ícone + que contém o evento nativo. Nenhuma API privada é utilizada.
O favorito e o próprio script impedem substituir o widget enquanto existe rascunho local ou ação selecionada. Salve ou cancele antes de atualizar.
Validação: testes simulados com dados fictícios cobrem rascunho sem mudanças nativas, seis seletores, SSID, switches, energia, geração/restauração adiadas, cancelamento local, revisão sem aplicação, aplicação final única, comandos selecionados, confirmação PPPoE manual, captura de senha fictícia e clique de criar login; combinação inválida, mudança externa, salvamento sem resposta e bloqueio de reenvio. Regressões de Etiquetar, chamado externo, mensagem de agendamento e favorito online também verificadas. No Revan real só houve inspeção da interface e navegação para a aba Rede: nenhuma configuração, ativação, reconfiguração nem geração de senha foi executada.


