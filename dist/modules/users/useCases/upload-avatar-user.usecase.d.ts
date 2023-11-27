import { AvatarDTO } from "../dto/user.dto";
import { IUserRepository } from "../repositories/user.repository";
import { IStorage } from "../../../infra/providers/storage/storage";
export declare class UploadAvataruserUseCase {
    private storage;
    private userRepository;
    constructor(storage: IStorage, userRepository: IUserRepository);
    execute(data: AvatarDTO): Promise<any>;
}
