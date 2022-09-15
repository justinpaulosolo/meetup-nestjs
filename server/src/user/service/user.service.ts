import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { hashPassword } from "../../utils/helpers";

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
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email }
    });
    if(existingUser)
      throw new HttpException('User already exists.', HttpStatus.CONFLICT);
    const password = await hashPassword(user.password);
    const newUser = this.userRepository.create({ ...user, password })
    return await this.userRepository.save(newUser);
  }

  async findOne (id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: { id: id }
    });
  }
}
