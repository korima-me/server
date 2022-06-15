import { server } from '$/server';
import { Router } from 'express';

export const version = '0.0.1';

export const router = {
  register(id: string, router: Router) {
    server.registerAppRouter(id, router);
  },
};
