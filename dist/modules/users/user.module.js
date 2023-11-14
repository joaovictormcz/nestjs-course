"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const create_user_usercase_1 = require("./useCases/create-user.usercase");
const prisma_service_1 = require("../../infra/prisma.service");
const user_prisma_respository_1 = require("./repositories/prisma/user.prisma.respository");
const user_repository_1 = require("./repositories/user.repository");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [user_controller_1.UserController],
        providers: [create_user_usercase_1.CreateUserUseCase, prisma_service_1.PrismaService, {
                provide: user_repository_1.IUserRepository,
                useClass: user_prisma_respository_1.UserPrismaRepository,
            }],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map