import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
    res.status(404).send({ statusCode: 404, message: 'page not found' });
};
