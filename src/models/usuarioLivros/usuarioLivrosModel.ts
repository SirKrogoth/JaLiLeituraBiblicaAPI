import sequelize, { Model, Optional } from 'sequelize';
import iUsuarioLivro from './interfaces/iUsuarioLivro';
import postgres from '../../data/database';

interface iUsuarioLivroCreationAttributes extends Optional<iUsuarioLivro, 'idUsuario' | 'idLivro'>{}
export interface iUuarioLivroModel extends Model<iUsuarioLivro, iUsuarioLivroCreationAttributes>, iUsuarioLivro{}

const usuarioLivro = postgres.define<iUuarioLivroModel>('usuarioLivros', {
    idUsuario: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    idLivro: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false,
        references: {
            model: 'livros',
            key: 'id'
        }
    },
    dataUltimaLeitura: {
        type: sequelize.DATE,
        allowNull: true
    }
});

export default usuarioLivro;