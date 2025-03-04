export type MovieIdData = number;

export interface NewMovieData {
  title: string;
  description: string;
  releaseDate: Date;
  imageUrl: string;
}

export interface MovieData {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
