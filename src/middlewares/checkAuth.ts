import { NextFunction, Request, RequestHandler, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserIdData } from '../@types/user';

export const checkAuth: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //   try {
  // Récupère la valeur du header Authorization de la requête HTTP
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: 'Auth failed 1' });
    return;
  }
  // Le format attendu du header Authorization est généralement "Bearer TOKEN_HERE", on sépare donc les deux parties
  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token) {
    res.status(401).json({ message: 'Auth failed 2' });
    return;
  }

  // Vérification de la Validité du Token
  jwt.verify(token, 'ceciestunsecret', (err, decoded) => {
    // todo: utiliser process.env.JWT_SECRET
    // Si le token est invalide, on renvoie une erreur 403
    if (err) {
      res.status(403).json({ message: 'Auth failed 3' });
      return;
    }
    // Si le token est valide, on ajoute les infos utilisateur à l'objet req pour un usage ultérieur
    if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
      req.body = { ...req.body, userId: decoded.id as UserIdData }; // todo: créer un req.auth pour corriger
    } else {
      return res.status(403).json({ message: 'Auth failed 4' });
    }
    // Passer au prochain middleware ou contrôleur
    return next();
  });
};
