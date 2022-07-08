import { NextFunction, Request, Response } from 'express';

const protect = (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.session;

    if (!user)
        return res
            .status(401)
            .send({ statusCode: 401, message: 'unauthorized' });

    req.user = user;

    next();
};

export { protect };
