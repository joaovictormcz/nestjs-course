import { CreateUserUseCase } from "./useCases/create-user.usercase";
import { ProfileUserUseCase } from "./useCases/profile-user.usercase";
import { CreateUserSchemaDTO } from "./schemas/create-user.schema";
import { FileDTO } from "./dto/user.dto";
export declare class UserController {
    private readonly createUserUseCase;
    private readonly profileUserUseCase;
    constructor(createUserUseCase: CreateUserUseCase, profileUserUseCase: ProfileUserUseCase);
    create(data: CreateUserSchemaDTO): Promise<{
        name: string;
        email: string;
        username: string;
    }>;
    profile(req: any): Promise<import("./dto/user.dto").UserCreatedDTO | null>;
    uploadAvatar(req: any, file: FileDTO): Promise<void>;
}
