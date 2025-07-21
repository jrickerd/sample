import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class MemoEntity {
  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
  }

  @PrimaryColumn('int')
  key: number;

  @Column('int')
  value: number;
}
