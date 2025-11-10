import request from "supertest";
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

describe("controller: mensagem", () => {
  describe("contexto: registrar", () => {
    test("deve permitir registrar mensagem via requisição", async () => {
      const msgData = {
        usuario: "usario_00",
        conteudo: "olá mundo",
      };

      const response = await request(app).post("/mensagens").send(msgData);
      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(msgData);
    }, 15000);
  });
  describe("contexto: buscar", () => {
    test("deve permitir buscar mensagem via requisição por id", async () => {
      const mensagens = await models.mensagem.findAll();
      const msgData = mensagens[0].toJSON();
      const expected = {
        id: msgData.id,
        usuario: msgData.usuario,
        conteudo: msgData.conteudo,
        gostei: msgData.gostei,
        createdAt: msgData.createdAt.toISOString(),
        updatedAt: msgData.updatedAt.toISOString(),
      };

      const response = await request(app).get(`/mensagens/${msgData.id}`);
      expect(response.status).toBe(200);
      expect(response.body).toMatchObject(expected);
    }, 15000);
    test("deve permitir alterar mensagem via requisição por id", async () => {
      const mensagens = await models.mensagem.findAll();
      const msgData = mensagens[0].toJSON();
      const atualizaMensagem = {
        usuario: msgData.usuario,
        conteudo: "Conteúdo atualizado pelo teste",
        gostei: msgData.gostei + 1,
      };
      const response = await request(app)
        .put(`/mensagens/${msgData.id}`)
        .send(atualizaMensagem);
      expect(response.status).toBe(200);
      expect(response.body.dados).toMatchObject(atualizaMensagem);
    }, 15000);
  });
});
