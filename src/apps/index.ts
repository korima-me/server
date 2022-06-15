import path from 'path';
import { NodeVM } from 'vm2';

import * as korima from '$/korima';

const korimaMock = korima;

export async function loadApp(name: string) {
  const jsonPath = path.resolve(`./apps/${name}/korima.json`);
  const json: KorimaJSON = await import(jsonPath);

  if (json.lib) {
    korimaMock.router.register = new Proxy(korima.router.register, {
      apply(target, thisArg, argumentsList) {
        return Reflect.apply(target, thisArg, [json.id, ...argumentsList]);
      },
    });

    const vm = new NodeVM({
      require: {
        external: true,
        mock: {
          korima: korimaMock,
        },
      },
      wrapper: 'commonjs',
    });
    vm.runFile(path.join(__dirname, '../../apps/', name, json.lib));
  }
}
