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
exports.TaskUserPrismaRepository = void 0;
const prisma_service_1 = require("../../../../infra/prisma.service");
const common_1 = require("@nestjs/common");
let TaskUserPrismaRepository = class TaskUserPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    save(data) {
        return this.prisma.taskUser.create({
            data: {
                task: {
                    create: {
                        description: data.description,
                        endAt: data.endAt,
                        priority: data.priority,
                        startAt: data.startAt,
                        title: data.title,
                        status: data.status,
                    },
                },
                user: {
                    connect: {
                        id: data.userId,
                    },
                },
            },
        });
    }
};
exports.TaskUserPrismaRepository = TaskUserPrismaRepository;
exports.TaskUserPrismaRepository = TaskUserPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaskUserPrismaRepository);
//# sourceMappingURL=task-user.prisma.repository.js.map