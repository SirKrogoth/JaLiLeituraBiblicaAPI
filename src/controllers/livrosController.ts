import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import livrosRepository from '../models/livros/repositories/livrosRepository';
import iUsuarioLivro from '../models/usuarioLivros/interfaces/iUsuarioLivro';
import usuarioRepository from '../models/usuarioLivros/repositories/usuarioRepository';

async function findAllBooks(req: Request, res: Response, next: any){
    try {
        const resp = await livrosRepository.findAllBooks();

        res.status(StatusCodes.OK).json(resp).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function create(req: Request, res: Response, next: any){
    try {
        const livro = req.body as iUsuarioLivro;
        
        if(livro === null) return res.status(StatusCodes.BAD_REQUEST).end();

        const result = await usuarioRepository.create(livro);

        if(result === null) return res.status(StatusCodes.BAD_REQUEST).end();

        res.status(StatusCodes.CREATED).json(result).end();
    } catch (error) {
        console.error(error);        
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function updateDate(req: Request, res: Response, next: any){
    try {
        const livro = req.body as iUsuarioLivro;

        if(livro === null) return res.status(StatusCodes.BAD_REQUEST).end();

        const result = await usuarioRepository.updateDate(livro);

        if(result === null) return res.status(StatusCodes.BAD_REQUEST).end();

        res.status(StatusCodes.OK).end();
    } catch (error) {
        console.error(error);        
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function removeDate(req: Request, res: Response, next: any){
    try {
        const idUsuario: string = req.params.idUsuario;
        const idLivro: string = req.params.idLivro;

        if(idUsuario === null || idLivro === null){
            res.status(StatusCodes.BAD_REQUEST).end();
        }

        const result = await usuarioRepository.removeDate(idUsuario, idLivro);

        if(result == null || result[0] !== 1 ) return res.status(StatusCodes.BAD_REQUEST).end();

        res.status(StatusCodes.OK).json(result).end();

    } catch (error) {
        console.error(error);        
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function retornarLivrosNaoLidos(req: Request, res: Response, next: any){
    try {
        const idUsuario: string = req.params.idUsuario;

        console.log(idUsuario);

        const retorno = await usuarioRepository.retornarLivrosNaoLidos(idUsuario);

        console.log(retorno);

        if(retorno === null) return res.status(StatusCodes.BAD_REQUEST).end();

        return res.status(StatusCodes.ACCEPTED).json(retorno).end();
    } catch (error) {
        console.error(error);        
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    findAllBooks,
    create,
    updateDate,
    removeDate,
    retornarLivrosNaoLidos
}