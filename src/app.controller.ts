import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { ReverseService } from './reverse/reverse.service';
import { FibonacciResponseDto } from './fibonacci/fibonacci-response.dto';
import { ReverseResponseDto } from './reverse/reverse-response.dto';
import { ReverseRequestDto } from './reverse/reverse-request.dto';
import { FibonacciRequestDto } from './fibonacci/fibonacci-request.dto';

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
  reverse(@Query() reverseRequest: ReverseRequestDto): ReverseResponseDto {
    return this.reverseService.reverse(reverseRequest.candidate);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('fibonacci')
  fibonacci(
    @Query() fibonacciRequest: FibonacciRequestDto,
  ): FibonacciResponseDto {
    return this.fibonacciService.fibonacci(fibonacciRequest.candidate);
  }
}
