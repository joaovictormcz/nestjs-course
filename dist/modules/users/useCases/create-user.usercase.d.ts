import { CreateUserDTO } from "../dto/user.dto";
import { IUserRepository } from "../repositories/user.repository";
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(data: CreateUserDTO): Promise<import("../dto/user.dto").UserCreatedDTO>;
}
