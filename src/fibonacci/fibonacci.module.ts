import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { FibonacciService } from './fibonacci.service';
import { MemoizeModule } from '../memoize/memoize.module';

@Module({
  imports: [MemoizeModule],
  providers: [FibonacciService],
  exports: [FibonacciService],
})
export class FibonacciModule {}
