import Router from 'express';
import { ColheitaController } from '../controllers/colheitaController.js';

const colheitaRouter = Router();

colheitaRouter.post('/', ColheitaController.createColheita);
colheitaRouter.get('/', ColheitaController.getAllColheitas);
colheitaRouter.get('/:id', ColheitaController.getColheitaById);
colheitaRouter.put('/:id', ColheitaController.updateColheita);
colheitaRouter.delete('/:id', ColheitaController.deleteColheita);

export default colheitaRouter;
