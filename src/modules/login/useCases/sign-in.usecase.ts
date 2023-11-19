import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcrypt";
import { PrismaService } from "src/infra/prisma.service";
import { SignInDTO } from "../dto/sign-in.dto";

@Injectable()
export class SignInUseCase {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async execute(data: SignInDTO) {
    // Validar se username existe no meu banco
    const user = await this.prisma.user.findFirst({
      where: {
        username: data.username,
      },
    });

    // Nao existe - Retorna error
    if (!user) {
      throw new UnauthorizedException();
    }

    // Sim - Validar a senha
    const isEqualPassword = await compare(data.password, user.password);

    if (!isEqualPassword) {
      throw new UnauthorizedException();

      // Nao - Retornar o error
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    const token = await this.jwtService.signAsync(payload);

    // Sim - Gerar Token
    return {
      access_token: token,
    };
  }
}
