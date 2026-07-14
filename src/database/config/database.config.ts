import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs('database', () => {
  const user = process.env.DATASOURCE_USERNAME;
  const password = process.env.DATASOURCE_PASSWORD;
  const host = process.env.DATASOURCE_HOST;
  const port = process.env.DATASOURCE_PORT;
  const name = process.env.DATASOURCE_DATABASE;

  const url = `postgresql://${user}:${password}@${host}:${port}/${name}`;

  const config = {
    type: 'postgres',
    url,
    autoLoadEntities: true,
  } as const satisfies TypeOrmModuleOptions;

  return config;
});
