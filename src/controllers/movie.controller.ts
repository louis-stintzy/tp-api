import { Request, Response } from 'express';
import * as movieService from '../services/movie.service';
import { MovieData, NewMovieData } from '../@types/movie';

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = (await movieService.getAllMovies()) as MovieData[];
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      //todo : middleware pour la validation de l'id
      throw new Error('Invalid id');
    }
    const movie = (await movieService.getMovieById(id)) as MovieData;
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const addMovie = async (req: Request, res: Response) => {
  try {
    const movieData = req.body as NewMovieData; // todo : middleware pour valider req.body
    const newMovie = (await movieService.addMovie(movieData)) as MovieData;
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      // todo : middleware pour la validation de l'id
      throw new Error('Invalid id');
    }
    const movieData = req.body as NewMovieData; // todo : middleware pour valider req.body
    const updatedMovie = (await movieService.updateMovie(
      id,
      movieData
    )) as MovieData;
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      // todo : middleware pour la validation de l'id
      throw new Error('Invalid id');
    }
    const deletedMovie = await movieService.deleteMovie(id);
    res.status(200).json(deletedMovie);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
