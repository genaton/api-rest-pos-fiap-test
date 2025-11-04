import { beforeAll, afterAll, describe, test, expect } from "@jest/globals";
import Mensagem from "../../../src/models/mensagem.js";
import sequelize from "../../../src/config/databaseFactory.js";
import { validate } from "uuid";
import { models } from "../../../src/models";

// antes da execução
beforeAll(async () => {
  Mensagem.init(sequelize);
  await sequelize.sync({ force: true });
});
//     antes do teste
// beforeEach(()=>{ })
//         teste
// test.skip("",()=>{})
//     depois do teste
// afterEach(()=>{})
// depois da execução
afterAll(async () => {
  await sequelize.close();
});

describe("modelo: mensagem", () => {
  describe("contexto: registrar", () => {
    describe("deve permitir registrar", () => {
      test("deve permitir registrar uma mensagem valida.", async () => {
        const dadosDaMensagem = {
          usuario: "usuario",
          conteudo: "olá mundo",
          gostei: 5,
        };
        const mensagem = Mensagem.build(dadosDaMensagem);
        const mensagemSalva = await mensagem.save();
        expect(mensagemSalva.id).toBeDefined();
        expect(validate(mensagemSalva.id)).toBeTruthy();
        expect(mensagemSalva.usuario).toBe(dadosDaMensagem.usuario);
        expect(mensagemSalva.conteudo).toBe(dadosDaMensagem.conteudo);
        expect(mensagemSalva.gostei).toBe(5);
      });
    });
  });
  describe("contexto: buscar", () => {
    describe("deve permitir buscar uma mensagem", () => {
      test("deve permitir buscar uma mensagem por id.", async () => {
        const msgData = {
          usuario: "usuario_00",
          conteudo: "olá mundo doido",
        };
        const mensagem = await models.mensagem.create(msgData);
        const msgEncontrada = await models.mensagem.findByPk(mensagem.id);
        expect(msgEncontrada.id).toBe(mensagem.id);
        expect(msgEncontrada.usuario).toBe(mensagem.usuario);
        expect(msgEncontrada.conteudo).toBe(mensagem.conteudo);
        
      });
    });
  });
});
