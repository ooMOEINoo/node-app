import mongoose from 'mongoose';
import config from '../config/config';

export default async function connectDB() {
    try {
        // get db config
        const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = config.db;
        const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
        const connect = await mongoose.connect(mongoURL);
        console.log(`db connected to ${connect.connection.host}`);
    } catch (err) {
        console.error(err);
        // setTimeout(connectDB, 5000);
        process.exit(1);
    }
}
