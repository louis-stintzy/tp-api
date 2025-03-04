import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import {
  checkLoginForm,
  checkRegistrationForm,
} from '../middlewares/checkAuthForms';

const router = Router();

router.post('/register', checkRegistrationForm, register);
router.post('/login', checkLoginForm, login);

export default router;
