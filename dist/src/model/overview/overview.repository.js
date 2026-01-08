"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverview = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const client_1 = require("@prisma/client");
const getOverview = async () => {
    const [totalRegulations, totalAccessCounts, totalNews, totalMonografi, totalArtikel, totalPutusan] = await Promise.all([
        prisma_1.default.regulation.count(),
        prisma_1.default.regulation.aggregate({
            _sum: {
                accessCount: true,
            },
        }),
        prisma_1.default.news.count(),
        prisma_1.default.regulation.count({ where: { documentType: client_1.EDocumentType.MONOGRAFI } }),
        prisma_1.default.regulation.count({ where: { documentType: client_1.EDocumentType.ARTIKEL } }),
        prisma_1.default.regulation.count({ where: { documentType: client_1.EDocumentType.PUTUSAN } }),
    ]);
    return {
        totalRegulations,
        totalAccessCounts: totalAccessCounts._sum.accessCount || 0,
        totalNews,
        totalMonografi,
        totalArtikel,
        totalPutusan,
    };
};
exports.getOverview = getOverview;
