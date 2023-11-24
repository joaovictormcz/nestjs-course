import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/infra/prisma.service";
import { SignInDTO } from "../dto/sign-in.dto";
export declare class SignInUseCase {
    private jwtService;
    private prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    execute(data: SignInDTO): Promise<{
        access_token: string;
    }>;
}
