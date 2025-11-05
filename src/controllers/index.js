import mensagemService from "../services/mensagemService.js"
import MensagemController from "./mensagemController.js"

export const mensagemController = new MensagemController(mensagemService);