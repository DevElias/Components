import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            nome:  Sequelize.STRING,
            email: Sequelize.STRING,
            senha: Sequelize.STRING,
            tipo:  Sequelize.INTEGER,
            status: Sequelize.INTEGER
        },
        {
            sequelize
        });

        this.addHook('beforeSave', async (usuario) => {
            if(usuario.senha){
                usuario.senha = await bcrypt.hash(usuario.senha, 8);
            }
        });

        return this;
    }

    checkPassword(senha){
        return bcrypt.compare(senha, this.senha);
    }
}

export default Usuario;