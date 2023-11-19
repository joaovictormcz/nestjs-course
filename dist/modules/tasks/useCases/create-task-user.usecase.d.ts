import { TaskUserRequestDTO } from "../dto/task-user.dto";
import { ITaskUserRepository } from "../repositories/task-user.repository";
export declare class CreateTaskUserUseCase {
    private taskUserRepository;
    constructor(taskUserRepository: ITaskUserRepository);
    execute(data: TaskUserRequestDTO): Promise<import("../dto/task-user.dto").TaskUserResponseDTO>;
}
