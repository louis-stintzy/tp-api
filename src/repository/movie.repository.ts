import { MovieIdData, NewMovieData } from '../@types/movie';
import { Movie } from '../models';

export async function findAll() {
  return await Movie.findAll();
}

export async function findById(id: MovieIdData) {
  console.log(id);
  return await Movie.findByPk(id);
}

export async function create(data: NewMovieData) {
  return await Movie.create(data);
}

export async function update(id: MovieIdData, data: NewMovieData) {
  const [numberOfAffectedRows, [updatedMovie]] = await Movie.update(data, {
    where: { id },
    returning: true,
  });
  return numberOfAffectedRows > 0 ? updatedMovie : null;
}

export async function remove(id: MovieIdData) {
  const deletedRows = await Movie.destroy({ where: { id } });
  return deletedRows > 0; // return true if deleted
}
