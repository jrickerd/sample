import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { ReverseService } from './reverse/reverse.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fibonacciService: FibonacciService,
    private readonly reverseService: ReverseService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('reverse')
  reverse(@Query('number', ParseIntPipe) candidateNumber: number) {
    return this.reverseService.reverse(candidateNumber);
  }

  @Get('fibonacci')
  fibonacci(@Query('number', ParseIntPipe) candidateNumber: number) {
    return this.fibonacciService.fibonacci(candidateNumber);
  }
}
