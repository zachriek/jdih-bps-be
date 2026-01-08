import prisma from '../../lib/prisma';
import { TRegulationInput } from './regulation.validator';

export const findAllRegulations = async () =>
	await prisma.regulation.findMany({
		orderBy: { createdAt: 'desc' },
	});

export const findRegulationById = async (regulationId: string) =>
	await prisma.regulation.findUnique({
		where: { id: regulationId },
	});

export const createRegulation = async (data: TRegulationInput) => {
	return prisma.regulation.create({
		data,
	});
};

export const updateRegulation = async (regulationId: string, data: TRegulationInput) => {
	return await prisma.regulation.update({
		where: { id: regulationId },
		data,
	});
};

export const deleteRegulationById = async (regulationId: string) =>
	await prisma.regulation.delete({
		where: { id: regulationId },
	});

export const incrementAccessCount = async (regulationId: string) =>
	await prisma.regulation.update({
		where: { id: regulationId },
		data: {
			accessCount: {
				increment: 1,
			},
		},
	});
