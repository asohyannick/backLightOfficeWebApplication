import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();
import { connect, set } from 'mongoose';
// Connection to the database
const connectToDB = async () => {
    try {
        // Configure mongoose to use `strictQuery`
        set('strictQuery', false);
        // Connect to MongoDB
        const db = await connect(process.env.MONGO_URI as string);
        console.log('MongoDB connected to', db.connection.name);

        // Emit an event when the connection is successful
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Emit an event when there's an error
    }
};

export default connectToDB;