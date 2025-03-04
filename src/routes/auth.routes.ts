import { Router } from 'express';
import { Request, Response } from 'express';
import { register } from '../controllers/auth.controller';
import { checkRegistrationForm } from '../middlewares/checkRegistrationForm';

const router = Router();

router.post('/register', checkRegistrationForm, register);
router.post('/login', (req: Request, res: Response) => {
  console.log('login route');
  res.send('login route');
});

export default router;
