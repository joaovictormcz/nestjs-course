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
exports.UserPrismaRepository = void 0;
const prisma_service_1 = require("../../../../infra/prisma.service");
const common_1 = require("@nestjs/common");
let UserPrismaRepository = class UserPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByUsername(username) {
        return this.prisma.user.findFirst({
            where: { username },
        });
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }
    async findByUsernameOrEmail(data) {
        return await this.prisma.user.findFirst({
            where: {
                OR: [{ username: data.username }, { email: data.email }],
            },
        });
    }
    async save(data) {
        return await this.prisma.user.create({
            data,
        });
    }
    async uploadAvatar(id, path) {
        await this.prisma.user.update({
            data: {
                avatarUrl: path,
            },
            where: {
                id,
            },
        });
    }
};
exports.UserPrismaRepository = UserPrismaRepository;
exports.UserPrismaRepository = UserPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserPrismaRepository);
//# sourceMappingURL=user.prisma.respository.js.map