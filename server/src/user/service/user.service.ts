import { Inject, Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import {CreateUserDto} from "../dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: CreateUserDto){
    await this.userRepository.save(user);
  }
}
