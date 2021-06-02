import * as Yup from 'yup';
import Usuario from '../models/Usuario';

class UsuarioController {

    async index(req, res)
    {
        if(req.params.id){
            const aUsuarios = await Usuario.findByPk(req.params.id);

            return res.status(200).json({response: true, data: aUsuarios});
        }
        else{
            const aUsuarios = await Usuario.findAll({
                where:{},
                attributes:['id','nome','email'],
            });

            return res.status(200).json({response: true, data: aUsuarios});
        }
    }

    async store(req, res) 
    {
        
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            email: Yup.string().email().required(),
            senha: Yup.string().min(6).required(),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Campos Obrigatórios estão vazios!'});
        }

        /* Verifica se email já esta cadastrado na base */
        const valida = await Usuario.findOne({where: { email : req.body.email }});

        if(valida) {
            return res.status(400).json({'error': 'Usuário já cadastrado!'});
        }

        const {id, nome, email, tipo} = await Usuario.create(req.body);
        return res.json({
            id,
            nome,
            email,
            tipo,
        });
    }

    async update(req, res)
    {

        const schema = Yup.object().shape({
            nome: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6),
            senha: Yup.string().min(6).when('oldPassword',(oldPassword, field) => 
            oldPassword ? field.required() : field
            ),
            confirmPassword: Yup.string().when('senha', (senha, field) =>
                senha ? field.required().oneOf([Yup.ref('senha')]) : field
            ),
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error: 'Campos Obrigatórios estão vazios!'});
        }

        const { email, oldPassword } = req.body;

        const usuario = await Usuario.findByPk(req.usuarioId);

        if(email != usuario.email){
            const usuarioExiste = await Usuario.findOne({ where: { email } });
            
            if(usuarioExiste){
                return res.status(400).json({error: 'Email já Cadastrado!'});
            }

            if(oldPassword && ! (await usuario.checkPassword(oldPassword))){
                return res.status(401).json({error: 'Senha antiga não corresponde'});
            }
        }

        const {id, nome, tipo}  = await usuario.update(req.body);

        return res.json({
            id,
            nome,
            email,
            tipo,
        });       
    }
    
}

export default new UsuarioController();