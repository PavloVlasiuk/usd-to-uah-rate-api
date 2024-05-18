import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RateModule } from './rate/rate.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [DatabaseModule, RateModule, EmailModule],
})
export class AppModule {}
