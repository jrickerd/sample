import { Injectable } from '@nestjs/common';
import { NumberService } from '../number/number.service';

@Injectable()
export class FibonacciService {
  constructor(private readonly numberService: NumberService) {}

  fibonacci(cardinality: number): number {
    if (!this.numberService.validateInteger(cardinality)) {
      throw new TypeError(`The parameter ${cardinality} is not an integer.`);
    }
    if (cardinality <= 1) {
      return cardinality;
    }
    return this.fibonacci(cardinality - 2) + this.fibonacci(cardinality - 1);
  }
}
