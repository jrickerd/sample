import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReverseService } from './reverse/reverse.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { MemoizeModule } from './memoize/memoize.module';

@Module({
  imports: [
    UserModule,
    FibonacciModule,
    MemoizeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ReverseService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
