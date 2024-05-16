import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RateModule } from './rate/rate.module';

@Module({
  imports: [DatabaseModule, RateModule],
})
export class AppModule {}
