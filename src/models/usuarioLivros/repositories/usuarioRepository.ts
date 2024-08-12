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

function removeDate(idUsuario: string, idLivro: string){
    return usuarioLivroModel.update({
        dataUltimaLeitura: null
    }, {
        where: {
            idUsuario: idUsuario,
            idLivro: idLivro
        }
    });
}

function retornarLivrosNaoLidos(idUsuario: string){
    return usuarioLivroModel.sequelize?.query(`SELECT ul."idUsuario", ul."idLivro", l."nome", l."capitulos", l."novoTestamento", l."ordemBiblica" 
	                                                FROM public."usuarioLivros" as ul
                                                INNER JOIN public."livros" AS l ON ul."idLivro" = l."id"
                                                    WHERE 
	                                                    ul."dataUltimaLeitura" IS NULL
                                                        AND ul."idUsuario" = '${idUsuario}';`);
}

export default {
    create,
    updateDate,
    removeDate,
    retornarLivrosNaoLidos
}