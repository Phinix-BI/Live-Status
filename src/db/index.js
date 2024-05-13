import mongoose from 'mongoose';
import config from '../config/config.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' });
        console.info(`Running on ENV = ${process.env.NODE_ENV}`);
        console.info(`Connected to mongoDB. ${connectionInstance.connection.host}`);
    } catch (error) {
        console.info(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
    
};

export default connectDB;
