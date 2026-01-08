"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementAccessCount = exports.deleteRegulationById = exports.updateRegulation = exports.createRegulation = exports.findRegulationById = exports.findAllRegulations = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const findAllRegulations = async () => await prisma_1.default.regulation.findMany({
    orderBy: { createdAt: 'desc' },
});
exports.findAllRegulations = findAllRegulations;
const findRegulationById = async (regulationId) => await prisma_1.default.regulation.findUnique({
    where: { id: regulationId },
});
exports.findRegulationById = findRegulationById;
const createRegulation = async (data) => {
    return prisma_1.default.regulation.create({
        data,
    });
};
exports.createRegulation = createRegulation;
const updateRegulation = async (regulationId, data) => {
    return await prisma_1.default.regulation.update({
        where: { id: regulationId },
        data,
    });
};
exports.updateRegulation = updateRegulation;
const deleteRegulationById = async (regulationId) => await prisma_1.default.regulation.delete({
    where: { id: regulationId },
});
exports.deleteRegulationById = deleteRegulationById;
const incrementAccessCount = async (regulationId) => await prisma_1.default.regulation.update({
    where: { id: regulationId },
    data: {
        accessCount: {
            increment: 1,
        },
    },
});
exports.incrementAccessCount = incrementAccessCount;
