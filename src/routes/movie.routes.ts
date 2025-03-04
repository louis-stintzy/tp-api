import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from '../controllers/movie.controller';

const router = Router();

// Routes publiques
router.get('/', getAllMovies);
router.get('/:id', getMovieById);

// Routes protégées, l'utilisateur doit être authentifié
router.post('/', checkAuth, addMovie);
router.put('/:id', checkAuth, updateMovie);
router.delete('/:id', checkAuth, deleteMovie);

export default router;
