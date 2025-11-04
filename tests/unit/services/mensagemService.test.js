import {
  beforeAll,
  afterAll,
  describe,
  afterEach,
  test,
  expect,
  jest,
  beforeEach,
} from "@jest/globals";
import MensagemService from "../../../src/services/mensagemService";
import Mensagem from "../../../src/models/mensagem";

jest.mock("../../../src/models/mensagem.js");

const mensagemService = new MensagemService(Mensagem);
const MSG_ID = "71c869f0-ce23-4da0-804f-71e735199da3";


afterEach(()=> {
    jest.clearAllMocks();
})

describe("service: mensagem", () => {
  describe("contexto: registrar", () => {
    test("deve permitir registrar mensagem", async () => {
      //AAA = ARRENGE, ACT, ASSERT
      //ARRANGE
      mockRegistrarMensagem(msgMock);
      //ACT
      const mensagemRegistrada = await mensagemService.registrar(msgData());
      //ASSERT
      expect(Mensagem.build).toHaveBeenLastCalledWith(msgData());
      expect(mensagemRegistrada).toEqual(msgMock);
    });
    test("deve lançar erro ao registrar mensagem", async() => {
        Mensagem.build.mockReturnValueOnce({

            save: jest.fn().mockRejectedValue(new Error("erro gerado pelo mock"))
        })
        await expect(mensagemService.registrar(msgData())).rejects.toThrow("erro gerado pelo mock")
    })
  });
});
//carrega os dados em memória
function msgMock() {
  return {
    id: MSG_ID,
    ...msgData,
  };
}
function msgData(){
  return {
    usuario: "usuario_00",
    conteudo: "olá mundo"
  };
}

function mockRegistrarMensagem(mensagem) {
  Mensagem.build.mockReturnValueOnce({
    ...mensagem,
    save: jest.fn().mockResolvedValue(mensagem),
    toJSON: jest.fn().mockResolvedValue(mensagem),
  });
}

