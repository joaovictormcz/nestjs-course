import { PrismaService } from "src/infra/prisma.service";
import { CreateUserDTO } from "../dto/user.dto";
export declare class CreateUserUseCase {
    private prisma;
    constructor(prisma: PrismaService);
    execute(data: CreateUserDTO): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        name: string;
        createdAt: Date;
    }>;
}
