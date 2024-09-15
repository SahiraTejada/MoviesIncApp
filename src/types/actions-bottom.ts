export interface ActionsBottomProps {
  handleOpen: () => void;
  movieId: number
  fetchMovieInfo: () => Promise<void>
}
