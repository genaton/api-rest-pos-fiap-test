import MensagemModel from "../models/mensagem.js";

class MensagemService {
  /**
   * @param {MensagemModel} model
   */

  constructor(model) {
    this.model = model;
  }

  async registrar(mensagem) {
    try {
      const novaMensagem = this.model.build(mensagem);
      await novaMensagem.save();
      return novaMensagem.toJSON();
    } catch (error) {
      throw new Error(`erro ao registrar mensagem: ${error.message}`);
    }
  }
  async buscarPorId(id) {
    console.log("Buscando mensagem com id:", id);

    try {
      const mensagem = await this.model.findByPk(id);
      console.log("Resultado da busca:", mensagem);

      if (!mensagem) {
        throw new Error("Mensagem não econtrada");
      }
      return mensagem.toJSON();
    } catch (error) {
      throw new Error(`erro ao obter a mensagem: ${id} - ${error.message}`);
    }
  }

  async listar() {
    try {
      const mensagens = await this.model.findAll();
      return mensagens;
    } catch (error) {
      throw new Error("não foi possível obter mensagens : ${error.mensagem}"); // altere as aspas por "``"
    }
  }
  async atualizar(id, atualizaMensagem) {
    try {
      const mensagem = await this.model.findByPk(id);
      if (!mensagem) {
        throw new Error(`Mensagem com ID ${id} não encontrada.`);
      }

      await mensagem.update(atualizaMensagem);
      return mensagem.toJSON();
    } catch (error) {
      throw new Error(`erro ao alterar mensagem: ${error.message}`);
    }
  }
  async deletar(id) {
    try {
      const mensagem = await this.model.findByPk(id);
      if (!mensagem) {
        throw new Error(`Mensagem com ID ${id} não encontrada.`);
      }

      await mensagem.destroy();
      return { mensagem: "Mensagem deletada com sucesso" };
    } catch (error) {
      throw new Error(`erro ao deletar mensagem: ${error.message}`);
    }
  }
}

export default MensagemService;
