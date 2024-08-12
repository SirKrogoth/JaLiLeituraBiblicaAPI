import { Request, Response } from 'express';
//import auth from '../../../../JaLiLeituraBiblicaAutenticacao/src/secure/autorizacao';
import auth from 'ms-autenticacao/secure/autorizacao';
import { StatusCodes } from 'http-status-codes';

async function validarToken(req: Request, res: Response, next: any){
    try {
        const token = req.headers['x-access-token'] as string;
        if(!token) return res.status(StatusCodes.BAD_REQUEST).end();

        const tokenValidado = await auth.verify(token);

        if(tokenValidado === null) return res.status(StatusCodes.UNAUTHORIZED).end();
        res.locals.tokenValidado = tokenValidado;

        next();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.UNAUTHORIZED).end();
    }
}

export {
    validarToken
}