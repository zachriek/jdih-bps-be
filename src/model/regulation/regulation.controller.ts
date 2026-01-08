import { Request, Response } from 'express';
import { successRes } from '../../utils/response';
import { findAllRegulations } from './regulation.repository';
import { createRegulationService, deleteRegulationService, findRegulationByIdService, incrementAccessCountService, updateRegulationService } from './regulation.service';

export const getRegulationHandler = async (_: Request, res: Response) => {
	const regulations = await findAllRegulations();
	return successRes({ res, message: 'success', data: { regulations } });
};

export const getRegulationByIdHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const regulation = await findRegulationByIdService(id);
	return successRes({ res, message: 'success', data: { regulation } });
};

export const createRegulationHandler = async (req: Request, res: Response) => {
	const regulation = await createRegulationService({ data: req.body });
	return successRes({ res, message: 'Berhasil menambahkan regulasi baru', data: { regulation }, status: 201 });
};

export const updateRegulationHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const regulation = await updateRegulationService({ regulationId: id, data: req.body });
	return successRes({ res, data: { regulation }, message: 'Data regulasi berhasil diperbarui' });
};

export const deleteRegulationHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const regulation = await deleteRegulationService({ regulationId: id });
	return successRes({ res, message: 'Data regulasi berhasil dihapus', data: { regulation } });
};

export const incrementAccessCountHandler = async (req: Request, res: Response) => {
	const { id } = req.params;
	const regulation = await incrementAccessCountService(id);
	return successRes({ res, message: 'Access count berhasil ditambah', data: { regulation } });
};
