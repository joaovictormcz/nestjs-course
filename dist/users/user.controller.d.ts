type ParamUser = {
    id: string;
    idEmpresa: string;
};
type QueryUser = {
    p: string;
    r: string;
};
type BodyUser = {
    name: string;
    age: number;
};
export declare class UserController {
    findById(params: ParamUser): string;
    findByPages(queries: QueryUser): string;
    create(data: BodyUser): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        name: string;
        age: number;
    };
}
export {};
