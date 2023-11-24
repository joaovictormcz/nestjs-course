import { CreateTaskUserUseCase } from "./useCases/create-task-user.usecase";
import { CreateTaskUserSchemaDTO } from "./schemas/task-user.schema";
export declare class TaskUserController {
    private taskUserUseCase;
    constructor(taskUserUseCase: CreateTaskUserUseCase);
    create(data: CreateTaskUserSchemaDTO, req: any): Promise<import("./dto/task-user.dto").TaskUserResponseDTO>;
}
