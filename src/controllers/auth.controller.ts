import { Request, Response } from 'express';
import { NewUserData, UserData } from '../@types/user';
import * as authService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  try {
    const userData = req.body as NewUserData; // todo: valider req.body et typer
    const newUser = (await authService.createUser(userData)) as UserData;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
