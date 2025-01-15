import Colheita from '../models/Colheita.js';

const createColheita = (async (req, res) => {
    const { nomeFruta, quantidadeCaixas, maturacao, precoDia } = req.body;

    try {
        const newColheita = Colheita.create({
            nomeFruta,
            quantidadeCaixas,
            maturacao,
            precoDia
        });
        return res.status(201).json(newColheita);
    } catch(error) {
        console.log(`Erro ao criar um nova colheita: ${error}`);
        return res.status(500).json({ error: 'Erro ao criar um nova colheita' });
    }
});

export default createColheita;