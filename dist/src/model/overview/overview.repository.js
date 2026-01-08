"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverview = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma_2 = __importDefault(require("../../lib/prisma"));
const getOverview = async () => {
    const [totalRegulations, totalAccessCounts, totalNews, totalMonografi, totalArtikel, totalPutusan] = await Promise.all([
        prisma_2.default.regulation.count(),
        prisma_2.default.regulation.aggregate({
            _sum: {
                accessCount: true,
            },
        }),
        prisma_2.default.news.count(),
        prisma_2.default.regulation.count({ where: { documentType: prisma_1.EDocumentType.MONOGRAFI } }),
        prisma_2.default.regulation.count({ where: { documentType: prisma_1.EDocumentType.ARTIKEL } }),
        prisma_2.default.regulation.count({ where: { documentType: prisma_1.EDocumentType.PUTUSAN } }),
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
