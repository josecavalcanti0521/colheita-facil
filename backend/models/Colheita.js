import db from '../config/connection.js';
import { DataTypes } from 'sequelize';

const Colheita = db.define('colheita', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
        allowNull: false
    },
    nomeFruta: {
        type: DataTypes.STRING,
        field: 'nome_fruta',
        allowNull: false
    },
    quantidadeCaixas: {
        type: DataTypes.INTEGER,
        field: 'quantidade_caixas',
        allowNull: false
    },
    maturacao: {
        type: DataTypes.INTEGER,
        field: 'maturacao',
        allowNull: false
    },
    precoDia: {
        type: DataTypes.FLOAT(),
        field: 'maturacao',
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false
    }
});

Colheita.sync()
    .then(() => {
        console.log('Synchronized models');
    })
    .catch((error) => {
        console.log(`An error occurred while synchronizing models: ${error}`)
    });

export default Colheita;