# Revan — Equipamentos e rede

Minidashboard flutuante para o Revan. Versão 4.5.1.

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
