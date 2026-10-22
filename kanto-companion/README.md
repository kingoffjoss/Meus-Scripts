# Companheiro flutuante — água, terra e ar (v0.4)

Três modelos gratuitos de Quaternius, com licença CC0 confirmada nas páginas dos arquivos:

| Mascote | Elemento | Animações distintas |
| --- | --- | --- |
| Squidle, monstrinho com tentáculos | Água | 8 |
| Alpaca | Terra | 13 |
| Dragão voador | Ar | 8 |

A alpaca contém 26 clips no arquivo, mas metade são duplicatas com prefixo: são 13 movimentos distintos. O golfinho tinha somente um clip; foi substituído pelo Squidle para priorizar variedade. Os modelos não têm aparência realista: são personagens low poly feitos por um artista, com esqueletos e animações prontas.

## Favorito no Chrome

Copie o conteúdo de favorito.txt para o campo URL de um favorito chamado Meu Mascote. Clique nesse favorito em uma página comum. A versão 0.4 substitui o bonequinho anterior automaticamente. Favoritos que apontam para um commit antigo precisam ter a URL atualizada.

O favorito carrega console.js do GitHub; a biblioteca e os três modelos já estão embutidos nesse arquivo, sem CDN adicional ou requisição de imagens/modelos. Depois do carregamento, clique no personagem para abrir os controles. Arraste para mover, use o seletor para trocar de animal ou escolha um movimento no menu Testar animação. Carinho e tarefas concluídas acionam uma reação. Comida reproduz Eating na alpaca e um gesto de aprovação nos outros personagens, que não possuem clip de alimentação.

A alpaca alterna descanso, caminhada, corrida, alimentação, salto e observação. O Squidle e o dragão alternam flutuação/voo e gestos. Movimentos de deslocamento também levam o mascote ao longo da página. Ao abrir a conversa, o passeio pausa. A preferência de reduzir movimentos do sistema desativa as animações.

## Lembretes e tarefas

Clique em Pedir e escreva, por exemplo: água a cada 30 minutos, água de 30 em 30 minutos, reunião às 21:40 ou responder ao cliente. Concluir uma tarefa rende 25 XP. Dados do mascote são temporários: somem ao recarregar, navegar ou fechar. O painel opcional index.html salva seus próprios dados em localStorage e permite gerar um favorito com o animal escolhido, sem sincronizar com mascotes de outros sites.

Reative o favorito em cada nova página. Sites e políticas do Chrome podem bloquear fetch, execução de scripts ou WebGL2. O projeto não contorna essas políticas. Abas suspensas, computador dormindo ou Chrome fechado impedem alertas pontuais. Não há evolução visual, IA conectada, agenda ou execução de tarefas externas.

## Desenvolvimento

O pacote pronto abre pelo index.html, sem instalar dependências. Para alterar o código-fonte, use npm install, npm run build e npm test. Three.js e esbuild-wasm estão fixados no package.json. O build inclui automaticamente os GLBs em console.js. src/widget.js implementa o mascote e seus controles; src/animal-renderer.js carrega os modelos, reproduz os clips e administra os comportamentos automáticos. Os arquivos GLB e sua origem ficam em assets/animals.

Os testes usam o carregador GLTF real e verificam que os ossos mudam de pose ao reproduzir animações. Também validam contagens distintas, hashes dos arquivos e lembretes. Isso não substitui uma conferência visual da renderização na GPU do Chrome.

## Créditos

Modelos de Quaternius, CC0 1.0. Páginas, URLs dos downloads e hashes em assets/animals/PROVENANCE.json. O download original no Google Drive estava com cota excedida; foram utilizados os arquivos publicados pelo próprio autor no Poly Pizza. Three.js usa licença MIT, incluída em THREE-LICENSE.txt. A imagem antiga de Pokémon fica somente como referência histórica; não é carregada no mascote atual.
