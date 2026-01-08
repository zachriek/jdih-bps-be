"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOverviewHandler = void 0;
const response_1 = require("../../utils/response");
const overview_service_1 = require("./overview.service");
const getOverviewHandler = async (req, res) => {
    const overview = await (0, overview_service_1.getOverviewService)();
    return (0, response_1.successRes)({ res, message: 'success', data: { overview } });
};
exports.getOverviewHandler = getOverviewHandler;
