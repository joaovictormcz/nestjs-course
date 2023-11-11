import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.service";

export type CreateUserDTO = {
  username: string;
  password: string;
  email: string;
  name: string;
};

@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(data: CreateUserDTO) {
    const user = await this.prisma.users.findFirst({
      where: {
        OR: [{ username: data.username }, { email: data.email }],
      },
    });

    if (user) {
      throw new Error("User already exists!");
    }

    return await this.prisma.users.create({
      data,
    });
  }
}
