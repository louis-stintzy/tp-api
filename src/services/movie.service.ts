import { MovieIdData, NewMovieData } from '../@types/movie';
import * as movieRepository from '../repository/movie.repository';

export async function getAllMovies() {
  return await movieRepository.findAll();
}

export async function getMovieById(id: MovieIdData) {
  return await movieRepository.findById(id);
}

export async function addMovie(data: NewMovieData) {
  return await movieRepository.create(data);
}

export async function updateMovie(id: MovieIdData, data: NewMovieData) {
  const movie = await movieRepository.findById(id);
  if (!movie) {
    throw new Error('Movie not found');
  }
  return await movieRepository.update(id, data);
}

export async function deleteMovie(id: MovieIdData) {
  const movie = await movieRepository.findById(id);
  if (!movie) {
    throw new Error('Movie not found');
  }
  return await movieRepository.remove(id);
}
