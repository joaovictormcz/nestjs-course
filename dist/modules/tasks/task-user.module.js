"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskUserModule = void 0;
const common_1 = require("@nestjs/common");
const task_user_controller_1 = require("./task-user.controller");
const create_task_user_usecase_1 = require("./useCases/create-task-user.usecase");
const prisma_service_1 = require("../../infra/prisma.service");
const task_user_prisma_repository_1 = require("./repositories/prisma/task-user.prisma.repository");
const task_user_repository_1 = require("./repositories/task-user.repository");
let TaskUserModule = class TaskUserModule {
};
exports.TaskUserModule = TaskUserModule;
exports.TaskUserModule = TaskUserModule = __decorate([
    (0, common_1.Module)({
        controllers: [task_user_controller_1.TaskUserController],
        providers: [
            prisma_service_1.PrismaService,
            create_task_user_usecase_1.CreateTaskUserUseCase,
            {
                provide: task_user_repository_1.ITaskUserRepository,
                useClass: task_user_prisma_repository_1.TaskUserPrismaRepository,
            },
        ],
    })
], TaskUserModule);
//# sourceMappingURL=task-user.module.js.map