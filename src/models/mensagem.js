'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mensagem.init({
    id: DataTypes.UUID,
    usuario: DataTypes.STRING,
    conteudo: DataTypes.STRING,
    gostei: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mensagem',
    underscored: true,
  });
  return mensagem;
};