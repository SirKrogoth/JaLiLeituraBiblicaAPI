import sequelize, { Model, Optional } from 'sequelize';
import iLivros from './interaces/iLivros';
import postgres from '../../data/database';

interface iLivrosCreationAttributes extends Optional<iLivros, 'id'>{}
export interface iLivrosModel extends Model<iLivros, iLivrosCreationAttributes>, iLivros{}

const livros = postgres.define<iLivrosModel>('livros', {
    id: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    nome: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    capitulos: {
        type: sequelize.NUMBER,
        allowNull: false
    },
    novoTestamento: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    ordemBiblica: {
        type: sequelize.NUMBER,
        allowNull: false
    }
});

export default livros;