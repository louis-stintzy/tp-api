import { RequestHandler } from 'express';
import { RegistrationRequestBody } from '../@types/user';

const checkEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
};

const checkPassword = (password: string) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    return false;
  }
  return true;
};

export const checkRegistrationForm: RequestHandler<
  object,
  object,
  RegistrationRequestBody
> = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  if (!checkEmail(email)) {
    res.status(400).json({ error: 'Invalid email' });
    return;
  }

  if (!checkPassword(password)) {
    res.status(400).json({
      error:
        'Password must be at least 8 characters long and contain at least one letter and one number',
    });
    return;
  }

  return next();
};

export const checkLoginForm: RequestHandler<
  object,
  object,
  RegistrationRequestBody
> = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required' });
    return;
  }

  if (!checkEmail(email)) {
    res.status(400).json({ error: 'Invalid email' });
    return;
  }

  return next();
};
