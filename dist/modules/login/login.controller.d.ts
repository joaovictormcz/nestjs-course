import { SignInDTO } from "./dto/sign-in.dto";
import { SignInUseCase } from "./useCases/sign-in.usecase";
export declare class LoginController {
    private signInUseCase;
    constructor(signInUseCase: SignInUseCase);
    signIn(signInDTO: SignInDTO): Promise<{
        access_token: string;
    }>;
}
