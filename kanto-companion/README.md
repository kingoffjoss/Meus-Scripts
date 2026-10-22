# Kanto Companion — mascote 3D articulado

O mascote flutua sobre a página, com fundo transparente, sem painel aberto. Clique para conversar, use o teclado (Enter/Espaço) ou arraste para mover. A geometria WebGL é desenhada a cada quadro: cabeça, braços, pernas e cauda se movem, os olhos piscam e a chama varia. Carinho, conclusão de tarefa e lembrete acionam uma reação. O modelo procedural tem formas simples: o acabamento realista do conceito ainda não está implementado.

## Ativar sem extensão

Copie o conteúdo de favorito.txt para o campo URL de um favorito. O arquivo console.js contém a versão legível do mesmo código. Não é preciso hospedar o painel ou instalar dependências: o modelo é gerado pelo próprio código, sem carregar imagem, sprites, modelos ou bibliotecas externas.

Se já usava a URL curta que carrega console.js do GitHub, ela busca esta versão automaticamente. Clique uma vez para remover o mascote antigo e outra para abrir o novo.

O favorito precisa ser reativado depois de navegar ou recarregar. Sites e políticas do Chrome podem impedir scripts, carregamento remoto ou WebGL; o projeto não desativa essas restrições. A URL curta depende de fetch e execução de código permitidos pelo site.

## Tarefas e lembretes

Clique no personagem e depois em Pedir. Exemplos: “água a cada 30 minutos”, “água de 30 em 30 minutos”, “reunião às 21:40” ou “responder ao cliente”. Horários passados ficam para amanhã, no fuso do navegador. Concluir uma tarefa dá 25 XP.

No mascote, os dados são temporários: somem ao navegar, recarregar ou fechar. Mantenha a página aberta; suspensão da aba, sono do computador e Chrome fechado impedem alertas pontuais. Avisos abrem o balão por 12 segundos e depois recolhem quando a conversa estiver fechada.

## Painel opcional

Abra index.html no Chrome para escolher Bulbasaur, Charmander ou Squirtle e gerar um favorito com ele. O painel mantém sua própria lista de tarefas, lembretes e XP em localStorage, sem sincronizar com os mascotes das outras páginas. O painel também usa o renderizador 3D. A prancha assets/concept.png fica como referência artística, sem ser utilizada como personagem.

Ainda não há evolução visual, IA conectada, integração de calendário, execução de tarefas externas ou modelo realista texturizado. O desabafo no painel permanece uma representação cartunesca com boneco genérico.

## Arquivos e validação

renderer.js contém a geometria, iluminação e animações. console.js e favorito.txt incluem o renderizador para execução independente. Nenhum build ou npm install é necessário.

Execute: node --test core.test.cjs console.test.cjs renderer.test.cjs

Os testes cobrem horários, tarefas, interação do favorito, mudanças de pose por quadro e limpeza de recursos. Os testes do renderizador usam uma interface WebGL simulada e não substituem conferência visual nem compilação dos shaders em uma GPU real.

## Direitos

Projeto de fã sem afiliação oficial. Pokémon e personagens pertencem aos respectivos titulares. A referência artística foi criada com a ferramenta integrada de geração de imagens; o personagem atual é geometria gerada em código. Nenhuma licença sobre os personagens é concedida por este projeto.
