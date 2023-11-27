import { CreateUserDTO, UserCreatedDTO, UsernameAndEmail } from "../dto/user.dto";
export declare abstract class IUserRepository {
    abstract findById(id: string): Promise<UserCreatedDTO | null>;
    abstract findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO | null>;
    abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;
    abstract uploadAvatar(id: string, path: string): Promise<void>;
}
