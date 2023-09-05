import { Module } from '@nestjs/common';
import { PrismaManagerService } from './prisma-manager.service';

@Module({
    controllers: [],
    providers: [PrismaManagerService],
    imports: [],
    exports: [PrismaManagerService],
})
export class PrismaManagerModule {}
