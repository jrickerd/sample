import { Expose } from 'class-transformer';

export class FibonacciResponseDto {
  constructor(result: number) {
    this.result = result;
  }

  @Expose()
  result: number;
}
