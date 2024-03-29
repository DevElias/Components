import Sequelize from 'sequelize';
import Usuario from '../app/models/Usuario'; 
import DatabaseConfig from '../config/database';

const models = [Usuario];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();