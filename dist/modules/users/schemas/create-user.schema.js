"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserResponseSchemaDTO = exports.CreateUserSchemaDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const CreateUserSchema = z_1.z.object({
    name: z_1.z.string({
        required_error: "First name is required",
    }),
    password: z_1.z.string({
        required_error: "Last name is required",
    }),
    email: z_1.z.string().email(),
    username: z_1.z.string({
        required_error: "Username is required",
    }),
});
class CreateUserSchemaDTO extends (0, nestjs_zod_1.createZodDto)(CreateUserSchema) {
}
exports.CreateUserSchemaDTO = CreateUserSchemaDTO;
exports.CreateUserResponseSchemaDTO = CreateUserSchema.omit({
    password: true,
});
//# sourceMappingURL=create-user.schema.js.map