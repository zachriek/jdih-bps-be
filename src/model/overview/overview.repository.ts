import { EDocumentType } from '../../generated/prisma';
import prisma from '../../lib/prisma';

export const getOverview = async () => {
	const [totalRegulations, totalAccessCounts, totalNews, totalMonografi, totalArtikel, totalPutusan] = await Promise.all([
		prisma.regulation.count(),
		prisma.regulation.aggregate({
			_sum: {
				accessCount: true,
			},
		}),
		prisma.news.count(),
		prisma.regulation.count({ where: { documentType: EDocumentType.MONOGRAFI } }),
		prisma.regulation.count({ where: { documentType: EDocumentType.ARTIKEL } }),
		prisma.regulation.count({ where: { documentType: EDocumentType.PUTUSAN } }),
	]);

	return {
		totalRegulations,
		totalAccessCounts: totalAccessCounts._sum.accessCount || 0,
		totalNews,
		totalMonografi,
		totalArtikel,
		totalPutusan,
	};
};
