"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res, _next) => {
    console.error(err.stack);
    return res.status(err.status || 500).json({
        message: err.message || 'Terjadi kesalahan server',
    });
};
exports.default = errorHandler;
