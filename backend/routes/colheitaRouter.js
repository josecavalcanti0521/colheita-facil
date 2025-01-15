import { Router } from 'express';
import { createColheita, getsColheita, deleteColheita, updateColheita } from '../controllers/colheitaControllers.js';

const router = Router();

router.post('/add', createColheita);
router.get('/gets', getsColheita);
router.delete('/del/:id', deleteColheita);
router.put('/put/:id', updateColheita);

export default router;
