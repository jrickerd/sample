import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { ReverseService } from './reverse/reverse.service';
import { FibonacciResponseDto } from './fibonacci/fibonacci-response.dto';
import { ReverseResponseDto } from './reverse/reverse-response.dto';

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

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('reverse')
  reverse(
    @Query('number', ParseIntPipe) candidateNumber: number,
  ): ReverseResponseDto {
    return this.reverseService.reverse(candidateNumber);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('fibonacci')
  fibonacci(
    @Query('number', ParseIntPipe) candidateNumber: number,
  ): FibonacciResponseDto {
    return this.fibonacciService.fibonacci(candidateNumber);
  }
}
