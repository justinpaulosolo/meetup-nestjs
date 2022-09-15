import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "../service/user.service";
import {CreateUserDto} from "../dto/create-user.dto";

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('test')
  test() {
    console.log('test');
    return { msg: 'test'};
  }

}
