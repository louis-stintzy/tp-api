import { Router } from 'express';
import { Request, Response } from 'express';

const router = Router();

router.post('/register', (req: Request, res: Response) => {
  console.log('register route');
  res.send('register route');
});
router.post('/login', (req: Request, res: Response) => {
  console.log('register route');
  res.send('login route');
});

export default router;
