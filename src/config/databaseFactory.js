
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

class DatabaseFactory {
    constructor() {
        this.sequelize = null;
    }
    _initializeSequelize() {
        const config =
        process.env.NODE_ENV === "test" ?   {

                options: {
                    dialect: "sqlite",
                    storage: ":memory:",
                    logging: true
                }
            }
                : {
                    database: process.env.DB_NAME,
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    options: {
                        dialect: process.env.DB_DIALECT,
                        host: process.env.DB_HOST,
                        port: process.env.DB_PORT,
                        logging: process.env.DB_LOGGING === "true" || false,

                    },
                };
                return new Sequelize(
                    config.database || undefined,
                    config.username || undefined,
                    config.password || undefined,
                    config.options
                );
    }




    connect(config = null) {
        if (!config) {
            config = {
                database: "",
                username: "",
                password: "",
                options: {
                    dialect: "",
                    host: "",
                    port: "",
                    logging: "",
                }
            }
        }

        this.sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.options
        )


    }
    async disconnect() {
        if (this.sequelize) {
            await this.sequelize.close();
            this.sequelize - null;
            console.log("conexão com a base dados foi encerrada")
        } else {
            console.log("não existe conexão com a base de dasdos. ")
        }
    }

    getInstance() {
        if (!this.sequelize) {
            console.log("conexão com banco de dados não foi iniciada")
            return null
        }
        return this.sequelize
    }
}

const databaseFactory = new DatabaseFactory();
const sequelize = databaseFactory._initializeSequelize()

export default sequelize;