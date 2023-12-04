import { randomUUID } from "crypto";
import {
  UserCreatedDTO,
  UsernameAndEmail,
  CreateUserDTO,
} from "../../dto/user.dto";
import { IUserRepository } from "../user.repository";

export class UserInMemoryRepository implements IUserRepository {
  users: UserCreatedDTO[] = [];

  findById(id: string): Promise<UserCreatedDTO | null> {
    throw new Error("Method not implemented.");
  }

  async findByUsernameOrEmail(
    data: UsernameAndEmail,
  ): Promise<UserCreatedDTO | null> {
    const findUser = this.users.find(
      (user) => user.username === data.username || user.email === data.email,
    );
    return findUser ?? null;
  }

  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    const user: UserCreatedDTO = {
      ...data,
      id: randomUUID(),
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  uploadAvatar(id: string, path: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
