import { Test, TestingModule } from '@nestjs/testing';
import { RegistService } from './regist.service';

describe('RegistService', () => {
  let service: RegistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistService],
    }).compile();

    service = module.get<RegistService>(RegistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
