import { PrismaService } from "src/infra/prisma.service";
import { TaskUserRequestDTO, TaskUserResponseDTO } from "../../dto/task-user.dto";
import { ITaskUserRepository } from "../task-user.repository";
export declare class TaskUserPrismaRepository implements ITaskUserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO>;
}
