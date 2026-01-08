"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementAccessCountService = exports.deleteRegulationService = exports.updateRegulationService = exports.createRegulationService = exports.findRegulationByIdService = void 0;
const httpError_1 = require("../../utils/httpError");
const regulation_repository_1 = require("./regulation.repository");
const findRegulationByIdService = async (id) => {
    const regulation = await (0, regulation_repository_1.findRegulationById)(id);
    if (!regulation) {
        throw new httpError_1.HttpError('Regulasi tidak ditemukan', 404);
    }
    return regulation;
};
exports.findRegulationByIdService = findRegulationByIdService;
const createRegulationService = async ({ data }) => {
    return await (0, regulation_repository_1.createRegulation)(data);
};
exports.createRegulationService = createRegulationService;
const updateRegulationService = async ({ regulationId, data }) => {
    await (0, exports.findRegulationByIdService)(regulationId);
    return await (0, regulation_repository_1.updateRegulation)(regulationId, data);
};
exports.updateRegulationService = updateRegulationService;
const deleteRegulationService = async ({ regulationId }) => {
    await (0, exports.findRegulationByIdService)(regulationId);
    return await (0, regulation_repository_1.deleteRegulationById)(regulationId);
};
exports.deleteRegulationService = deleteRegulationService;
const incrementAccessCountService = async (regulationId) => {
    await (0, exports.findRegulationByIdService)(regulationId);
    return await (0, regulation_repository_1.incrementAccessCount)(regulationId);
};
exports.incrementAccessCountService = incrementAccessCountService;
