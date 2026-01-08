import { HttpError } from '../../utils/httpError';
import { createRegulation, deleteRegulationById, findRegulationById, incrementAccessCount, updateRegulation } from './regulation.repository';
import { TRegulationInput } from './regulation.validator';

export const findRegulationByIdService = async (id: string) => {
	const regulation = await findRegulationById(id);
	if (!regulation) {
		throw new HttpError('Regulasi tidak ditemukan', 404);
	}
	return regulation;
};

export const createRegulationService = async ({ data }: { data: TRegulationInput }) => {
	return await createRegulation(data);
};

export const updateRegulationService = async ({ regulationId, data }: { regulationId: string; data: TRegulationInput }) => {
	await findRegulationByIdService(regulationId);
	return await updateRegulation(regulationId, data);
};

export const deleteRegulationService = async ({ regulationId }: { regulationId: string }) => {
	await findRegulationByIdService(regulationId);
	return await deleteRegulationById(regulationId);
};

export const incrementAccessCountService = async (regulationId: string) => {
	await findRegulationByIdService(regulationId);
	return await incrementAccessCount(regulationId);
};
