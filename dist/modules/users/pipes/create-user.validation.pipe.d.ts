import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { CreateUserDTO } from "../dto/user.dto";
export declare class CreateUserValidationPipe implements PipeTransform {
    transform({ name, email, username, password }: CreateUserDTO, metadata: ArgumentMetadata): {
        name: string;
        email: string;
        username: string;
        password: string;
    };
}
