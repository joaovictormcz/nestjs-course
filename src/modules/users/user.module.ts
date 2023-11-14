import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { PrismaService } from "src/infra/prisma.service";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.respository";
import { IUserRepository } from "./repositories/user.repository";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class UserModule {}
