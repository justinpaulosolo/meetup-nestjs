import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import {UserService} from "../service/user.service";
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

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

}
