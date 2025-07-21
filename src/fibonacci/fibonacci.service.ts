import { Injectable } from '@nestjs/common';
import { FibonacciResponseDto } from './fibonacci-response.dto';
import { MemoizeService } from '../memoize/memoize.service';

@Injectable()
export class FibonacciService {
  constructor(private memoService: MemoizeService) {}

  private async compute(cardinality: number): Promise<number> {
    if (cardinality <= 1) {
      return cardinality;
    }

    const lookup: number | null = await this.memoService.get(cardinality);
    if (lookup) {
      return lookup;
    }

    const leftCall: number = await this.compute(cardinality - 2);
    await this.memoService.set(cardinality - 2, leftCall);
    const rightCall: number = await this.compute(cardinality - 1);
    await this.memoService.set(cardinality - 1, rightCall);

    return leftCall + rightCall;
  }

  async fibonacci(cardinality: number): Promise<FibonacciResponseDto> {
    return new FibonacciResponseDto(await this.compute(cardinality));
  }
}
