import usuarioLivroModel from "../usuarioLivrosModel";
import iUsuarioLivro from "../interfaces/iUsuarioLivro";

function create(usuarioLivro: iUsuarioLivro){
    return usuarioLivroModel.create(usuarioLivro);
}

export default {
    create
}