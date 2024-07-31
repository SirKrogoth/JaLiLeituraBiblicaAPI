import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import livrosRepository from '../models/livros/repositories/livrosRepository';

async function findAllBooks(req: Request, res: Response, next: any){
    try {
        const resp = await livrosRepository.findAllBooks();

        res.status(StatusCodes.OK).json(resp).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    findAllBooks
}