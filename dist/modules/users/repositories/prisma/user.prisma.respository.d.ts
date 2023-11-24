import { PrismaService } from "src/infra/prisma.service";
import { UsernameAndEmail, UserCreatedDTO, CreateUserDTO } from "../../dto/user.dto";
import { IUserRepository } from "../user.repository";
export declare class UserPrismaRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByUsername(username: string): Promise<UserCreatedDTO | null>;
    findById(id: string): Promise<UserCreatedDTO | null>;
    findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO | null>;
    save(data: CreateUserDTO): Promise<UserCreatedDTO>;
}
