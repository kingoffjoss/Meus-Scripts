# Meu ponto

Código fornecido pelo usuário para o Meu RH da Brisanet, separado da ferramenta Revan.

## Instalação

Baixe `outputs/instalar-favorito-meu-ponto.html`, abra no navegador e arraste **◷ Meu ponto** para a barra de favoritos. O favorito carrega o código desta pasta do GitHub.

Se o navegador bloquear o carregamento remoto, baixe e abra `outputs/instalar-favorito-meu-ponto-offline.html`. Alternativa: importe `outputs/meu-ponto-favoritos.html` no gerenciador de favoritos.

O painel começa pausado e em simulação. O usuário escolhe os horários, dias e eventual ativação do modo real. O envio de clique não comprova registro: confira a confirmação no Meu RH. Os horários usam o fuso do computador. Suspensão do computador/navegador e recarga podem interromper o agendamento.

Quando o painel já existe, o favorito apenas reabre a interface, preservando seu estado. Para receber atualizações do código, recarregue a página e clique no favorito; isso pausa o agendamento anterior.

## Manutenção

O arquivo `outputs/meu-ponto.js` preserva o código enviado. Horários e registros locais não estão incluídos no repositório.

Execute `node scripts/build-meu-ponto.cjs` dentro de `Meu-Ponto` para recriar os instaladores depois de alterar o código. Requer Node.js, sem dependências externas. Publique o código e os arquivos gerados juntos.
