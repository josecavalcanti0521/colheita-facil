import { where } from 'sequelize';
import Colheita from '../models/Colheita.js';

const createColheita = (async (req, res) => {
    const { nome_fruta, quantidade_caixas, maturacao, preco_dia } = req.body;

    try {
        const newColheita = await Colheita.create({
            nome_fruta,
            quantidade_caixas,
            maturacao,
            preco_dia
        });

        return res.json(newColheita).status(201);
    } catch(error) {
        console.log(`Erro ao criar um nova colheita: ${error}`);
        return res.status(500).json({ error: 'Erro ao criar um nova colheita' });
    }
});

const getsColheita = (async (req, res) => {
    try {
        const colheitas = await Colheita.findAll();
        return res.json(colheitas).status(200);
    } catch(error) {
        console.log(`Erro ao retornar todas as colheitas: ${error}`);
        return res.status(500).json({ error: 'Erro ao retornar todas as colheitas' });
    }
});

const deleteColheita = (async (req, res) => {
    const { id } = req.params;
    
    try {
        const delColheita = await Colheita.destroy({
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: 'Colheita deletada com sucesso.' });
    } catch(error) {
        console.log(`Erro ao deletar colheita: ${error}`);
        return res.status(404).json({ message: 'Erro ao deletar colheita.' })
    }

});

const updateColheita = (async (req, res) => {
    const { nome_fruta, quantidade_caixas, maturacao, preco_dia } = req.body;
    const { id } = req.params;

    try {
        const updColheita = await Colheita.update(
            {
                nome_fruta: nome_fruta,
                quantidade_caixas: quantidade_caixas,
                maturacao: maturacao, 
                preco_dia: preco_dia
            },
            {
                where: {
                    id: id
                }
            }
        );
        return res.status(200).json({ message: 'Sucesso ao alterar colheita.' });
    } catch(error) {
        console.log(`Erro ao alterar colheita: ${error}`);
        return res.status(404).json({ message: 'Erro ao alterar colheita.' });
    }

})

export { createColheita, getsColheita, deleteColheita, updateColheita };
