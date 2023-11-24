"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskUserSchemaDTO = exports.CreateTaskUserSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zod_1 = require("zod");
exports.CreateTaskUserSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
    priority: zod_1.z.enum(["MEDIA", "BAIXA", "ALTA"]),
    status: zod_1.z.enum(["PENDENTE", "ANDAMENTO", "CONCLUIDA"]),
    startAt: zod_1.z.string().transform((item) => new Date(item)),
    endAt: zod_1.z.string().transform((item) => new Date(item)),
});
class CreateTaskUserSchemaDTO extends (0, nestjs_zod_1.createZodDto)(exports.CreateTaskUserSchema) {
}
exports.CreateTaskUserSchemaDTO = CreateTaskUserSchemaDTO;
//# sourceMappingURL=task-user.schema.js.map