import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import Usuario from '../models/Usuario';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res){

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            senha: Yup.string().required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Falha na Autenticação!'});
        }

        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({where : { email }});

        if(!usuario){
            return res.status(401).json({error: 'Usuário não encontrado!'});
        }  
        
        if(!(await usuario.checkPassword(senha))){
            return res.status(401).json({error: 'Senha Incorreta!'});
        }

        const { id, nome } = usuario;

        return res.json({
            usuario:{
                id,
                nome,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret,{ expiresIn: authConfig.expiresIn}),
        })
    }
}

export default new SessionController();