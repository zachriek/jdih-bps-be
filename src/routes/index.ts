import { Router } from 'express';
import authRouter from '../model/auth/auth.route';
import regulationRouter from '../model/regulation/regulation.route';
import newsRouter from '../model/news/news.route';
import overviewRouter from '../model/overview/overview.route';
import notFoundHandler from '../middleware/notFoundHandler';

const router = Router();

router.get('/health', (_, res) => {
	res.json({ ok: true, ts: new Date().toISOString() });
});

router.use('/auth', authRouter);
router.use('/regulations', regulationRouter);
router.use('/news', newsRouter);
router.use('/overview', overviewRouter);

// Not found handler
router.use(notFoundHandler);

export default router;
