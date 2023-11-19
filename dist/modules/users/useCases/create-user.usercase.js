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
var CreateUserUseCase_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_repository_1 = require("../repositories/user.repository");
let CreateUserUseCase = CreateUserUseCase_1 = class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.logger = new common_1.Logger(CreateUserUseCase_1.name);
    }
    async execute(data) {
        const user = await this.userRepository.findByUsernameOrEmail({
            username: data.username,
            email: data.email,
        });
        if (user) {
            this.logger.error('User ${data.username} already exists...', data);
            throw new common_1.HttpException("User already exists!", common_1.HttpStatus.BAD_REQUEST);
        }
        const password = await (0, bcrypt_1.hash)(data.password, 10);
        return await this.userRepository.save({
            ...data,
            password,
        });
    }
};
exports.CreateUserUseCase = CreateUserUseCase;
exports.CreateUserUseCase = CreateUserUseCase = CreateUserUseCase_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.IUserRepository])
], CreateUserUseCase);
//# sourceMappingURL=create-user.usercase.js.map