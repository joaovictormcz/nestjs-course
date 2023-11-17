import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const CreateUserSchema = z.object({
  name: z.string({
    required_error: "First name is required",
  }),
  password: z.string({
    required_error: "Last name is required",
  }),
  email: z.string().email(),
  username: z.string({
    required_error: "Username is required",
  }),
});

export class CreateUserSchemaDTO extends createZodDto(CreateUserSchema) {}

export const CreateUserResponseSchemaDTO = CreateUserSchema.omit({
  password: true,
});

export type CreateUserResponseSchemaDTO = z.infer<
  typeof CreateUserResponseSchemaDTO
>;
 