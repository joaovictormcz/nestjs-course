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
exports.SignInUseCase = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const prisma_service_1 = require("../../../infra/prisma.service");
let SignInUseCase = class SignInUseCase {
    constructor(jwtService, prisma) {
        this.jwtService = jwtService;
        this.prisma = prisma;
    }
    async execute(data) {
        const user = await this.prisma.user.findFirst({
            where: {
                username: data.username,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const isEqualPassword = await (0, bcrypt_1.compare)(data.password, user.password);
        if (!isEqualPassword) {
            throw new common_1.UnauthorizedException();
        }
        const payload = {
            sub: user.id,
            username: user.username,
        };
        const token = await this.jwtService.signAsync(payload);
        return {
            access_token: token,
        };
    }
};
exports.SignInUseCase = SignInUseCase;
exports.SignInUseCase = SignInUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        prisma_service_1.PrismaService])
], SignInUseCase);
//# sourceMappingURL=sign-in.usecase.js.map