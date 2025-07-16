import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  fibonacci(cardinality: number): number {
    if (cardinality <= 1) {
      return cardinality;
    }
    return this.fibonacci(cardinality - 2) + this.fibonacci(cardinality - 1);
  }
}
