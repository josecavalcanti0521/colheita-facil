import Colheita from "../models/Colheita.js";

class ColheitaRepository {
    static async createColheita(data) {
        return await Colheita.create(data);
    }

    static async getAllColheitas() {
        return await Colheita.findAll();
    }

    static async getColheitaById(id) {
        return await Colheita.findAll({
            where: {
                id
            }
        });
    }

    static async updateColheita(id, data) {
        const colheita = await data;
        const updateColheita = await Colheita.update(
                data,
            { 
                where: {
                    id
                }
            }
        )

        return colheita;
    }

    static async deleteColheita(id) {
        const colheita = await Colheita.findAll({
            where: {
                id
            }
        });

        const deleteColheita = await Colheita.destroy({
            where: {
                id
            }
        });

        return colheita;
    }
}

export default ColheitaRepository;
