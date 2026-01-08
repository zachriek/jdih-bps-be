"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNewsService = exports.updateNewsService = exports.createNewsService = exports.findNewsByIdService = void 0;
const httpError_1 = require("../../utils/httpError");
const news_repository_1 = require("./news.repository");
const findNewsByIdService = async (id) => {
    const news = await (0, news_repository_1.findNewsById)(id);
    if (!news) {
        throw new httpError_1.HttpError('Berita tidak ditemukan', 404);
    }
    return news;
};
exports.findNewsByIdService = findNewsByIdService;
const createNewsService = async ({ data }) => {
    return await (0, news_repository_1.createNews)(data);
};
exports.createNewsService = createNewsService;
const updateNewsService = async ({ newsId, data }) => {
    await (0, exports.findNewsByIdService)(newsId);
    return await (0, news_repository_1.updateNews)(newsId, data);
};
exports.updateNewsService = updateNewsService;
const deleteNewsService = async ({ newsId }) => {
    await (0, exports.findNewsByIdService)(newsId);
    return await (0, news_repository_1.deleteNewsById)(newsId);
};
exports.deleteNewsService = deleteNewsService;
