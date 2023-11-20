import { FileDTO } from "src/modules/users/dto/user.dto";
import { IStorage } from "./storage";
export declare class SupabaseStorage implements IStorage {
    private client;
    constructor();
    upload(file: FileDTO, folder: string): Promise<any>;
}
