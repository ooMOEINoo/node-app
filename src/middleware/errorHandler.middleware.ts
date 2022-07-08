import { NextFunction, Request, Response } from 'express';

import HttpException from '../utils/http.exception';

export default (
    err: HttpException,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
) => {
    const error = {
        statusCode: err.statusCode || 500,
        message: err.message,
    };
    res.status(error.statusCode).send({ error });
};
