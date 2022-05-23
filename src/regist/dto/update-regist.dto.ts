import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistDto } from './create-regist.dto';

export class UpdateRegistDto extends PartialType(CreateRegistDto) {}
