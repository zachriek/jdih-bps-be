import { Response } from 'express';
import { successRes } from '../../utils/response';
import { getOverviewService } from './overview.service';
import { AuthRequest } from '../../middleware/auth';

export const getOverviewHandler = async (req: AuthRequest, res: Response) => {
	const overview = await getOverviewService();
	return successRes({ res, message: 'success', data: { overview } });
};
