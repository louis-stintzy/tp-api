import { Router } from 'express';
import { checkAuth } from '../middlewares/checkAuth';
import {
  addMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from '../controllers/movie.controller';
import { upload } from '../middlewares/upload';

const router = Router();

// Routes publiques
router.get('/', getAllMovies);
router.get('/:id', getMovieById);

// Routes protégées, l'utilisateur doit être authentifié
router.post('/', checkAuth, upload.single('image'), addMovie);
router.put('/:id', checkAuth, upload.single('image'), updateMovie);
router.delete('/:id', checkAuth, deleteMovie);

export default router;
