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
import { validate } from "uuid";
import seedMensagens from "../../../database/seeders/20251028130407-mensagens";

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

afterAll(async () => {
  await sequelize.close();
});
describe("model: mensagem", () => {
  describe("contexto: registrar", () => {
    test("deve permitir registrar uma mensagem", async () => {
      const msgData = {
        usuario: "usuario_00",
        conteudo: "olá mundo",
      };
      const mensagem = await models.mensagem.create(msgData);
      // console.log()
      expect(mensagem.id).toBeDefined();
      expect(validate(mensagem.id)).toBeTruthy();
      expect(mensagem.usuario).toBe(msgData.usuario);
      expect(mensagem.conteudo).toBe(msgData.conteudo);
      expect(mensagem.gostei).toBeDefined();
      expect(mensagem.gostei).toBe(0);
    });
  });

  describe("contexto: buscar", () => {
    test("deve permitir buscar uma mensagem por id", async () => {
      const msgData = dataMensagens[0];
      const msgEncontrada = await models.mensagem.findByPk(msgData.id);
      expect(msgEncontrada.id).toBe(msgData.id);
      expect(msgEncontrada.usuario).toBe(msgData.usuario);
      expect(msgEncontrada.conteudo).toBe(msgData.conteudo);
      expect(msgEncontrada.gostei).toBe(msgData.gostei);
    });
  });
  describe("contexto: remover", () => {
    test("deve permitir remover uma mensagem existente", async () => {
      const msgData = dataMensagens[1];
      await models.mensagem.destroy({ where: { id: msgData.id }, });
      const msgEncontrada = await models.mensagem.findByPk(msgData.id);
      expect(msgEncontrada).toBeNull();
    });
  });
});
