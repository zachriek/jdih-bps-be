"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNewsById = exports.updateNews = exports.createNews = exports.findNewsByAuthorId = exports.findNewsById = exports.findAllNews = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const authorSelect = {
    id: true,
    name: true,
    email: true,
    picture: true,
};
const findAllNews = async () => await prisma_1.default.news.findMany({
    include: { author: { select: authorSelect } },
    orderBy: { createdAt: 'desc' },
});
exports.findAllNews = findAllNews;
const findNewsById = async (newsId) => await prisma_1.default.news.findUnique({
    where: { id: newsId },
    include: { author: { select: authorSelect } },
});
exports.findNewsById = findNewsById;
const findNewsByAuthorId = async (authorId) => await prisma_1.default.news.findMany({
    where: { authorId },
    include: { author: { select: authorSelect } },
    orderBy: { createdAt: 'desc' },
});
exports.findNewsByAuthorId = findNewsByAuthorId;
const createNews = async (data) => {
    return prisma_1.default.news.create({
        data,
        include: { author: { select: authorSelect } },
    });
};
exports.createNews = createNews;
const updateNews = async (newsId, data) => {
    return await prisma_1.default.news.update({
        where: { id: newsId },
        data,
        include: { author: { select: authorSelect } },
    });
};
exports.updateNews = updateNews;
const deleteNewsById = async (newsId) => await prisma_1.default.news.delete({
    where: { id: newsId },
    include: { author: { select: authorSelect } },
});
exports.deleteNewsById = deleteNewsById;
