import ColheitaService from '../services/colheitaService.js';

export class ColheitaController {
    static async createColheita(req, res) {
        try {
            const data = req.body;
            const colheita = await ColheitaService.createColheita(data);
            return res.status(201).json(colheita);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async getAllColheitas(req, res) {
        try {
            const colheitas = await ColheitaService.getAllColheitas();
            return res.status(200).json(colheitas);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async getColheitaById(req, res) {
        try {
            const { id } = req.params;
            const colheita = await ColheitaService.getColheitaById(id);
            return res.status(200).json(colheita);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async updateColheita(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const colheita = await ColheitaService.updateColheita(id, data);
            return res.status(200).json(colheita);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }

    static async deleteColheita(req, res) {
        try {
            const { id } = req.params;
            const colheita = await ColheitaService.deleteColheita(id);
            return res.status(200).json(colheita);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }
}
