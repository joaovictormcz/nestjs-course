import { PrismaService } from "src/infra/prisma.service";
import { UsernameAndEmail, UserCreatedDTO, CreateUserDTO } from "../../dto/user.dto";
import { IUserRepository } from "../user.repository";
export declare class UserPrismaRepository implements IUserRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO>;
    save(data: CreateUserDTO): Promise<UserCreatedDTO>;
}
