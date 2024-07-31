import livroModel, { iLivrosModel } from '../livroModel';
import iLivros from '../interaces/iLivros';

async function findAllBooks(){
    return livroModel.findAll();
}

export default {
    findAllBooks
}