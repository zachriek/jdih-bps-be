import { Request, Response } from 'express';
import { successRes } from '../../utils/response';
import { findAllNews, findNewsByAuthorId } from './news.repository';
import { createNewsService, deleteNewsService, findNewsByIdService, updateNewsService } from './news.service';
import { AuthRequest } from '../../middleware/auth';

export const getNewsHandler = async (_: Request, res: Response) => {
	const news = await findAllNews();
	return successRes({ res, message: 'success', data: { news } });
};

export const getNewsByIdHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const news = await findNewsByIdService(id);
	return successRes({ res, message: 'success', data: { news } });
};

export const getNewsByAuthorIdHandler = async (req: Request, res: Response) => {
	const { authorId } = req.params;
	const news = await findNewsByAuthorId(authorId);
	return successRes({ res, message: 'success', data: { news } });
};

export const createNewsHandler = async (req: AuthRequest, res: Response) => {
	const news = await createNewsService({ data: { ...req.body, authorId: req.user!.id } });
	return successRes({ res, message: 'Berhasil menambahkan berita baru', data: { news }, status: 201 });
};

export const updateNewsHandler = async (req: AuthRequest, res: Response) => {
	const { id } = req.params;
	const news = await updateNewsService({ newsId: id, data: { ...req.body, authorId: req.user!.id } });
	return successRes({ res, data: { news }, message: 'Data berita berhasil diperbarui' });
};

export const deleteNewsHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const news = await deleteNewsService({ newsId: id });
	return successRes({ res, message: 'Data berita berhasil dihapus', data: { news } });
};
