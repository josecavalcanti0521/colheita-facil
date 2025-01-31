import Router from 'express';
import ColheitaController from '../controllers/colheitaController.js';

const colheitaRouter = Router();

colheitaRouter.post('/', ColheitaController.createColheita);
colheitaRouter.get('/', ColheitaController.getAllColheitas);
colheitaRouter.get('/:id', ColheitaController.getColheitaById);
colheitaRouter.get('/:year/:month/:day', ColheitaController.getColheitaByDate);
colheitaRouter.put('/:id', ColheitaController.updateColheita);
colheitaRouter.delete('/:id', ColheitaController.deleteColheita);

export default colheitaRouter;
