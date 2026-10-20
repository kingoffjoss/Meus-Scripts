# Meu Ponto

Painel flutuante glass para o Meu RH da Brisanet, carregado por um favorito fixo.

## Instalar

Abra instalar.html e arraste o botão para a barra de favoritos, ou copie favorito.txt inteiro para o endereço de um favorito chamado **✦ Meu Ponto ↗**. Desative o userscript anterior.

## Atualizações

O favorito carrega painel.js da branch main deste repositório a cada abertura em uma página sem painel. A URL do favorito permanece igual quando painel.js muda. Recarregue a página e clique no favorito para carregar uma nova versão; painéis em execução não são substituídos. Pode haver atraso de propagação do GitHub.

## Uso

Começa pausado e em simulação. Testar em 1 minuto registra o disparo e procura o controle sem clicar nele. Selecione dias e horários locais; para o modo real, desmarque Simulação e ative o agendamento. Uma tentativa por horário/dia, sem confirmação automática de diálogos. Confira as batidas no próprio Meu RH.

O navegador deve ficar aberto, com uma única aba ativa, e o computador acordado. Trocar de guia não pausa o agendamento. Se o navegador suspender a execução e o horário ultrapassar a janela de 10 segundos após o disparo previsto, essa batida não é compensada; o agendamento permanece ativo para os próximos horários. O clique neutro opcional a cada cinco minutos não garante evitar logout pelo servidor.

## Privacidade e limitações

Somente código e instruções são publicados. Horários e histórico ficam no armazenamento local do navegador. O carregador busca código público do GitHub sem cookies nem cabeçalho Referer; não envia dados do Meu RH. O navegador precisa permitir bookmarklets, acesso ao domínio raw.githubusercontent.com e execução do código recebido. Não há tentativa de contornar políticas de segurança.

O teste de um minuto passou no Meu RH sem bater ponto. Em um teste real da versão corrigida, o script enviou o duplo clique automaticamente e a plataforma exibiu uma marcação. Houve diferença de um minuto entre o horário local do disparo e o horário exibido no registro; a causa não foi determinada. Não repetir a tentativa automaticamente quando o resultado estiver incerto. A lógica passou em 14 verificações locais. Isso valida esse teste específico, sem garantir execução após suspensão, logout ou bloqueio do navegador.

## Falha no download

O favorito inclui uma cópia do painel como alternativa. Se o download ou a execução da atualização falhar, ele abre essa cópia e indica que a atualização online está indisponível. Nesse caso a versão incluída não se atualiza até o acesso ao GitHub voltar ou o favorito ser substituído. Não altera políticas de segurança do navegador.