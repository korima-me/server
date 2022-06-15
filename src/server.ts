import express, { Router } from 'express';
import { loadApp } from './apps';

class Server {
  private app: ReturnType<typeof express>;

  constructor() {
    this.app = express();
    this.config();
    this.routerConfig();

    return this;
  }

  private config() {
    this.app.use(
      express.urlencoded({
        extended: true,
      }),
    );
    this.app.use(express.json({}));
  }

  public registerAppRouter(id: string, router: Router) {
    console.log(`Registered Router '/apps/${id}'`);
    this.app.use(`/apps/${id}`, router);
  }

  private routerConfig() {
    loadApp('home');
  }

  public start = (port: number): Promise<void> => {
    return new Promise((resolve, reject) => {
      this.app
        .listen(port, () => {
          resolve();
        })
        .on('error', (err: Object) => reject(err));
    });
  };
}

export const server = new Server();
