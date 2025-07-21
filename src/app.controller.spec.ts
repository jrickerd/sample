import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { ReverseService } from './reverse/reverse.service';
import { FibonacciResponseDto } from './fibonacci/fibonacci-response.dto';
import { ReverseResponseDto } from './reverse/reverse-response.dto';
import { ReverseRequestDto } from './reverse/reverse-request.dto';
import { FibonacciRequestDto } from './fibonacci/fibonacci-request.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoEntity } from './memoize/entities/memo.entity';
import { MemoizeModule } from './memoize/memoize.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MemoizeModule,
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory',
          entities: [MemoEntity],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([MemoEntity]),
      ],
      controllers: [AppController],
      providers: [AppService, FibonacciService, ReverseService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return a fibonacci', async () => {
      expect(await appController.fibonacci(new FibonacciRequestDto(3))).toEqual(
        new FibonacciResponseDto(2),
      );
    });

    it('should return a reversed integer', () => {
      expect(appController.reverse(new ReverseRequestDto(321))).toEqual(
        new ReverseResponseDto(123),
      );
    });
  });
});
