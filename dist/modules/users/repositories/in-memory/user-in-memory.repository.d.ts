import { UserCreatedDTO, UsernameAndEmail, CreateUserDTO } from "../../dto/user.dto";
import { IUserRepository } from "../user.repository";
export declare class UserInMemoryRepository implements IUserRepository {
    users: UserCreatedDTO[];
    findById(id: string): Promise<UserCreatedDTO | null>;
    findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO | null>;
    save(data: CreateUserDTO): Promise<UserCreatedDTO>;
    uploadAvatar(id: string, path: string): Promise<void>;
}
