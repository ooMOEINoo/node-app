import { createClient } from 'redis';

import config from '../config/config';

const redisClient = createClient({
    legacyMode: true,
    socket: {
        host: config.db.REDIS_URL,
        port: Number(config.db.REDIS_PORT),
    },
});

export default async () => {
    try {
        await redisClient.connect();
        console.log('redis connected');
    } catch (err) {
        console.log(err);
    }
};

export { redisClient };
