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
exports.TaskUserController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_provider_1 = require("../../infra/providers/auth-guard.provider");
const create_task_user_usecase_1 = require("./useCases/create-task-user.usecase");
const task_user_schema_1 = require("./schemas/task-user.schema");
let TaskUserController = class TaskUserController {
    constructor(taskUserUseCase) {
        this.taskUserUseCase = taskUserUseCase;
    }
    async create(data, req) {
        return this.taskUserUseCase.execute({
            ...data,
            userId: req.user.sub,
        });
    }
};
exports.TaskUserController = TaskUserController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_provider_1.AuthGuard),
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_user_schema_1.CreateTaskUserSchemaDTO, Object]),
    __metadata("design:returntype", Promise)
], TaskUserController.prototype, "create", null);
exports.TaskUserController = TaskUserController = __decorate([
    (0, common_1.Controller)("/tasks"),
    __metadata("design:paramtypes", [create_task_user_usecase_1.CreateTaskUserUseCase])
], TaskUserController);
//# sourceMappingURL=task-user.controller.js.map