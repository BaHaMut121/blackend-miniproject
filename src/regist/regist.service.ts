import { Injectable } from '@nestjs/common';
import { CreateRegistDto } from './dto/create-regist.dto';
import { UpdateRegistDto } from './dto/update-regist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { regist } from './entities/regist.entity';

@Injectable()
export class RegistService {
  constructor(
    @InjectRepository(regist)
    private registRepository: Repository<regist>,
  ) {}
  create(createRegistDto: CreateRegistDto) {
    return this.registRepository.save(createRegistDto);
  }

  findAll() {
    return this.registRepository.find();
  }

  findOne(id: string) {
    return this.registRepository.findOne(id);
  }

  update(id: number, updateRegistDto: UpdateRegistDto) {
    return this.registRepository.update(+id, updateRegistDto);
  }
  Search_term(term: string): Promise<regist[]> {
    return this.registRepository.find({
      where: {
        term,
      },
    });
  }
  Search_section(lecturer: string): Promise<regist[]> {
    return this.registRepository.find({
      where: {
        lecturer,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.registRepository.delete(id);
  }
}
