const {Model, DataTypes} = require('sequelize');

class Trilha extends Model {
    static init(sequelize){
        super.init(
            {
                nome: DataTypes.STRING,
                coordenadas: DataTypes.STRING
            }, {
                sequelize
            }
        )
    }
    static associate(models) {
        //! um User tem muitos Adresses
        this.hasMany(models.Trilha, { foreignKey: 'trilha_id', as: 'trilha'})
    }
}

module.exports = Trilha;