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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const create_user_usercase_1 = require("./useCases/create-user.usercase");
const profile_user_usercase_1 = require("./useCases/profile-user.usercase");
const create_user_schema_1 = require("./schemas/create-user.schema");
const platform_express_1 = require("@nestjs/platform-express");
const upload_avatar_user_usecase_1 = require("./useCases/upload-avatar-user.usecase");
const auth_guard_provider_1 = require("../../infra/providers/auth-guard.provider");
let UserController = class UserController {
    constructor(createUserUseCase, profileUserUseCase, uploadAvatarUserUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.profileUserUseCase = profileUserUseCase;
        this.uploadAvatarUserUseCase = uploadAvatarUserUseCase;
    }
    async create(data) {
        const user = await this.createUserUseCase.execute(data);
        return create_user_schema_1.CreateUserResponseSchemaDTO.parse(user);
    }
    async profile(req) {
        return this.profileUserUseCase.execute(req.user.sub);
    }
    async uploadAvatar(req, file) {
        const result = await this.uploadAvatarUserUseCase.execute({
            file,
            idUser: req.user.sub,
        });
        return result;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_schema_1.CreateUserSchemaDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/profile"),
    (0, common_1.UseGuards)(auth_guard_provider_1.AuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profile", null);
__decorate([
    (0, common_1.Put)("/avatar"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    (0, common_1.UseGuards)(auth_guard_provider_1.AuthGuard),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadAvatar", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("/users"),
    __metadata("design:paramtypes", [create_user_usercase_1.CreateUserUseCase,
        profile_user_usercase_1.ProfileUserUseCase,
        upload_avatar_user_usecase_1.UploadAvataruserUseCase])
], UserController);
//# sourceMappingURL=user.controller.js.map