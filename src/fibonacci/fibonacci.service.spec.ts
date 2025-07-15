import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciService } from './fibonacci.service';
import { NumberService } from '../number/number.service';

describe('FibonacciService', () => {
  let service: FibonacciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FibonacciService, NumberService],
    }).compile();

    service = module.get<FibonacciService>(FibonacciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 0 for cardinality 0', () => {
    expect(service.fibonacci(0)).toBe(0);
  });

  it('should return 1 for cardinality 1', () => {
    expect(service.fibonacci(1)).toBe(1);
  });

  it('should return 8 for cardinality 6', () => {
    expect(service.fibonacci(6)).toBe(8);
  });

  it('should throw TypeError for float', () => {
    expect(() => {
      service.fibonacci(1.1);
    }).toThrow(TypeError);
  });
});
