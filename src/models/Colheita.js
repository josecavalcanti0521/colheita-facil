import sequelize from '../db/connection.js';
import { DataTypes, Model } from 'sequelize';

class Colheita extends Model {}

Colheita.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nomeFruta: {
            type: DataTypes.STRING,
            field: 'nome_fruta',
            allowNull: false,
        },
        quantidadeCaixas: {
            type: DataTypes.INTEGER,
            field: 'quantidade_caixas',
            allowNull: false,
        },
        maturacao: {
            type: DataTypes.STRING,
            field: 'maturacao',
            allowNull: false,
        },
        precoDia: {
            type: DataTypes.FLOAT(),
            field: 'preco_dia',
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Colheita',
        timestamps: true,
    }
)

Colheita.sync()
    .then(() => {
        console.log('Synchronized models');
    })
    .catch((error) => {
        console.log(`An error occurred while synchronizing models: ${error}`)
    });

export default Colheita;