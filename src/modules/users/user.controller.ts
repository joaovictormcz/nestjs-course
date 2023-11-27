import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { CreateUserUseCase } from "./useCases/create-user.usercase";

import { ProfileUserUseCase } from "./useCases/profile-user.usercase";
import {
  CreateUserResponseSchemaDTO,
  CreateUserSchemaDTO,
} from "./schemas/create-user.schema";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileDTO } from "./dto/user.dto";
import { UploadAvataruserUseCase } from "./useCases/upload-avatar-user.usecase";
import { AuthGuard } from "../../infra/providers/auth-guard.provider";

@Controller("/users")
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly profileUserUseCase: ProfileUserUseCase,
    private readonly uploadAvatarUserUseCase: UploadAvataruserUseCase
  ) {}

  @Post()
  // @UsePipes(new CreateUserValidationPipe())
  async create(@Body() data: CreateUserSchemaDTO) {
    const user = await this.createUserUseCase.execute(data);
    return CreateUserResponseSchemaDTO.parse(user);
  }

  @Get("/profile")
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return this.profileUserUseCase.execute(req.user.sub);
  }

  @Put("/avatar")
  @UseInterceptors(FileInterceptor("file"))
  @UseGuards(AuthGuard)
  async uploadAvatar(@Request() req, @UploadedFile() file: FileDTO) {
    const result = await this.uploadAvatarUserUseCase.execute({
      file,
      idUser: req.user.sub,
    });
    return result;
  }
}
