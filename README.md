# clone-tabnews

Projeto de aprendizado de desenvolvimento web acompanhado do [curso.dev](https://curso.dev). A implementação evolui gradualmente conforme o curso.

## Tecnologias e estrutura

- Next.js com Pages Router, React e JavaScript.
- CSS Modules para os estilos.
- PostgreSQL via Docker Compose, com `pg` e `node-pg-migrate`.
- Jest para testes de integração e Prettier para formatação.

```text
pages/              Página inicial e rotas HTTP em api/v1/
styles/             Estilos da página
public/             Imagens e arquivos públicos
infra/              Banco, Docker Compose e migrações
tests/integration/  Testes que acessam o servidor e o banco locais
.agents/skills/     Referências locais para agentes
```

## Preparar e executar

É necessário ter Node.js, npm e Docker com Compose. Inicie o Docker Desktop (ou o serviço Docker da sua plataforma) antes de executar o projeto.

Use Node.js 26: `.nvmrc` indica `26` e `engines.node` no `package.json` exige `26.x`. Essa configuração substitui a referência antiga ao Node.js 18, descontinuado no ambiente de publicação. Na Vercel, mantenha também **Settings → Build and Deployment → Node.js Version** em **26.x**. O campo `engines.node` define a versão para novos builds. A verificação local foi realizada no Windows com Node.js 26.13.0 e npm 11.20.0.

Instale as dependências fixadas no `package-lock.json`:

```sh
npm ci --no-audit --no-fund
```

O comando `npm ci` reinstala `node_modules` a partir do arquivo de versões, sem atualizar as dependências. As opções acima apenas omitem a auditoria e as mensagens de financiamento durante a instalação.

O arquivo `.env.development` contém a configuração local usada pelo projeto:

| Variável            | Finalidade                                                               |
| ------------------- | ------------------------------------------------------------------------ |
| `POSTGRES_HOST`     | Endereço do banco; localmente, `localhost`                               |
| `POSTGRES_PORT`     | Porta do banco; o Compose publica `5432`                                 |
| `POSTGRES_USER`     | Usuário local                                                            |
| `POSTGRES_PASSWORD` | Senha local                                                              |
| `POSTGRES_DB`       | Nome do banco local                                                      |
| `DATABASE_URL`      | URL usada pelo comando de migração, montada a partir das variáveis acima |

Mantenha essas configurações restritas ao desenvolvimento. Não coloque credenciais reais de serviços externos no arquivo versionado. Se alterar a configuração, confira tanto `POSTGRES_*` quanto `DATABASE_URL` antes de executar migrações ou testes.

Confira se já há um servidor usando a porta `3000` e um banco usando `5432`. No terminal do projeto:

```sh
npm run dev
```

Esse comando inicia o PostgreSQL com Docker Compose e depois o Next.js. Abra <http://localhost:3000>. Em uma primeira inicialização, aguarde o banco ficar disponível antes de executar os testes; o script inicia o contêiner, mas não espera explicitamente a prontidão do PostgreSQL.

No PowerShell, se a política de execução bloquear `npm.ps1`, use `npm.cmd` no lugar de `npm`, sem alterar a política do computador.

Para encerrar o Next.js, pressione `Ctrl+C` no terminal que o iniciou. O banco continua rodando. Para pará-lo, preservando o contêiner e seus dados:

```sh
npm run services:stop
```

## Testes e formatação

Com `npm run dev` rodando em `http://localhost:3000`, abra outro terminal:

```sh
npm test
npm run lint:check
```

**Os testes de migração apagam e recriam o schema `public`. Execute-os somente em um banco local descartável, sem dados que precisem ser preservados.** O servidor e o Jest devem apontar para o mesmo banco. A porta `3000` está definida nos testes; um servidor em outra porta não atende à configuração atual.

`lint:check` verifica formatação com Prettier; ele não é uma análise de qualidade com ESLint. A configuração aceita as terminações de linha locais, e a pasta da skill oficial é excluída para preservar seu conteúdo original.

## Versão de produção local

Encerre o servidor de desenvolvimento antes de gerar e executar a versão de produção, pois ambos usam a pasta `.next`:

```sh
npm run build
npm run start -- --port 3100
```

Abra <http://localhost:3100>. A porta alternativa permite identificar o servidor de produção. `npm start`, sem argumentos, utiliza a porta `3000`.

`build` gera a versão otimizada; `start` serve o resultado e exige um build anterior. Esses comandos não iniciam o PostgreSQL. O modo de produção não carrega `.env.development`: as APIs que usam banco precisam receber as variáveis `POSTGRES_*` no ambiente de produção. Além disso, `infra/database.js` exige SSL nesse modo e aceita o certificado em `POSTGRES_CA`. O PostgreSQL local do Compose não tem SSL configurado; a configuração local de desenvolvimento não equivale a uma configuração de produção.

Para medir desempenho, use esse modo e registre as condições de teste. As regras para comparar LCP, FCP, CLS e TTFB estão no [AGENTS.md](AGENTS.md). Medições locais não representam dados de visitantes reais.

## Outros comandos existentes

| Comando                                        | Finalidade                                                                                      |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `npm run services:up`                          | Criar/iniciar o PostgreSQL em segundo plano                                                     |
| `npm run services:stop`                        | Parar o PostgreSQL, mantendo o contêiner                                                        |
| `npm run services:down`                        | Remover os contêineres e a rede do Compose; não usar como parada cotidiana para preservar dados |
| `npm run test:watch`                           | Manter o Jest acompanhando alterações; também executa os testes destrutivos                     |
| `npm run lint:fix`                             | Reformatar os arquivos do projeto; revisar o diff antes de aceitar as mudanças                  |
| `npm run migration:create -- nome-da-migracao` | Criar um arquivo de migração                                                                    |
| `npm run migration:up`                         | Aplicar migrações usando `.env.development`                                                     |

Migrações são alterações controladas da estrutura do banco. Confira o banco de destino antes de aplicar uma migração. O Compose atual não declara um volume nomeado; não suponha que remover e recriar o contêiner recuperará os dados do volume anterior.

## Trabalho com agentes

As orientações duradouras estão no [AGENTS.md](AGENTS.md). A skill [vercel-react-best-practices](.agents/skills/vercel-react-best-practices/SKILL.md) está instalada no escopo deste repositório, a partir da [fonte oficial vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices). Leia suas instruções e aplique apenas recomendações compatíveis com o projeto e com a tarefa solicitada.

A skill oferece orientações; não instala ferramentas na aplicação. O Chrome DevTools estava disponível e foi usado nesta preparação. A disponibilidade das ferramentas de agente deve ser conferida em cada ambiente, sem copiar configurações de outro computador.

## Verificação desta preparação

- Instalação pelo lockfile, build, servidor de produção e servidor de desenvolvimento executados com sucesso.
- Três testes de integração passaram usando um PostgreSQL novo e descartável, recriado com autorização do usuário.
- `npm run migration:up` executado com sucesso.
- Página de produção conferida no Chrome em desktop (1366 × 768) e celular emulado (390 × 844), com imagens carregadas, conteúdo acessível e sem erros ou avisos no console. A rota `/api/v1/SourceIP` respondeu com HTTP 200.
- As APIs de banco foram verificadas pelos testes em desenvolvimento; não foram validadas com banco e SSL em produção.
- Não foram feitas medições de performance ou comparações de métricas nesta preparação.
- Os modos contínuos `test:watch`, a criação de nova migração e a remoção geral por `services:down` foram revisados, mas não executados.

O build emitiu um aviso de base Browserslist desatualizada. O servidor de desenvolvimento emitiu avisos do Watchpack ao observar arquivos de sistema do Windows, mas compilou e atendeu às requisições e aos testes. Esses avisos não foram corrigidos por atualização de dependências ou por configurações específicas desta máquina.
