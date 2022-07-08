import dotenv from 'dotenv';

// load env file
if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './.env.dev' });
} else {
    dotenv.config({ path: './.env.prod' });
}

export default {
    app: {
        PORT: Number(process.env.PORT) || 3000,
        NODE_ENV: process.env.NODE_ENV,
        SESSION_SECRET: process.env.SESSION_SECRET || 'secret',
    },

    db: {
        // using mongo for connect ip address mongo in container
        MONGO_IP: process.env.MONGO_IP || 'mongo',
        MONGO_PORT: Number(process.env.MONGO_PORT) || 27017,
        MONGO_USER: process.env.MONGO_USER,
        MONGO_PASSWORD: process.env.MONGO_PASSWORD,
        // using mongo for connect ip address redis in container
        REDIS_URL: process.env.REDIS_URL || 'redis',
        REDIS_PORT: process.env.REDIS_PORT || 6379,
    },
};
