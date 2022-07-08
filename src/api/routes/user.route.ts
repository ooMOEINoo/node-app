import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import AuthService from '../../services/auth.service';
import userModel from '../../models/user.model';
import { IUserDto } from '../../interface/user.interface/user.interface';

const route = Router();
const authService = new AuthService(userModel);

export default (app: Router) => {
    app.use('/users', route);

    // signup
    route.post('/signup', async (req, res, next) => {
        try {
            const result = await authService.signUp(req.body as IUserDto);
            req.session.user = result.data.user;
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });

    // sigin
    route.post('/signin', async (req, res, next) => {
        try {
            const result = await authService.signIn(req.body as IUserDto);
            req.session.user = result.user;
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            return next(err);
        }
    });
};
