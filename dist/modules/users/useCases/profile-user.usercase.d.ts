import { IUserRepository } from "../repositories/user.repository";
export declare class ProfileUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(id: string): Promise<import("../dto/user.dto").UserCreatedDTO | null>;
}
