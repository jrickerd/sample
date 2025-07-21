import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemoEntity } from './entities/memo.entity';

@Injectable()
export class MemoizeService {
  constructor(
    @InjectRepository(MemoEntity) private memoRepo: Repository<MemoEntity>,
  ) {}

  async get(key: number): Promise<number | null> {
    const memo: MemoEntity | null = await this.memoRepo.findOneBy({ key });
    return memo?.value ?? null;
  }

  async set(key: number, value: number): Promise<void> {
    const memo = new MemoEntity(key, value);
    await this.memoRepo.save(memo);
  }
}
