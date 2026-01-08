"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newsSchema = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../../generated/prisma");
exports.newsSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title tidak boleh kosong'),
    content: zod_1.z.string().min(1, 'Content tidak boleh kosong'),
    authorId: zod_1.z.string().regex(/^[0-9a-fA-F]{24}$/, 'Author ID tidak valid'),
    source: zod_1.z.string().optional(),
    category: zod_1.z.enum(Object.values(prisma_1.ENewsCategory)).optional(),
});
