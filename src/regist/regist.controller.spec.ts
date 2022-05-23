import { Test, TestingModule } from '@nestjs/testing';
import { RegistController } from './regist.controller';
import { RegistService } from './regist.service';

describe('RegistController', () => {
  let controller: RegistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistController],
      providers: [RegistService],
    }).compile();

    controller = module.get<RegistController>(RegistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
