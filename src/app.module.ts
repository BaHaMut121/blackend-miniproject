import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { RegistModule } from './regist/regist.module';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(),
    RegistModule,
    RegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
