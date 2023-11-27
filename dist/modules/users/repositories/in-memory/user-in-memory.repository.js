"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInMemoryRepository = void 0;
const crypto_1 = require("crypto");
class UserInMemoryRepository {
    constructor() {
        this.users = [];
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    async findByUsernameOrEmail(data) {
        const findUser = this.users.find((user) => user.username === data.username || user.email === data.email);
        return findUser ?? null;
    }
    async save(data) {
        const user = {
            ...data,
            id: (0, crypto_1.randomUUID)(),
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }
    uploadAvatar(id, path) {
        throw new Error("Method not implemented.");
    }
}
exports.UserInMemoryRepository = UserInMemoryRepository;
//# sourceMappingURL=user-in-memory.repository.js.map