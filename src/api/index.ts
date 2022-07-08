import { Router } from 'express';

import userRouter from './routes/user.route';
import postRouter from './routes/post.route';

export default () => {
    const router = Router();
    userRouter(router);
    postRouter(router);
    return router;
};
