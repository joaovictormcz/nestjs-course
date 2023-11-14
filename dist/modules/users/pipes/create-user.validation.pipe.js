"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidationPipe = void 0;
const common_1 = require("@nestjs/common");
class CreateUserValidationPipe {
    transform({ name, email, username, password }, metadata) {
        if (!name || !email || !username || !password) {
            throw new common_1.HttpException(`[name, email, username, password] is required`, common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return { name, email, username, password };
    }
}
exports.CreateUserValidationPipe = CreateUserValidationPipe;
//# sourceMappingURL=create-user.validation.pipe.js.map