import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/createUser.dto';
import { CredentialsDto } from './dto/credensials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.authService.signUp(createUserDto);
  }

  @Post('signin')
  async signIn(
    @Body() credentialsDto: CredentialsDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(credentialsDto);
  }
}
