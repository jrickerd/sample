import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciService } from './fibonacci.service';
import { FibonacciResponseDto } from './fibonacci-response.dto';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibonacciService],
    }).compile();

    service = module.get<FibonacciService>(FibonacciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return dto with result 0 for cardinality 0', () => {
    expect(service.fibonacci(0)).toEqual(new FibonacciResponseDto(0));
  });

  it('should return 1 for cardinality 1', () => {
    expect(service.fibonacci(1)).toEqual(new FibonacciResponseDto(1));
  });

  it('should return 8 for cardinality 6', () => {
    expect(service.fibonacci(6)).toEqual(new FibonacciResponseDto(8));
  });
});
