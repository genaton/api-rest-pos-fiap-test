import { models } from "../models"
import MensagemService from "./mensagemService.js"

export const mensagemService = new MensagemService(models.mensagem);