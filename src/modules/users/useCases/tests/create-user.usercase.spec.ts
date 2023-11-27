import { Test } from "@nestjs/testing";
import { CreateUserUseCase } from "../create-user.usercase";
import { CreateUserDTO } from "../../dto/user.dto";
import { IUserRepository } from "../../repositories/user.repository";
import { UserInMemoryRepository } from "../../repositories/in-memory/user-in-memory.repository";

describe("CreateUserUseCase", () => {
  let createUserUseCase: CreateUserUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        {
          provide: IUserRepository,
          useClass: UserInMemoryRepository,
          useValue: {
            findByUsernameOrEmail: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    createUserUseCase = moduleRef.get<CreateUserUseCase>(CreateUserUseCase);
  });

  it("Should be able to create a new user", async () => {
    const data: CreateUserDTO = {
      email: "test@example.com",
      name: "name test",
      password: "<PASSWORD>",
      username: "test user",
    };

    const result = await createUserUseCase.execute(data);
    expect(result).toHaveProperty("id");
    expect(result.password).not.toEqual(data.password);
  });

  it("Should not be able to create a new user if username already exists", async () => {
    const data: CreateUserDTO = {
      email: "test@example.com",
      name: "name test",
      password: "<PASSWORD>",
      username: "test user",
    };
    expect(createUserUseCase.execute(data)).rejects.toThrowError();

    await createUserUseCase.execute(data);
  });
});
