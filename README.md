# Bibliotecas:
## TDD

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
## BDD
npm i -D @cucumber/cucumber @babel/register
## work flow
npm i -D allure-jest allure-commandline

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
npm run test:bdd (altere dryRun para true em cucumber.cjs para copiar e colar os passos em mensagme.step.json.)
npx allure serve (para ver o relatório de teste da aplicação)

extensões:
jest 
jest runner
code metrics (sinaliza se os métodos estão muito complexos, com mais de 5 attributos ou passagens. )

### Atenção
Testes de integração e bdd com cucumber devem ser feitos com a aplicação rodando e com o banco de dados no ar. 

Nas aulas foi sugerido a implementação de análise de código pelo sonarQube e, alternativamente sonarCloud que é uma ferramenta que analise a qualiade do código... se há código duplicado, bibliotecas ou códigos vulneráveis, a cobertura dos testes no código. 
Há uma versão para download que é gratuita mas a que foi usada na aula foi a versão gratuita disponível em nuvem.

https://www.sonarsource.com/products/sonarqube/
https://sonarcloud.io/login

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