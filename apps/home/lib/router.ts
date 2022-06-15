import express, { Router } from 'express';
import path from 'path';

const router = Router();

const p = path.join(__dirname, '../public');
router.use('/', express.static(p));
router.get('/', (_, res) => {
  res.sendFile(path.join(p, 'index.html'));
});

router.get('/hello', (_, res) => {
  res.json({
    hello: 'world',
  });
});

export default router;
