
import { Sequelize } from "sequelize";

class DatabaseFactory{
    constructor(){
        this.sequelize = null;
    }

    connect(config = null){
        if(!config){
            config = {
                database:"",
                username: "",
                password:"",
                options:{
                    dialect:"",
                    host:"",
                    port:"",
                    logging:"",
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
    async disconnect(){
        if(this.sequelize){
            await this.sequelize.close();
            this.sequelize - null;
            console.log("conexão com a base dados foi encerrada")
        }else{
            console.log("não existe conexão com a base de dasdos. ")
        }
    }

    getInstance(){
        if(!this.sequelize){
            console.log("conexão com banco de dados não foi iniciada")
            return null
        }
        return this.sequelize
    }
}

const sequelize = new DatabaseFactory();

export default sequelize;