import db from '../config/connection.js';
import { DataTypes } from 'sequelize';

const Colheita = db.define('colheitas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_fruta: {
        type: DataTypes.STRING,
        field: 'nome_fruta',
        allowNull: false,
    },
    quantidade_caixas: {
        type: DataTypes.INTEGER,
        field: 'quantidade_caixas',
        allowNull: false,
    },
    maturacao: {
        type: DataTypes.STRING,
        field: 'maturacao',
        allowNull: false,
    },
    preco_dia: {
        type: DataTypes.FLOAT(),
        field: 'preco_dia',
        allowNull: false,
    },
}, {
    timestamps: true,
});

Colheita.sync()
    .then(() => {
        console.log('Synchronized models');
    })
    .catch((error) => {
        console.log(`An error occurred while synchronizing models: ${error}`)
    });

export default Colheita;