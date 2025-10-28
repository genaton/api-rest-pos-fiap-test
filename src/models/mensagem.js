'use strict';
import { DataTypes, Model } from 'sequelize';

class Mensagem extends Model {

  static init(sequelize) {

    return super.init({
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      usuario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "o campo usuário é obrigatório"
          },
          notEmpty: {
            msg: "o campo usuário deve ser preenchido"
          },
          len: {
            args:
              [
                7, 20
              ],
            msg: "o campo usuário deve ter entre 8 e 20 caracteres"
          }
        }
      },
      conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "o campo conteúdo é obrigatório"
          },
          notEmpty: {
            msg: "o campo conteúdo deve ser preenchido"
          },
          len: {
            args:
              [
                1, 150
              ],
            msg: "o campo conteúdo deve ter entre 2 e 150 caracteres"
          }
        }
      },
      gostei: { type: DataTypes.INTEGER, defaultValue: 0 }
    }, {
      sequelize,
      modelName: 'mensagens',
      underscored: true,
    });


  }


};

export default Mensagem;