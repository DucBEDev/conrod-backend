import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  username: 'postgres',
  password: 'pass123',
  host: 'localhost',
  port: 5433,
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
});
