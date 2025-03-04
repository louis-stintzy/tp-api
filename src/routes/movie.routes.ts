import { Router } from 'express';

import {
  addMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
} from '../controllers/movie.controller';

const router = Router();

router.get('/', getAllMovies);

router.get('/:id', getMovieById);

router.post('/', addMovie);

router.put('/:id', updateMovie);

router.delete('/:id', deleteMovie);

export default router;
