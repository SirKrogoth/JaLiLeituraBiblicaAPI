import { Router } from 'express';
import livrosController from '../controllers/livrosController';

const router = Router();

router.get('/livros', livrosController.findAllBooks);

export default router; 