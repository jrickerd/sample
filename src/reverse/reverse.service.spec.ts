import { Test, TestingModule } from '@nestjs/testing';
import { ReverseService } from './reverse.service';
import { ReverseResponseDto } from './reverse-response.dto';

describe('ReverseService', () => {
  let service: ReverseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReverseService],
    }).compile();

    service = module.get<ReverseService>(ReverseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should reverse int', () => {
    expect(service.reverse(123456789)).toEqual(
      new ReverseResponseDto(987654321),
    );
  });

  it('should return 0 for int larger than 2**31 - 1', () => {
    expect(service.reverse(2 ** 31)).toEqual(new ReverseResponseDto(0));
  });
});
