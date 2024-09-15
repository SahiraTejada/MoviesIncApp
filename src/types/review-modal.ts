import {ActionsBottomProps} from './actions-bottom';

export interface ReviewModalProps extends ActionsBottomProps {
  isReviewModalOpen: boolean;
  handleReviewModal: () => void;
}
