import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
	status?: number;
}

const notFoundHandler = (req: Request, res: Response, _next: NextFunction) => {
	return res.status(404).json({
		message: 'Route tidak ditemukan',
		method: req.method,
		path: req.originalUrl,
	});
};

export default notFoundHandler;
