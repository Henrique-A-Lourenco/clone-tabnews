# Verificação da página inicial

Comparação local de 15/11/2026 entre a página original (commit `3234c21`) e a revisão que mantém fundo azul-escuro, meme animado e conteúdo centralizado.

## Condições

- Windows, Node.js 26.13.0, Chrome 157.
- Produção: `npm run build` seguido de `npm run start -- --port 3100`, rota `http://localhost:3100/`.
- Celular emulado: 390 × 844, DPR 1, CPU com redução de velocidade de 4×, rede Fast 4G do Chrome DevTools.
- Três recarregamentos por versão com cache HTTP ignorado; servidor local já iniciado. O estado do processo e caches internos do sistema não são equivalentes a uma máquina completamente fria.
- Dados coletados pelas APIs PerformanceObserver e PerformanceNavigationTiming. LCP: última entrada observada; CLS: maior janela de mudanças sem interação. Resultados agregados pela mediana.
- Na versão final, aguardou-se mais 500 ms depois do carregamento para entregar as entradas dos observadores. A animação final carrega todos os quadros antes da leitura. As entradas originais já estavam presentes nas três leituras.
- Estabilidade: diferença de tempo abaixo do maior valor entre 50 ms e 10% da mediana anterior. Para CLS, igualdade das leituras. Esta é uma tolerância prática, não uma conclusão estatística.
- São medições de laboratório locais, sem CDN, tráfego real ou validação das APIs de banco em produção.

## Resultados

| Métrica                       | Anterior        | Atual         | Variação                  | Avaliação                            |
| ----------------------------- | --------------- | ------------- | ------------------------- | ------------------------------------ |
| LCP                           | 5.876 ms        | 1.264 ms      | -4.612 ms (-78,5%)        | 🟢 melhora                           |
| FCP                           | 492 ms          | 480 ms        | -12 ms                    | ⚪ estabilidade dentro da tolerância |
| CLS                           | 0               | 0             | 0                         | ⚪ estabilidade                      |
| TTFB                          | 167,5 ms        | 167,7 ms      | +0,2 ms                   | ⚪ estabilidade dentro da tolerância |
| Transferência total observada | 5.210.441 bytes | 768.574 bytes | -4.441.867 bytes (-85,2%) | 🟢 melhora                           |
| Arquivo da animação           | 5.120.904 bytes | 678.582 bytes | -4.442.322 bytes (-86,7%) | 🟢 melhora                           |

Leituras individuais, na ordem das execuções:

| Versão   | LCP (ms)           | FCP (ms)        | CLS       | TTFB (ms)             | Transferência total (bytes) |
| -------- | ------------------ | --------------- | --------- | --------------------- | --------------------------- |
| Original | 5876 / 5832 / 5984 | 492 / 500 / 484 | 0 / 0 / 0 | 167,5 / 167,8 / 166,9 | 5210441 / 5210441 / 5210441 |
| Atual    | 1264 / 1256 / 1296 | 680 / 440 / 480 | 0 / 0 / 0 | 170 / 167,6 / 167,7   | 694100 / 768574 / 768574    |

A transferência da primeira execução atual foi menor por diferenças de cache/contabilização de recursos. O tamanho físico da animação foi confirmado no sistema de arquivos; a redução principal independe dessa diferença.

## Mudanças e verificações

- GIF convertido para WebP animado com qualidade 72, preservando 76 quadros, resolução 480 × 371 e duração de 2.860 ms. A compressão é com perda; o GIF original foi preservado.
- Dimensões explícitas da imagem reservam espaço antes de carregar. A imagem principal recebe prioridade alta de carregamento.
- Pequenos ajustes de espaçamento, contraste, tipografia, foco por teclado e descrição da imagem. Um título principal e um subtítulo preservam a hierarquia do conteúdo.
- Build, Prettier e conferência do diff aprovados. Nenhuma dependência do aplicativo foi adicionada ou atualizada.
- Inspeção visual em 1366 × 768 e 390 × 844. Conferência adicional em 320 × 568: sem transbordamento horizontal e com rolagem até o link.
- Nenhum erro ou aviso no console da página. Os testes de integração do banco não foram repetidos, pois os endpoints e o banco não foram alterados.
