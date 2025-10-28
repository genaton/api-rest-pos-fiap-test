import {beforeAll, afterAll, describe, test, expect } from "@jest/globals"
import Mensagem from "../../src/models/mensagem.js";
import sequelize from "../../src/config/databaseFactory.js";
import { validate } from "uuid";

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
  describe("deve permitir registrar", () => {
    test("deve permitir registrar uma mensagem valida.", async () => {
      const dadosDaMensagem = {
        usuario: "usuario",
        conteudo: "olá mundo",
        gostei: 5
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
