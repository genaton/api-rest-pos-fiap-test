'use strict';
import { Model } from 'sequelize';

class Mensagem extends Model {

  static init(sequelize) {

    return super.init({
      id: DataTypes.UUID,
      usuario: DataTypes.STRING,
      conteudo: DataTypes.STRING,
      gostei: DataTypes.INTEGER
    }, {
      sequelize,
      modelName: 'mensagem',
      underscored: true,
    });
   

  }


};

export default Mensagem;