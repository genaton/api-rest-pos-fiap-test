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
    try {
      const mensagem = this.model.findByPk(id);
      if (!mensagem) {
        throw new Error("Mensagem não econtrada");
      }
      return mensagem.toJSON();
    } catch (error) {
      throw new Error(`erro ao obter a mensagem: ${id} - ${error.mensagem}`);
    }
  }
}

export default MensagemService;
