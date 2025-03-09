import express from 'express';
import appRouter from './routes/index.js';
import { checkdbConnection } from './database/connection.js';

const server = express();
const PORT = 3000;

// check db connection
checkdbConnection();

// res.json buat apa
server.get('/health', appRouter);

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});