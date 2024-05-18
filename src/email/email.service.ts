import { ConflictException, Injectable } from '@nestjs/common';
import { ISendEmailOptions } from './interfaces/send-email-options.interface';
import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';
import { EmailRepository } from 'src/database/repositories/email.repository';
import { SubscribeEmailDto } from './dtos/subscribe-email.dto';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly emailRepository: EmailRepository,
  ) {}

  async sendTemplatedEmail({
    to,
    subject,
    message,
  }: ISendEmailOptions): Promise<void> {
    this.mailerService
      .sendMail({
        to,
        subject,
        template: path.resolve('./src/email/templates/template.hbs'),
        context: {
          message,
        },
      })
      .catch((e) => {
        console.error(`Sending email error: ${e}`);
      });
  }

  async subscribe({ email }: SubscribeEmailDto): Promise<void> {
    const alreadySubscribed = await this.emailRepository.find({ email });

    if (alreadySubscribed)
      throw new ConflictException('Email is already subscribed');

    await this.emailRepository.create({ email });
  }
}
