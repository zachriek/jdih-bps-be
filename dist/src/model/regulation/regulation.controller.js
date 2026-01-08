"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementAccessCountHandler = exports.deleteRegulationHandler = exports.updateRegulationHandler = exports.createRegulationHandler = exports.getRegulationByIdHandler = exports.getRegulationHandler = void 0;
const response_1 = require("../../utils/response");
const regulation_repository_1 = require("./regulation.repository");
const regulation_service_1 = require("./regulation.service");
const getRegulationHandler = async (_, res) => {
    const regulations = await (0, regulation_repository_1.findAllRegulations)();
    return (0, response_1.successRes)({ res, message: 'success', data: { regulations } });
};
exports.getRegulationHandler = getRegulationHandler;
const getRegulationByIdHandler = async (req, res) => {
    const { id } = req.params;
    const regulation = await (0, regulation_service_1.findRegulationByIdService)(id);
    return (0, response_1.successRes)({ res, message: 'success', data: { regulation } });
};
exports.getRegulationByIdHandler = getRegulationByIdHandler;
const createRegulationHandler = async (req, res) => {
    const regulation = await (0, regulation_service_1.createRegulationService)({ data: req.body });
    return (0, response_1.successRes)({ res, message: 'Berhasil menambahkan regulasi baru', data: { regulation }, status: 201 });
};
exports.createRegulationHandler = createRegulationHandler;
const updateRegulationHandler = async (req, res) => {
    const { id } = req.params;
    const regulation = await (0, regulation_service_1.updateRegulationService)({ regulationId: id, data: req.body });
    return (0, response_1.successRes)({ res, data: { regulation }, message: 'Data regulasi berhasil diperbarui' });
};
exports.updateRegulationHandler = updateRegulationHandler;
const deleteRegulationHandler = async (req, res) => {
    const { id } = req.params;
    const regulation = await (0, regulation_service_1.deleteRegulationService)({ regulationId: id });
    return (0, response_1.successRes)({ res, message: 'Data regulasi berhasil dihapus', data: { regulation } });
};
exports.deleteRegulationHandler = deleteRegulationHandler;
const incrementAccessCountHandler = async (req, res) => {
    const { id } = req.params;
    const regulation = await (0, regulation_service_1.incrementAccessCountService)(id);
    return (0, response_1.successRes)({ res, message: 'Access count berhasil ditambah', data: { regulation } });
};
exports.incrementAccessCountHandler = incrementAccessCountHandler;
