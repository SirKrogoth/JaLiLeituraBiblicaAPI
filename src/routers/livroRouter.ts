import { Router } from 'express';
import livrosController from '../controllers/livrosController';
import { validarToken } from './middlewares/authMiddleware';

const router = Router();

router.get('/livros', validarToken, livrosController.findAllBooks);
router.get('/updateDesmarcarLeitura/:idUsuario/:idLivro', validarToken, livrosController.removeDate);
router.get('/retornarLivrosNaoLidos/:idUsuario', validarToken, livrosController.retornarLivrosNaoLidos);
router.post('/usuarioLivro', validarToken, livrosController.create);
router.put('/updateLivro', validarToken, livrosController.updateDate);

export default router; 