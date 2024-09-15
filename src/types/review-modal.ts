export interface ReviewModalProps {
  isReviewModalOpen: boolean;
  handleReviewModal: () => void;
  movieId: number
  fetchMovieInfo: () => Promise<void>
}
