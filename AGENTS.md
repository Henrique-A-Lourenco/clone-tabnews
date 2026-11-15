# Orientações para agentes

## Contexto e aprendizado

- Este é um projeto de aprendizado acompanhado do curso.dev. A evolução deve ser gradual e respeitar o ritmo do curso.
- Comunique-se em português, com explicações claras para quem está aprendendo. Explique o propósito das mudanças e os conceitos necessários; evite jargão sem explicação.
- Prefira soluções simples e mudanças pequenas, fáceis de acompanhar e revisar.
- Respeite o escopo solicitado. Não antecipe funcionalidades, crie abstrações ou adicione dependências sem necessidade. Apresente mudanças maiores como sugestões, explicando propósito e impacto, antes de implementá-las.
- Não atualize dependências, migre a arquitetura ou reformule a interface apenas para modernizar o projeto.

## Antes de alterar

- Consulte o README, os scripts, as dependências, o código e a documentação pertinente. Identifique as tecnologias e sua compatibilidade antes de escolher configurações ou skills.
- Confira o estado e as diferenças do Git. Preserve alterações existentes, inclusive as que não estejam relacionadas à tarefa. Não descarte trabalho do usuário.
- O projeto utiliza Next.js com Pages Router (`pages/`), React, JavaScript, CSS Modules, PostgreSQL via Docker Compose e testes de integração com Jest. Confirme essa estrutura no código antes de aplicar recomendações.
- Consulte a skill local [vercel-react-best-practices](.agents/skills/vercel-react-best-practices/SKILL.md), originária de `vercel-labs/agent-skills`, quando a tarefa envolver React/Next.js. Leia as regras pertinentes antes de aplicá-las. Adapte as recomendações à arquitetura e às APIs realmente disponíveis; a skill não autoriza ampliar o escopo ou instalar dependências.
- Confira quais ferramentas estão disponíveis e funcionam na sessão. Não afirme que navegador, banco, integração ou publicação estão configurados sem verificar. Informe limitações reais.
- Não copie configurações específicas de outro computador, como endereços IP, caminhos absolutos ou credenciais. Use configurações locais apropriadas e não exponha segredos.

## Execução e verificação

- Verifique cada mudança proporcionalmente ao impacto. Informe o que foi testado, os resultados e as limitações; não trate uma verificação parcial como sucesso completo.
- Use os comandos existentes e mantenha o README coerente com o que foi verificado. Diferencie comandos executados de instruções ainda não validadas.
- Antes de iniciar servidores, confira portas e instâncias existentes. Evite duplicações e conflitos entre desenvolvimento e produção, que usam a pasta `.next`. Ao terminar, informe quais processos e serviços deixou rodando.
- Os testes de migração recriam o schema `public`. Antes de executá-los, confirme que o banco de destino é local, descartável e exclusivo para testes. Nunca execute esses testes contra dados que precisem ser preservados.
- Em mudanças visuais, confira desktop e celular quando houver ferramenta de navegador disponível. Verifique o acesso ao conteúdo, inclusive por rolagem, e não bloqueie a rolagem necessária.
- Para medir performance, use a versão de produção. Registre rota, comandos, ambiente, navegador, tamanho da tela, condições de rede/CPU, cache, quantidade de execuções e método de agregação. Compare sob condições equivalentes.
- Diferencie medições locais de laboratório de dados de visitantes reais. Não invente valores anteriores nem classifique ausência de medição como estabilidade.

## Comparações de resultados

- Use 🟢 melhora, 🔴 piora e ⚪ estabilidade, sempre acompanhados de texto. Considere o significado da métrica: diminuir o tempo de carregamento é uma melhora.
- Mostre valores anteriores, atuais e variações com sinais `+` ou `-`, unidades e, quando útil, porcentagens. Use `0` para ausência de variação e `não medido` quando não houver dados. Não calcule variação percentual com base zero.
- Em comparações de performance, apresente LCP (tempo até o maior conteúdo visível), FCP (tempo até o primeiro conteúdo), CLS (mudanças inesperadas de layout) e TTFB (tempo até o primeiro byte) em uma tabela com colunas: métrica, anterior, atual, variação e avaliação.
- Para essas métricas, valores menores são melhores. Considere a variabilidade das execuções antes de declarar melhora ou piora; explique a tolerância usada para estabilidade.

## Manutenção destas orientações

- Mantenha neste arquivo apenas contexto e orientações duradouras. Não registre progresso das aulas, tarefas pendentes, versões ou resultados específicos de uma sessão.
- Faça commit, push ou publicação somente quando solicitado pelo usuário.
