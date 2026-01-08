import { HttpError } from '../../utils/httpError';
import { createNews, deleteNewsById, findNewsById, updateNews } from './news.repository';
import { TNewsInput } from './news.validator';

export const findNewsByIdService = async (id: string) => {
	const news = await findNewsById(id);
	if (!news) {
		throw new HttpError('Berita tidak ditemukan', 404);
	}
	return news;
};

export const createNewsService = async ({ data }: { data: TNewsInput }) => {
	return await createNews(data);
};

export const updateNewsService = async ({ newsId, data }: { newsId: string; data: TNewsInput }) => {
	await findNewsByIdService(newsId);
	return await updateNews(newsId, data);
};

export const deleteNewsService = async ({ newsId }: { newsId: string }) => {
	await findNewsByIdService(newsId);
	return await deleteNewsById(newsId);
};
