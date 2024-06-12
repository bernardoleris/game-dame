import dotenv from 'dotenv';
import { connect } from 'mongoose';

dotenv.config();

const dbURI = process.env.MONGO_URI; // Acesse a URI do MongoDB da variável de ambiente

const connectDB = async () => {
    try {
        await connect(dbURI);
        console.log('Conectado ao banco de dados MongoDB');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;

