import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciService } from './fibonacci/fibonacci.service';
import { NumberService } from './number/number.service';
import { ReverseService } from './reverse/reverse.service';
import { BadRequestException } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, FibonacciService, NumberService, ReverseService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });

    it('should return a fibonacci', () => {
      expect(appController.fibonacci('3')).toBe(2);
    });

    it('should return a reversed integer', () => {
      expect(appController.reverse('321')).toBe(123);
    });

    it('should throw error for bad input', () => {
      expect(() => {
        appController.reverse('a');
      }).toThrow(BadRequestException);
    });

    it('should throw error for bad input', () => {
      expect(() => {
        appController.fibonacci('a');
      }).toThrow(BadRequestException);
    });
  });
});
