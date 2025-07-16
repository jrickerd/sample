import { IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class FibonacciRequestDto {
  constructor(candidate: number) {
    this.candidate = candidate;
  }

  @IsInt()
  @Type(() => Number)
  candidate: number;
}
