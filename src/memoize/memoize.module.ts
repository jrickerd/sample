import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoEntity } from './entities/memo.entity';
import { AppController } from '../app.controller';
import { MemoizeService } from './memoize.service';

@Module({
  imports: [TypeOrmModule.forFeature([MemoEntity])],
  providers: [MemoizeService],
  exports: [MemoizeService],
})
export class MemoizeModule {}
