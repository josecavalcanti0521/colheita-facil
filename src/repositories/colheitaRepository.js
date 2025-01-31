import Colheita from "../models/Colheita.js";
import { Op } from "sequelize";

export default class ColheitaRepository {
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
        const colheita = await this.getColheitaById(id);

        const deleteColheita = await Colheita.destroy({
            where: {
                id
            }
        });

        return colheita;
    }

    static async getColheitaByDate(year, month, day) {
        const colheita = await Colheita.findAll({
            where: {
                createdAt: {
                    [Op.gte]: new Date(`${year}-${month}-${day}T00:00:00.000Z`),
                    [Op.lte]: new Date(`${year}-${month}-${day}T23:59:59.999Z`)
                }
            }
        });

        return colheita;
    }
}
