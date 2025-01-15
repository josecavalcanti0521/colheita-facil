import { Router } from 'express';
import createColheita from '../controllers/colheitaControllers.js';

const router = Router();

router.get('/add', createColheita);

export default router;