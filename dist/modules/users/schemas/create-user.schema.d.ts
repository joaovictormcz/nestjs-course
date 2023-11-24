import { z } from "nestjs-zod/z";
declare const CreateUserSchemaDTO_base: import("nestjs-zod").ZodDto<{
    name: string;
    password: string;
    email: string;
    username: string;
}, z.ZodObjectDef<{
    name: z.ZodString;
    password: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    name: string;
    password: string;
    email: string;
    username: string;
}>;
export declare class CreateUserSchemaDTO extends CreateUserSchemaDTO_base {
}
export declare const CreateUserResponseSchemaDTO: z.ZodObject<Omit<{
    name: z.ZodString;
    password: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
}, "password">, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    username: string;
}, {
    name: string;
    email: string;
    username: string;
}>;
export type CreateUserResponseSchemaDTO = z.infer<typeof CreateUserResponseSchemaDTO>;
export {};
