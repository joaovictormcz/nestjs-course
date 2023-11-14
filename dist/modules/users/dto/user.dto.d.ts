export type CreateUserDTO = {
    username: string;
    password: string;
    email: string;
    name: string;
};
export type UsernameAndEmail = {
    email: string;
    username: string;
};
export type UserCreatedDTO = {
    id: string;
    createdAt: Date;
} & CreateUserDTO;
