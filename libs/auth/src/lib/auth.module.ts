import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
//import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PrismaManagerService } from '@ng-board/prisma-manager';

@Module({
  imports: [
    //PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: process.env['SECRETKEY'],
      signOptions: { expiresIn: '1h' }, 
    }),
    //UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaManagerService, LocalStrategy],
  //exports: [AuthService, LocalStrategy],
})
export class AuthModule {}
