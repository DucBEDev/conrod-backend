import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_VALIDATOR_SCHEMA } from './env.constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ENV_VALIDATOR_SCHEMA,
    }),
  ],
})
export class EnvModule {}
