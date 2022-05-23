// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistService } from './regist.service';
import { CreateRegistDto } from './dto/create-regist.dto';
import { UpdateRegistDto } from './dto/update-regist.dto';

@Controller('regist')
export class RegistController {
  constructor(private readonly registService: RegistService) {}

  @Post()
  create(@Body() createRegistDto: CreateRegistDto) {
    return this.registService.create(createRegistDto);
  }

  @Get()
  findAll() {
    return this.registService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistDto: UpdateRegistDto) {
    return this.registService.update(+id, updateRegistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registService.remove(id);
  }

  @Get('/term/:term')
  temrby(@Param('term') term: string) {
    return this.registService.Search_term(term);
  }

  @Get('/lecturer/:lecturer')
  section(@Param('lecturer') lecturer: string) {
    return this.registService.Search_section(lecturer);
  }
}
