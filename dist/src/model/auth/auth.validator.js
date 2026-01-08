"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string('Email tidak valid').email('Format email tidak valid'),
    password: zod_1.z.string('Password tidak valid').min(6, 'Password minimal 6 karakter'),
});
