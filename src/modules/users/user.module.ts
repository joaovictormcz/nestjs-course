import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { PrismaService } from "src/infra/prisma.service";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.respository";
import { IUserRepository } from "./repositories/user.repository";
import { ProfileUserUseCase } from "./useCases/profile-user.usercase";
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({
    dest: './uploads',
    preservePath: true
  }),],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    ProfileUserUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
