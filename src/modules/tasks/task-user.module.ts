import { Module } from "@nestjs/common";
import { TaskUserController } from "./task-user.controller";
import { CreateTaskUserUseCase } from "./useCases/create-task-user.usecase";
import { PrismaService } from "src/infra/prisma.service";
import { TaskUserPrismaRepository } from "./repositories/prisma/task-user.prisma.repository";
import { ITaskUserRepository } from "./repositories/task-user.repository";

@Module({
  controllers: [TaskUserController],
  providers: [
    PrismaService,
    CreateTaskUserUseCase,
    {
      provide: ITaskUserRepository,
      useClass: TaskUserPrismaRepository,
    },
  ],
})
export class TaskUserModule {}
