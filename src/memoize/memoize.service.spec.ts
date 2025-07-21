import { Test, TestingModule } from '@nestjs/testing';
import { MemoizeService } from './memoize.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoEntity } from './entities/memo.entity';

describe('MemoizeService', () => {
  let service: MemoizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory',
          entities: [MemoEntity],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([MemoEntity]),
      ],
      providers: [MemoizeService],
    }).compile();

    service = module.get<MemoizeService>(MemoizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
