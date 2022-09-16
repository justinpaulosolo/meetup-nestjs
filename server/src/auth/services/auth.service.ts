import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { comparePassword } from '../../utils/helpers';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const password = await comparePassword(pass, user.password);
    if (password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      user: {
        id: user.id,
        email: user.email,
      },
      access_token,
    };
  }
}
