"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundHandler = (req, res, _next) => {
    return res.status(404).json({
        message: 'Route tidak ditemukan',
        method: req.method,
        path: req.originalUrl,
    });
};
exports.default = notFoundHandler;
