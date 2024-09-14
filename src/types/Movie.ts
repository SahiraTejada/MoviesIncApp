export type Movie = {
  movieId: number;
  title: string;
  rating: number;
  releaseDate: string;
  posterUrl: string;
  description: string;
  actors: Actor[];
  genre: string[];
};

export interface Actor {
  name: string;
  character: string;
  photoUrl: string;
}

