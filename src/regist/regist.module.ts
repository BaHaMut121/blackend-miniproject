import { Module } from '@nestjs/common';
import { RegistService } from './regist.service';
import { RegistController } from './regist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { course } from 'src/regist/entities/regist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([course])],
  controllers: [RegistController],
  providers: [RegistService],
})
export class RegistModule {}
