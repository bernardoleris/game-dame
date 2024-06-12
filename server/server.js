import express, { json } from 'express';
import connectDB from './config/db.js';
import cors from 'cors'; // Importe o CORS

import userRoutes from "./routes/UserRoutes.js"; // Importe as rotas do usuário corretamente

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(cors()); // Use o CORS antes das suas rotas
app.use(json());
app.use('/api/user', userRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

