import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { PrismaService } from "src/infra/prisma.service";
import { UserPrismaRepository } from "./repositories/prisma/user.prisma.respository";
import { IUserRepository } from "./repositories/user.repository";
import { ProfileUserUseCase } from "./useCases/profile-user.usercase";
import { MulterModule } from "@nestjs/platform-express";
import { UploadAvataruserUseCase } from "./useCases/upload-avatar-user.usecase";
import { IStorage } from "src/infra/providers/storage/storage";
import { SupabaseStorage } from "src/infra/providers/storage/supabase.storage";

@Module({
  imports: [
    MulterModule.register({
      dest: "./uploads",
      preservePath: true,
    }),
  ],
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    ProfileUserUseCase,
    UploadAvataruserUseCase,
    PrismaService,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
    {
      provide: IStorage,
      useClass: SupabaseStorage,
    },
  ],
})
export class UserModule {}
