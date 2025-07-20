import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  instanceToPlain,
  plainToInstance,
} from 'class-transformer';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user: User = this.userRepo.create(createUserDto);
    const result: User = await this.userRepo.save(user);
    return instanceToPlain(result, { groups: ['response'] }) as UserResponseDto;
  }

  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.userRepo.find();
    return instanceToPlain(users, {
      groups: ['response'],
    }) as UserResponseDto[];
  }

  async findOne(id: number): Promise<UserResponseDto | null> {
    const user = await this.userRepo.findOneBy({ id });
    return instanceToPlain(user, { groups: ['response'] });
  }

  async update(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto | null> {
    const user: User | null = await this.userRepo.findOneBy({ id });
    if (!user) return null;
    const updateUser = plainToInstance(User, updateUserDto);
    const result = await this.userRepo.save(Object.assign(user, updateUser));
    return instanceToPlain(result, { exposeUnsetFields: false });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
