"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = __importDefault(require("../model/auth/auth.route"));
const regulation_route_1 = __importDefault(require("../model/regulation/regulation.route"));
const news_route_1 = __importDefault(require("../model/news/news.route"));
const overview_route_1 = __importDefault(require("../model/overview/overview.route"));
const notFoundHandler_1 = __importDefault(require("../middleware/notFoundHandler"));
const router = (0, express_1.Router)();
router.get('/health', (_, res) => {
    res.json({ ok: true, ts: new Date().toISOString() });
});
router.use('/auth', auth_route_1.default);
router.use('/regulations', regulation_route_1.default);
router.use('/news', news_route_1.default);
router.use('/overview', overview_route_1.default);
// Not found handler
router.use(notFoundHandler_1.default);
exports.default = router;
