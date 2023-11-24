import { z } from "zod";
export declare const CreateTaskUserSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    priority: z.ZodEnum<["MEDIA", "BAIXA", "ALTA"]>;
    status: z.ZodEnum<["PENDENTE", "ANDAMENTO", "CONCLUIDA"]>;
    startAt: z.ZodEffects<z.ZodString, Date, string>;
    endAt: z.ZodEffects<z.ZodString, Date, string>;
}, "strip", z.ZodTypeAny, {
    status: "PENDENTE" | "ANDAMENTO" | "CONCLUIDA";
    title: string;
    description: string;
    priority: "BAIXA" | "MEDIA" | "ALTA";
    startAt: Date;
    endAt: Date;
}, {
    status: "PENDENTE" | "ANDAMENTO" | "CONCLUIDA";
    title: string;
    description: string;
    priority: "BAIXA" | "MEDIA" | "ALTA";
    startAt: string;
    endAt: string;
}>;
declare const CreateTaskUserSchemaDTO_base: import("nestjs-zod").ZodDto<{
    status: "PENDENTE" | "ANDAMENTO" | "CONCLUIDA";
    title: string;
    description: string;
    priority: "BAIXA" | "MEDIA" | "ALTA";
    startAt: Date;
    endAt: Date;
}, z.ZodObjectDef<{
    title: z.ZodString;
    description: z.ZodString;
    priority: z.ZodEnum<["MEDIA", "BAIXA", "ALTA"]>;
    status: z.ZodEnum<["PENDENTE", "ANDAMENTO", "CONCLUIDA"]>;
    startAt: z.ZodEffects<z.ZodString, Date, string>;
    endAt: z.ZodEffects<z.ZodString, Date, string>;
}, "strip", z.ZodTypeAny>, {
    status: "PENDENTE" | "ANDAMENTO" | "CONCLUIDA";
    title: string;
    description: string;
    priority: "BAIXA" | "MEDIA" | "ALTA";
    startAt: string;
    endAt: string;
}>;
export declare class CreateTaskUserSchemaDTO extends CreateTaskUserSchemaDTO_base {
}
export {};
