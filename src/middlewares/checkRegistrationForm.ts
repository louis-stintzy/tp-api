import { RequestHandler } from 'express';
import { RegistrationRequestBody } from '../@types/user';

// Regex pour valider l'email et le mot de passe
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

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

  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid email' });
    return;
  }

  if (!passwordRegex.test(password)) {
    res.status(400).json({
      error:
        'Password must be at least 8 characters long and contain at least one letter and one number',
    });
    return;
  }

  return next();
};
