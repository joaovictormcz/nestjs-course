"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadAvataruserUseCase = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
const storage_1 = require("../../../infra/providers/storage/storage");
let UploadAvataruserUseCase = class UploadAvataruserUseCase {
    constructor(storage, userRepository) {
        this.storage = storage;
        this.userRepository = userRepository;
    }
    async execute(data) {
        const file = await this.storage.upload(data.file, "avatar");
        console.log(file);
        return file;
    }
};
exports.UploadAvataruserUseCase = UploadAvataruserUseCase;
exports.UploadAvataruserUseCase = UploadAvataruserUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [storage_1.IStorage,
        user_repository_1.IUserRepository])
], UploadAvataruserUseCase);
//# sourceMappingURL=upload-avatar-user.usecase.js.map