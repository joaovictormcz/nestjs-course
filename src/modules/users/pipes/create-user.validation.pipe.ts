import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  PipeTransform,
} from "@nestjs/common";
import { CreateUserDTO } from "../dto/user.dto";

export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, email, username, password }: CreateUserDTO,
    metadata: ArgumentMetadata,
  ) {
    if (!name || !email || !username || !password) {
      throw new HttpException(
        `[name, email, username, password] is required`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return { name, email, username, password };
  }
}
