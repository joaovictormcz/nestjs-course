import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { CreateUserDTO } from "./dto/user.dto";
export declare class UserController {
    private readonly createUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase);
    create(data: CreateUserDTO): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        name: string;
        createdAt: Date;
    }>;
}
