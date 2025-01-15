import { Router } from 'express';
import { createColheita, getsColheita, deleteColheita } from '../controllers/colheitaControllers.js';

const router = Router();

router.post('/add', createColheita);
router.get('/gets', getsColheita);
router.delete('/del/:id', deleteColheita);

export default router;
