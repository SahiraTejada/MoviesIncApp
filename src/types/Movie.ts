export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  posterUrl: string;
};

interface Genre{
  id:string
  name:string
}
export interface Actor {
  name: string;
  character: string;
  profileUrl: string;
}

export interface MovieCardProps {
  movieId: number;
  title: string;
  rating: number;
  posterUrl: string;
  releaseDate: string;
}
