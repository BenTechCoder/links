/* eslint-disable n/no-process-env */

import path from 'node:path';
import dotenv from 'dotenv';
import moduleAlias from 'module-alias';


// Check the env
const NODE_ENV:string = (process.env['NODE_ENV'] ?? 'development');

// Configure "dotenv"
const result2 = dotenv.config({
  path: path.join(__dirname, `./config/.env.${NODE_ENV}`),
});
if (result2.error) {
  throw result2.error;
}

// Configure moduleAlias
if (__filename.endsWith('js')) {
  moduleAlias.addAlias('@src', __dirname + '/dist');
}
