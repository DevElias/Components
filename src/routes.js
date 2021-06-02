import { Router } from 'express';
import UsuarioController from './app/controllers/UsuarioController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import multer from 'multer';
import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
    return res.json({message: 'Bem Vindo ao Sistema!'});
});

/* Usuários */
routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.store); 
routes.post('/sessions', SessionController.store);
routes.put('/usuario', authMiddleware, UsuarioController.update);

/* Upload de Imagens */
routes.post('/files', upload.single('file'),(req, res) =>{
    return res.json({response: true, message: 'Arquivo enviado com sucesso!'});
});

export default routes;