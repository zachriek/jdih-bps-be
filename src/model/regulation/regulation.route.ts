import { Router } from 'express';
import { validateBody, validateParams } from '../../middleware/validate';
import { regulationSchema } from './regulation.validator';
import { createRegulationHandler, getRegulationHandler, updateRegulationHandler, deleteRegulationHandler, getRegulationByIdHandler, incrementAccessCountHandler } from './regulation.controller';
import { paramsIdSchema } from '../../validator';
import { requireAuth } from '../../middleware/auth';

const router = Router();

router.get('/', getRegulationHandler);
router.get('/:id', validateParams(paramsIdSchema), getRegulationByIdHandler);
router.patch('/:id/access', validateParams(paramsIdSchema), incrementAccessCountHandler);

router.use(requireAuth);
router.post('/', validateBody(regulationSchema), createRegulationHandler);
router.put('/:id', validateParams(paramsIdSchema), validateBody(regulationSchema), updateRegulationHandler);
router.delete('/:id', validateParams(paramsIdSchema), deleteRegulationHandler);

export default router;
