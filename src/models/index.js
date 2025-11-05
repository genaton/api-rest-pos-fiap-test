import Mensagem from "./mensagem.js"
import sequelize from "../config/databaseFactory.js"

const models = {
    mensagem: Mensagem.init(sequelize),
};

export { sequelize, models}