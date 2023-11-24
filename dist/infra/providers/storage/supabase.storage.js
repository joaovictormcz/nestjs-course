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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseStorage = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const common_1 = require("@nestjs/common");
let SupabaseStorage = class SupabaseStorage {
    constructor() {
        this.client = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL ?? "", process.env.SUPABASE_KEY ?? "");
    }
    async upload(file, folder) {
        const data = await this.client.storage
            .from(process.env.SUPABASE_BUCKET ?? '')
            .upload(`${folder}/` + file.originalname, file.buffer, {
            upsert: true,
        });
    }
};
exports.SupabaseStorage = SupabaseStorage;
exports.SupabaseStorage = SupabaseStorage = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SupabaseStorage);
//# sourceMappingURL=supabase.storage.js.map