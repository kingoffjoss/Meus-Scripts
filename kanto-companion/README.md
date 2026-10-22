# Kanto Companion — protótipo

Companheiro Pokémon para Chrome, sem dependências de instalação. Abra `index.html` para usar o painel. Visual com aparência 3D realista, feito com imagem e movimentos CSS; não contém modelos 3D articulados.

## Usar

1. Abra `index.html` no Chrome e escolha um Pokémon.
2. Digite “me lembra de beber água a cada 30 minutos”, “tenho reunião às 21:40” ou uma tarefa. Horários já passados são marcados para o dia seguinte, no fuso do navegador.
3. Ative notificações se desejar e mantenha **uma única aba do painel aberta**. Abas suspensas, computador dormindo e navegador fechado impedem pontualidade. Ao voltar, lembretes vencidos são recuperados uma vez, sem uma avalanche de intervalos perdidos.
4. Conclua tarefas para ganhar 25 XP. Cada 100 XP aumenta o nível. Carinho e comida são interações, sem XP infinito por clique.

## Usar agora, sem hospedar o painel

Copie o conteúdo de `favorito.txt` e cole no campo URL de um favorito chamado “Meu Pokémon”. Clique em uma página comum. O mascote permite carinho, tarefas e lembretes temporários pelo botão “Pedir”. O botão “Arquivos” abre este repositório. `console.js` contém a mesma versão em JavaScript legível, para revisão e execução manual no console quando permitido. A arte vem do arquivo público deste repositório.

As tarefas, XP e lembretes desse mascote temporário duram apenas até recarregar, navegar ou fechar o mascote. São independentes dos dados persistentes do painel. Não é preciso instalar extensão. A versão inicial do favorito usa Charmander; o painel permite gerar favoritos com os outros personagens.

## Favorito / bookmarklet a partir do painel

Hospede esta pasta completa por HTTPS (por exemplo, GitHub Pages). Abra o painel hospedado e arraste “Meu Pokémon” para a barra de favoritos do Chrome. Também é possível copiar o código e colar no campo URL de um favorito. Clique nesse favorito numa página para mostrar o mascote, arraste o balão para movê-lo, e use × para fechar. Clique de novo no favorito para alternar a presença dele.

O favorito guarda a escolha de Pokémon no momento da instalação. Reinstale se mudar de personagem. Após navegar ou recarregar é necessário ativar novamente. Sites, páginas internas do Chrome e políticas corporativas podem bloquear execução ou imagens. Esta ferramenta não desativa nem contorna políticas. O mascote não lê o conteúdo da página nem envia tarefas para servidores.

O painel usa localStorage no próprio endereço: dados de uma abertura local não migram automaticamente para o site hospedado. Em páginas de outros sites o mascote oferece companhia, carinho, tarefas e lembretes temporários. Lembretes e tarefas **não sincronizam com o painel**. Os lembretes criados pelo botão “Pedir” aparecem no balão da página enquanto ela permanecer aberta. Notificações do sistema dependem de permissão e contexto compatível.

## Estado desta versão

- Escolha de três personagens; respiração, comemoração e desabafo cartunesco com boneco genérico.
- Tarefas, exclusão, conclusão única, XP, nível e armazenamento local.
- Parser local de comandos, intervalos e horários; não é um chatbot com IA.
- Ainda sem evolução visual, rig 3D, execução externa de tarefas, integração de agenda ou alertas com Chrome fechado.
- Fonte web opcional do Google Fonts; fontes do sistema funcionam offline.

## Publicar no GitHub Pages

Pasta sugerida no repositório: `kanto-companion/`. Preserve os outros scripts do repositório. Se Pages publicar a raiz da branch principal, o endereço será `https://kingoffjoss.github.io/Meus-Scripts/kanto-companion/`. Esse endereço só funciona depois que Pages estiver habilitado e a publicação terminar.

## Validação

Execute `node --test core.test.cjs console.test.cjs` e `node --check app.js`. Sem build, sem npm install.

## Arte e direitos

Arte do rascunho aprovada nesta conversa, criada com a ferramenta integrada de geração de imagens. O protótipo exibe regiões da prancha usando CSS; os personagens ainda não são recortes transparentes individuais. Prompt original: comparação dos três iniciais de Kanto em 3D realista e 3D fofo, com exemplos de mascote no navegador e balão “Hora de beber água!”. A prancha original está em `assets/concept.png`.

Projeto de fã sem afiliação oficial. Pokémon e personagens pertencem aos respectivos titulares. Nenhuma licença sobre esses personagens é concedida por este projeto.

