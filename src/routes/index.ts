import { Router } from 'express';
import authRouter from './auth.routes';
import movieRouter from './movie.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/movies', movieRouter);

export default router;
