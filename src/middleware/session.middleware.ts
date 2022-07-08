import session from 'express-session';
import connectRedis from 'connect-redis';

import { redisClient } from '../db/connect.redis';
import config from '../config/config';

const RedisStore = connectRedis(session);

export default session({
    store: new RedisStore({ client: redisClient }),
    secret: config.app.SESSION_SECRET,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 60000,
    },
    resave: false,
    saveUninitialized: false,
});
