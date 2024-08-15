import { Router } from 'express';
import livrosController from '../controllers/livrosController';
import { validarToken } from './middlewares/authMiddleware';

const router = Router();

/**livros
 * @swagger
 * /livros:
 *   get:
 *     summary: Irá retornar todos os livros da Bíblia.
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "9f48fb2b-dad0-492b-8c94-6565a3ac0c3e"
 *                 nome:
 *                   type: string
 *                   example: "Gênesis"
 *                 capitulos:
 *                   type: integer
 *                   example: 50
 *                 novoTestamento: 
 *                   type: boolean
 *                   example: false
 *                 ordemBiblica: 
 *                   type: integer
 *                   example: 1
 *                 createdAt: 
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-19T17:58:48.673Z"
 *                 updatedAt: 
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-19T17:58:48.673Z"
 *       default:
 *          description: Unexpected error
 */
router.get('/livros', validarToken, livrosController.findAllBooks);

/**updateDesmarcarLeitura
 * @swagger
 * /updateDesmarcarLeitura/{idUsuario}/{idLivro}:
 *   get:
 *     summary: Desmarcar a leitura de um livro específico para um usuário.
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *       - in: path
 *         name: idLivro
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do livro
 *     responses:
 *       200:
 *         description: Leitura desmarcada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Leitura desmarcada com sucesso"
 *       default:
 *         description: Erro inesperado
 */
router.get('/updateDesmarcarLeitura/:idUsuario/:idLivro', validarToken, livrosController.removeDate);

/**retornarLivrosNaoLidos
 * @swagger
 * /retornarLivrosNaoLidos/{idUsuario}:
 *   get:
 *     summary: Irá retornar todos os livros que não foram lidos pelo usuário enviado.
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: idUsuario
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "9f48fb2b-dad0-492b-8c94-6565a3ac0c3e"
 *                 nome:
 *                   type: string
 *                   example: "Gênesis"
 *                 capitulos:
 *                   type: integer
 *                   example: 50
 *                 novoTestamento: 
 *                   type: boolean
 *                   example: false
 *                 ordemBiblica: 
 *                   type: integer
 *                   example: 1
 *       default:
 *         description: Erro inesperado
 */
router.get('/retornarLivrosNaoLidos/:idUsuario', validarToken, livrosController.retornarLivrosNaoLidos);

/**usuarioLivro
 * @swagger
 * /usuarioLivro:
 *   post:
 *     summary: Deverá vincular um livro ao usuário.
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUsuario:
 *                 type: string
 *                 example: "8a275e31-8620-4b58-bf60-aca18ccfbf7c"
 *                 description: ID do usuário
 *               idLivro:
 *                 type: string
 *                 example: "4a5ce8aa-3b8a-4dab-ad7e-074957c00517"
 *                 description: ID do livro
 *     responses:
 *       200:
 *         description:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sucesso"
 *       default:
 *         description: Erro inesperado
 */
router.post('/usuarioLivro', validarToken, livrosController.create);

/**updateLivro
 * @swagger
 * /updateLivro:
 *   put:
 *     summary: Registrar que um determinado livro de um usuário específico foi lido.
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUsuario:
 *                 type: string
 *                 example: "8a275e31-8620-4b58-bf60-aca18ccfbf7c"
 *                 description: ID do usuário
 *               idLivro:
 *                 type: string
 *                 example: "4a5ce8aa-3b8a-4dab-ad7e-074957c00517"
 *                 description: ID do livro
 *               dataUltimaLeitura:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-08-08 00:00:00"
 *     responses:
 *       200:
 *         description: Leitura marcada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Sucesso"
 *       default:
 *         description: Erro inesperado
 */
router.put('/updateLivro', validarToken, livrosController.updateDate);

export default router;