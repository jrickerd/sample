import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReverseService } from './reverse/reverse.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { NumberService } from './number/number.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ReverseService, FibonacciService, NumberService],
})
export class AppModule {}
