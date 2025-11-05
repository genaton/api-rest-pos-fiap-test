import request from "supertest"
import {
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  describe,
  test,
  expect,
 
} from "@jest/globals";
import { models, sequelize } from "../../../src/models";
import seedMensagens from "../../../database/seeders/20251028130407-mensagens";
import app from "../../../src/server/server.js";

let dataMensagens;

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  await seedMensagens.up(sequelize.getQueryInterface(), sequelize);
  dataMensagens = await models.mensagem.findAll();
});

afterEach(async () => {
  await models.mensagem.truncate();
});

describe("controller: mensgem", () => {
    describe("contexto: registrar", () => {
        test("deve permitir registrar mensagem via requisição", async () => {
            const msgData = {
                usuario: "usario_09",
                conteudo: "olá muuuunnndo"
            }

            const response = (await request(app).post("/mensagens")).setEncoding(msgData)
            expect(response.status).toBe(201)
            expect(response.body).toMatchObject(msgData);

            
        })
    
})

})


