import { Expose } from 'class-transformer';

export class ReverseResponseDto {
  constructor(result: number) {
    this.result = result;
  }

  @Expose()
  result: number;
}
