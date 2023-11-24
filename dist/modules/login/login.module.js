"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const common_1 = require("@nestjs/common");
const login_controller_1 = require("./login.controller");
const sign_in_usecase_1 = require("./useCases/sign-in.usecase");
const prisma_service_1 = require("../../infra/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../users/repositories/user.repository");
const user_prisma_respository_1 = require("../users/repositories/prisma/user.prisma.respository");
let LoginModule = class LoginModule {
};
exports.LoginModule = LoginModule;
exports.LoginModule = LoginModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                secret: "NESTJS_CURSO",
                signOptions: { expiresIn: "60s" },
            }),
        ],
        controllers: [login_controller_1.LoginController],
        providers: [
            prisma_service_1.PrismaService,
            sign_in_usecase_1.SignInUseCase,
            {
                provide: user_repository_1.IUserRepository,
                useClass: user_prisma_respository_1.UserPrismaRepository,
            },
        ],
    })
], LoginModule);
//# sourceMappingURL=login.module.js.map