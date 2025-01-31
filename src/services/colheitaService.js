import ColheitaRepository from "../repositories/colheitaRepository.js";

class ColheitaService {
    static async createColheita(data) {
        try {
            return ColheitaRepository.createColheita(data);
        } catch(error) {
            throw Error(`Error ao criar colheita: ${error}`);
        }
    }

    static async getAllColheitas() {
        try {
            return await ColheitaRepository.getAllColheitas();
        } catch(error) {
            throw Error(`Error ao retornar colheitas: ${error}`);
        }
    }

    static async getColheitaById(id) {
        try {
            return ColheitaRepository.getColheitaById(id);
        } catch(error) {
            throw Error('Error ao retornar colheita.');
        }
    }

    static async updateColheita(id, data) {
        try {
            const colheita = await ColheitaRepository.updateColheita(id, data);
            return {
                message: 'Sucesso ao atualizar colheita.',
                colheita: colheita
            }
        } catch(error) {
            throw Error(`Error ao atualizar colheita: ${error}`);
        }
    }

    static async deleteColheita(id) {
        try {
            const colheita = await ColheitaRepository.deleteColheita(id);
            return {
                message: 'Sucesso ao deletar colheita.',
                colheita: colheita
            }
        } catch(error) {
            throw Error(`Error ao deletar colheita: ${error}`);
        }
    }

}

export default ColheitaService;
