import {
  beforeAll,
  afterAll,
  describe,
  test,
  expect,
  afterEach,
} from "@jest/globals";
import { models, sequelize } from "../../../src/models";
import { validate } from "uuid";

beforeAll(async () => {
  await sequelize.sync({ force: true });
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
});
