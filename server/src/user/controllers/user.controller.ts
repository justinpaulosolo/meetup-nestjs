import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import {CreateUserDto} from "../dto/create-user.dto";
import { User } from "../entities/user.entity";

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

}
