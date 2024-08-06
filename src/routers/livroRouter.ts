import { Router } from 'express';
import livrosController from '../controllers/livrosController';
import usuarioLivroController from '../controllers/livrosController';

const router = Router();

router.get('/livros', livrosController.findAllBooks);
router.post('/usuarioLivro', usuarioLivroController.create);
router.put('/updateLivro', usuarioLivroController.updateDate);

export default router; 