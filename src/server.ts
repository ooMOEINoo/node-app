// Built-in Modules
import http from 'http';
// Third-party Modules
import 'module-alias/register';
// User-defined Modules
import app from './app';
import connectDB from './db/db.connect';
import config from './config/config';
import connectToRedis from './db/connect.redis';

// Create server from application
const server = http.createServer(app);

// Favorit PORT
const { PORT } = config.app;

async function bootstrap(): Promise<void> {
    // connect redis
    await connectToRedis();

    // connect db
    await connectDB();
    // Running server on favorit port
    server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
}

bootstrap();
