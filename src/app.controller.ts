import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { NumberService } from './number/number.service';
import { ReverseService } from './reverse/reverse.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly fibonacciService: FibonacciService,
    private readonly numberService: NumberService,
    private readonly reverseService: ReverseService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('reverse')
  reverse(@Query('number') candidateNumber: string) {
    const numberToReverse = this.numberService.getNumber(candidateNumber);
    try {
      return this.reverseService.reverse(numberToReverse);
    } catch (err: any) {
      throw new BadRequestException(err.message);
    }
  }

  @Get('fibonacci')
  fibonacci(@Query('number') candidateNumber: string) {
    const numberToReverse = this.numberService.getNumber(candidateNumber);
    try {
      return this.fibonacciService.fibonacci(numberToReverse);
    } catch (err: any) {
      throw new BadRequestException(err.message);
    }
  }
}
