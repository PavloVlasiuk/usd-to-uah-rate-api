import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { RateModule } from './rate/rate.module';
import { EmailModule } from './email/email.module';
import { TaskScheduleModule } from './task-schedule/schedule.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    DatabaseModule,
    RateModule,
    EmailModule,
    TaskScheduleModule,
    ScheduleModule.forRoot(),
  ],
})
export class AppModule {}
