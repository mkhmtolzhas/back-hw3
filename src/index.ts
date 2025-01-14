import 'dotenv/config';
import express from 'express';
import connectDB from './db';
import cors from 'cors'; // Импортируем пакет cors
import globalRouter from './global-router';
import { logger } from './logger';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Подключаем CORS
app.use(cors());

app.use(logger);
app.use(express.json());
app.use('/api/',globalRouter);

app.get('/',(request,response) =>{
  response.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
