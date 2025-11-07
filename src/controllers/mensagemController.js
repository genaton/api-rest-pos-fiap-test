import MensagemService from "../services/mensagemService.js";

/**
 * @param {MensagemService} service
 */


class MensagemController{
    constructor(service){
        this.service = service;
    }
    async registrar(req, res){
        try {
            const mensagem = await this.service.registrar(req.body);
            res.status(201).json(mensagem)
        } catch (error) {
            console.error("Erro ao registrar: ",error);
            res.status(500).json({             
                error: error.message
            })
            
        }
    }
    async buscar(req, res){
        try {
            const mensagem = await this.service.buscarPorId(req.params.id);
            return res.status(200).json(mensagem);
        } catch (error) {
            return res.status(404).json({
                code: 2001,
                error: error.message,
            })
        }
    }

    async atualizar(req, res){
        try {
            const mensagem = this.service.buscarPorId(req.params.id);
            return res.status(200).json(mensagem);
        } catch (error) {
            return res.status(400).json({
                code: 2001,
                error: error.message,
            })
        }
    }

    async eliminar(req, res){
        try {
            const mensagem = this.service.buscarPorId(req.params.id);
            return res.status(200).json(mensagem);
        } catch (error) {
            return res.status(400).json({
                code: 2001,
                error: error.message,
            })
        }
    }

}
export default MensagemController;