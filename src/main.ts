import path from 'path';
import { server } from './server';

const PORT = 3000;

globalThis.PUB_DIR = path.join(__dirname, '../public');

server
  .start(PORT)
  .then(() => {
    console.log(`Server Running on http://localhost:${PORT}`);
  })
  .catch((err) => {
    console.error(err);
  });
