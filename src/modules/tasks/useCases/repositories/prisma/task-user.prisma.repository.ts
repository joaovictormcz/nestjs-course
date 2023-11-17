import { PrismaService } from "src/infra/prisma.service";
import {
  TaskUserRequestDTO,
  TaskUserResponseDTO,
} from "../../dto/task-user.dto";
import { ITaskUserRepository } from "../task-user.repository";

export class TaskUserPrismaRepository implements ITaskUserRepository {
  constructor(private prisma: PrismaService) {}
  save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    return this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            description: data.description,
            endAt: data.endAt,
            priority: data.priority,
            startAt: data.startAt,
            title: data.title,
            status: data.status,
          },
        },
        user: {
          connect: {
            id: data.userId,
          },
        },
      },
    });
  }
}
