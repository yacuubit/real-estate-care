import express from 'express';
import cors from 'cors';
import { readFile } from 'node:fs/promises';

const app = express();
const port = 3000;
const databaseUrl = new URL('./db.json', import.meta.url);

app.use(cors({ origin: ['http://localhost:8100', 'http://localhost:4200'] }));

app.get('/api/inspections', async (_request, response) => {
  try {
    const database = JSON.parse(await readFile(databaseUrl, 'utf8'));
    if (!Array.isArray(database.inspections)) {
      throw new Error('Database must contain an inspections array.');
    }
    response.json(database.inspections);
  } catch (error) {
    console.error('Could not load inspection data:', error);
    response.status(500).json({ message: 'Could not load inspections.' });
  }
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Inspection API: http://localhost:${port}/api/inspections`);
});