import { Injectable } from '@nestjs/common';
import { FibonacciResponseDto } from './fibonacci-response.dto';

@Injectable()
export class FibonacciService {
  private compute(cardinality: number): number {
    if (cardinality <= 1) {
      return cardinality;
    }
    return this.compute(cardinality - 2) + this.compute(cardinality - 1);
  }

  fibonacci(cardinality: number): FibonacciResponseDto {
    return new FibonacciResponseDto(this.compute(cardinality));
  }
}
