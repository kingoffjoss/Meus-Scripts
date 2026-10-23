# Pingo Mundo · 1.0

Jogo web original de bichinho virtual com o Pingo 3D.

Abra https://kingoffjoss.github.io/Meus-Scripts/gotinha/world/

- Quatro ambientes: jardim, cozinha, banheiro e quarto.
- Fome, sede, limpeza, energia e alegria; sujeira visível, espuma, sono e carinho.
- Seis alimentos, estoque, oito roupas e acessórios 3D, dezesseis cores e quatro cenários.
- Quatro minijogos: Caça-bolhas, Memória do jardim, Pingo pula e Jardim musical.
- Moedas virtuais, experiência, níveis, recordes, presente diário, missões e conquistas.
- Progresso local, exportação/importação de backup e cache offline após primeiro carregamento.

No celular, use no navegador ou adicione à tela inicial. Este jogo não sobrepõe outros aplicativos. O progresso fica neste navegador/dispositivo; use Configurações → Exportar backup para transferir. Ao retornar, necessidades são atualizadas por até oito horas; o Pingo não morre. Não há pagamentos reais nem necessidade de chave de IA. A conversa com IA abre separadamente a versão companheiro.

## Desenvolvimento

Fontes em `src/play/`. Reaproveita o personagem e as poses originais de `src/pet.js` e `src/motion-player.js`.

Compilar: `node build.cjs --world`
Testar: `node tests/world.test.mjs`

Servir a pasta gotinha por HTTP e acessar `/world/`. O service worker tem escopo próprio, independente da versão companheiro.

Validação: testes de cuidados, economia, missões, roupas, backup, sono offline, memória e colisões; conferência visual e interações no navegador. O desenho responsivo foi conferido em prévia de celular, sem alegar teste em aparelho físico.
