import { Router } from 'express';
import { validateBody, validateParams } from '../../middleware/validate';
import { newsSchema } from './news.validator';
import { createNewsHandler, deleteNewsHandler, getNewsHandler, getNewsByAuthorIdHandler, getNewsByIdHandler, updateNewsHandler } from './news.controller';
import { paramsIdSchema } from '../../validator';
import { requireAuth } from '../../middleware/auth';

const router = Router();

router.get('/', getNewsHandler);
router.get('/:id', validateParams(paramsIdSchema), getNewsByIdHandler);
router.get('/author/:authorId', validateParams(paramsIdSchema), getNewsByAuthorIdHandler);

router.use(requireAuth);
router.post('/', validateBody(newsSchema), createNewsHandler);
router.put('/:id', validateParams(paramsIdSchema), validateBody(newsSchema), updateNewsHandler);
router.delete('/:id', validateParams(paramsIdSchema), deleteNewsHandler);

export default router;
