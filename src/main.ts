import { server } from './server';
import path from 'path';
import { Router } from 'express';
import { Module, syncBuiltinESMExports } from 'node:module';
import { loadApp } from './apps';

const PORT = 3000;

globalThis.PUB_DIR = path.join(__dirname, '../public');

server
  .start(PORT)
  .then(() => {
    console.log(`Server Running on port ${PORT}`);
  })
  .catch((err) => {
    console.error(err);
  });
