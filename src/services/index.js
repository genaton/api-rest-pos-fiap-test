import { models } from "../models/index.js"
import MensagemService from "./mensagemService.js"

export const mensagemService = new MensagemService(models.mensagem);