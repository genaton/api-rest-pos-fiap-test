Bibliotecas:

npm i -D jest

npm i sequelize

npm i -D sequelize-cli

npm i -D @babel/core
npm i -D sqlite3
npm i -D dotenv 
npm i -D uuid@9
npm i pg
npm i express
npm i supertest 
npm i -D nyc (para ter métricas mais precisas do que realmente foi coberto no código pelos testes)
npm i -D istanbul-merge (para criar um relatório único da cobertura feita pelos testes)

comando: 
docker compose up -d db
comando npx sequelize (permite interargir via terminal com a biblioteca sequelize)
npx sequelize db:create (para criar nova base )
npx sequelize db:drop (caso a base já esteja criada rode este comando, e rode o create novamente)
npm run db:migrate (para criar a base no postgress)
npm run db:seed (para popular a tabela )
npm run db:seed:undo (rollback na tabela )
npm run test  ("jest tests/unit",)
npm run test:integration (   "test:integration": "jest tests/integration")
npm run test:system (   "test:system": "jest tests/system")
npm run coverage:combine (combina o relatório de todos os testes)
npm run coverage:export (renderiza o relatório de todos os testes em um html)

extensões:
jest 
jest runner
code metrics (sinaliza se os métodos estão muito complexos, com mais de 5 attributos ou passagens. )

## requisitos

### Mensagem 

Requisito Funcional:

-- Deve permitir registra, buscar, alterar mensagens publicadas pelo usuário

Reguisito Tecnico:

Modelo Mensagem:

- id - UUID
- usuario - string(7, 25),  eh obrigatorio
- conteudo - string(1, 150), eh obrigatorio
- gostei - integer