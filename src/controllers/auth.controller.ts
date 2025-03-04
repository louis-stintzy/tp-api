import { Request, Response } from 'express';
import { NewUserData, UserData } from '../@types/user';
import * as authService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const userData = req.body as NewUserData;
    const newUser = (await authService.createUser(userData)) as UserData;
    res.status(201).json(newUser);
  } catch (error) {
    // todo: gestion des erreurs
    res.status(500).json({ error: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const userData = req.body as NewUserData;
    const userIdWithJWT = await authService.authenticateUser(userData);
    res.status(200).json(userIdWithJWT);
  } catch (error) {
    // todo: gestion des erreurs
    res.status(500).json({ error: (error as Error).message });
  }
};
