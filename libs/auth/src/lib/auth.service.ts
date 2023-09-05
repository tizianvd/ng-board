import {
    Injectable,
    Logger
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  import { compare, hash } from 'bcrypt';
  import { CreateUserDto } from './dto/create-user.dto';
  import { AuthEntity } from './entity/auth.entity';
import { PrismaManagerService } from '@ng-board/prisma-manager';
  
  @Injectable()
  export class AuthService {
    constructor(private jwtService: JwtService, private prisma: PrismaManagerService) {}
    async validateUser(login: string, password: string) {
      const user = await this.prisma.user.findUnique({ where: { email: login } });
  
      Logger.log(`Login: ${login} password:${password}`);
  
      if (!user) {
        return null;
      }
  
      const isPasswordValid = compare(user.password, password);
  
      if (!isPasswordValid) {
        return null;
      }
  
      return user;
    }
    async login(user: any): Promise<AuthEntity> {
      Logger.log(user.username);
      const payload = {
        login: user.login,
        sub: user.id,
      };
  
      return {
        accessToken: this.jwtService.sign(payload),
      };
    }
    async register(data: CreateUserDto) {
      return this.prisma.user.create({
        data: {
          email: data.login,
          username: data.username,
          password: await hash(data.password, 10),
        },
      });
    }
  }
  