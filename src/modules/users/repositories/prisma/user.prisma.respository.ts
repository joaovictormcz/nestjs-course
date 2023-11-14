import { PrismaService } from "src/infra/prisma.service";
import {
  UsernameAndEmail,
  UserCreatedDTO,
  CreateUserDTO,
} from "../../dto/user.dto";
import { IUserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUsernameOrEmail(data: UsernameAndEmail): Promise<UserCreatedDTO> {
    return await this.prisma.users.findFirst({
      where: {
        OR: [{ username: data.username }, { email: data.email }],
      },
    });
  }
  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    return await this.prisma.users.create({
      data,
    });
  }
}