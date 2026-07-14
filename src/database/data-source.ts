import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { DataSource } from 'typeorm';

dotenvExpand.expand(dotenv.config());

const user = process.env.DATASOURCE_USERNAME;
const password = process.env.DATASOURCE_PASSWORD;
const host = process.env.DATASOURCE_HOST;
const port = process.env.DATASOURCE_PORT;
const name = process.env.DATASOURCE_DATABASE;

const url = `postgresql://${user}:${password}@${host}:${port}/${name}`;

export default new DataSource({
  type: 'postgres',
  url,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});
