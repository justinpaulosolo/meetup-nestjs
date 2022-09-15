import { Injectable } from '@nestjs/common';
import { UserService } from "../../user/services/user.service";
import { comparePassword } from "../../utils/helpers";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const password = await comparePassword(pass, user.password);
    if (password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
