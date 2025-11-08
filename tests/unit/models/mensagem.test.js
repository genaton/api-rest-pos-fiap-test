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
afterEach(async () => {
  await models.mensagem.truncate();
});
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
      test("deve retornar null ao buscar uma mensagem com ID inexistente", async () => {
        const msgEncontrada = await models.mensagem.findByPk(9999);
        expect(msgEncontrada).toBeNull();
      });
    });
  });
  describe("contexto: listar, ", () => {
    test("deve permitir listar todas as mensagens", async () => {
      const msgData = {
        usuario: "usuario_00",
        conteudo: "olá mundo doido",
      };
      await Mensagem.create(msgData);
      await Mensagem.create(msgData);
      const msgEncontradas = await Mensagem.findAll();
      expect(msgEncontradas.length).toBe(2);
    }, 15000);
    test("deve permitir listar todas as mensagems mesm que não exista", async () => {
      const msgEncontradas = await Mensagem.findAll();
      expect(msgEncontradas.length).toBe(0);
    });
  });
  describe("contexto: remover", () => {
    test("deve permitir remover uma mensagem existente", async () => {
      const msgData = {
        usuario: "usuario_00",
        conteudo: "olá mundo doido",
      };
    });
  });
  describe("contexto: remover", () => {
    test("deve permitir remover uma mensagem existente", async () => {
      const mensagemData = {
        usuario: "usuario_00",
        conteudo: "Olá, mundo!",
      };

      const mensagem = await Mensagem.create(mensagemData);
      await Mensagem.destroy({ where: { id: mensagem.id } });

      const mensagemEncontrada = await Mensagem.findByPk(mensagem.id);
      expect(mensagemEncontrada).toBeNull();
    });
  });
});
