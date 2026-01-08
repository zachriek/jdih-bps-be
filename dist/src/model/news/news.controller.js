"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNewsHandler = exports.updateNewsHandler = exports.createNewsHandler = exports.getNewsByAuthorIdHandler = exports.getNewsByIdHandler = exports.getNewsHandler = void 0;
const response_1 = require("../../utils/response");
const news_repository_1 = require("./news.repository");
const news_service_1 = require("./news.service");
const getNewsHandler = async (_, res) => {
    const news = await (0, news_repository_1.findAllNews)();
    return (0, response_1.successRes)({ res, message: 'success', data: { news } });
};
exports.getNewsHandler = getNewsHandler;
const getNewsByIdHandler = async (req, res) => {
    const { id } = req.params;
    const news = await (0, news_service_1.findNewsByIdService)(id);
    return (0, response_1.successRes)({ res, message: 'success', data: { news } });
};
exports.getNewsByIdHandler = getNewsByIdHandler;
const getNewsByAuthorIdHandler = async (req, res) => {
    const { authorId } = req.params;
    const news = await (0, news_repository_1.findNewsByAuthorId)(authorId);
    return (0, response_1.successRes)({ res, message: 'success', data: { news } });
};
exports.getNewsByAuthorIdHandler = getNewsByAuthorIdHandler;
const createNewsHandler = async (req, res) => {
    const news = await (0, news_service_1.createNewsService)({ data: { ...req.body, authorId: req.user.id } });
    return (0, response_1.successRes)({ res, message: 'Berhasil menambahkan berita baru', data: { news }, status: 201 });
};
exports.createNewsHandler = createNewsHandler;
const updateNewsHandler = async (req, res) => {
    const { id } = req.params;
    const news = await (0, news_service_1.updateNewsService)({ newsId: id, data: { ...req.body, authorId: req.user.id } });
    return (0, response_1.successRes)({ res, data: { news }, message: 'Data berita berhasil diperbarui' });
};
exports.updateNewsHandler = updateNewsHandler;
const deleteNewsHandler = async (req, res) => {
    const { id } = req.params;
    const news = await (0, news_service_1.deleteNewsService)({ newsId: id });
    return (0, response_1.successRes)({ res, message: 'Data berita berhasil dihapus', data: { news } });
};
exports.deleteNewsHandler = deleteNewsHandler;
