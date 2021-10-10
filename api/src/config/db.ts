import mongoose from "mongoose"

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL || 'mongodb://localhost:27017';

const initializeDatabase = async () => {

    try {
        await mongoose.connect(DB_CONNECTION_URL);
        console.log('Database connected');
    } catch (error) {
        console.error('Failed to connect to database', error);
        process.exit(0);
    }
}

export default initializeDatabase;