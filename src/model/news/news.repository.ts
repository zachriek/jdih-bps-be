import prisma from '../../lib/prisma';
import { TNewsInput } from './news.validator';

const authorSelect = {
	id: true,
	name: true,
	email: true,
	picture: true,
};

export const findAllNews = async () =>
	await prisma.news.findMany({
		include: { author: { select: authorSelect } },
		orderBy: { createdAt: 'desc' },
	});

export const findNewsById = async (newsId: string) =>
	await prisma.news.findUnique({
		where: { id: newsId },
		include: { author: { select: authorSelect } },
	});

export const findNewsByAuthorId = async (authorId: string) =>
	await prisma.news.findMany({
		where: { authorId },
		include: { author: { select: authorSelect } },
		orderBy: { createdAt: 'desc' },
	});

export const createNews = async (data: TNewsInput) => {
	return prisma.news.create({
		data,
		include: { author: { select: authorSelect } },
	});
};

export const updateNews = async (newsId: string, data: TNewsInput) => {
	return await prisma.news.update({
		where: { id: newsId },
		data,
		include: { author: { select: authorSelect } },
	});
};

export const deleteNewsById = async (newsId: string) =>
	await prisma.news.delete({
		where: { id: newsId },
		include: { author: { select: authorSelect } },
	});
