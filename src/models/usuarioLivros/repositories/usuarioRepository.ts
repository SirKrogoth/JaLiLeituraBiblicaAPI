import usuarioLivroModel from "../usuarioLivrosModel";
import iUsuarioLivro from "../interfaces/iUsuarioLivro";

function create(usuarioLivro: iUsuarioLivro){
    return usuarioLivroModel.create(usuarioLivro);
}

function updateDate(usuarioLivro: iUsuarioLivro){
    return usuarioLivroModel.update({
        dataUltimaLeitura: usuarioLivro.dataUltimaLeitura
    }, {
        where: {
            idUsuario: usuarioLivro.idUsuario,
            idLivro: usuarioLivro.idLivro
        }
    });
}

export default {
    create,
    updateDate
}