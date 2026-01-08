import { Router } from 'express';
import { validateBody } from '../../middleware/validate';
import { loginSchema } from './auth.validator';
import { getAuthUserHandler, loginHandler } from './auth.controller';
import { loginRateLimiter } from './auth.limiter';
import { requireAuth } from '../../middleware/auth';
import { createRateLimiter } from '../../middleware/rateLimiter';

const router = Router();

router.use(
	createRateLimiter({
		windowMs: 15 * 60 * 1000,
		max: 100,
		context: 'auth',
	})
);

router.post('/login', loginRateLimiter, validateBody(loginSchema), loginHandler);
router.get('/me', requireAuth, getAuthUserHandler);

export default router;
