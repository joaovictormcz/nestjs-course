import { Module } from "@nestjs/common";
import { LoginController } from "./login.controller";
import { SignInUseCase } from "./useCases/sign-in.usecase";
import { PrismaService } from "src/infra/prisma.service";
import { JwtModule } from "@nestjs/jwt";
import { IUserRepository } from "../users/repositories/user.repository";
import { UserPrismaRepository } from "../users/repositories/prisma/user.prisma.respository";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "NESTJS_CURSO",
      signOptions: { expiresIn: "60s" },
    }),
  ],
  controllers: [LoginController],
  providers: [
    PrismaService,
    SignInUseCase,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class LoginModule {}
