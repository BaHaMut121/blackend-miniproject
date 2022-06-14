import { Injectable } from '@nestjs/common';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
import { registration } from './entities/registration.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class RegistrationService {
  constructor(
    @InjectRepository(registration)
    private registRepository: Repository<registration>,
  ) {}
  create(createRegistrationDto: CreateRegistrationDto) {
    return 'This action adds a new registration';
  }

  findAll() {
    return this.registRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} registration`;
  }

  update(id: number, updateRegistrationDto: UpdateRegistrationDto) {
    return `This action updates a #${id} registration`;
  }

  async remove(id: string): Promise<void> {
    await this.registRepository.delete(id);
  }
  Search_semesterm(semesterm: string): Promise<registration[]> {
    return this.registRepository.find({
      where: {
        semesterm,
      },
    });
  }
}
