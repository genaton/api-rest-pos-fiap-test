import { mensagemService } from "../services/index.js"
import MensagemController from "./mensagemController.js"

export const mensagemController = new MensagemController(mensagemService);
console.log("Métodos disponíveis no serviço:", Object.keys(mensagemService));