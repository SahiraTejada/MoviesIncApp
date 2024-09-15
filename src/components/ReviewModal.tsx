import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../theme/colors';
import {ReviewModalProps} from '../types/review-modal';
import LinearGradient from 'react-native-linear-gradient';
import {addMovieRating} from '../services/addMovieRating';

const ReviewModal = ({
  isReviewModalOpen,
  handleReviewModal,
  movieId,
}: ReviewModalProps) => {
  const [rating, setRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleStarPress = (value: number) => {
    setRating(prevRating => {
      if (prevRating === value) {
        return 0;
      } else {
        return value;
      }
    });
  };

  const handleSubmitRating = async () => {
    if (rating === 0) {
      Alert.alert('Error', 'Please select a rating before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      await addMovieRating(movieId, rating);
      handleReviewModal();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isReviewModalOpen}
      onRequestClose={handleReviewModal}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={handleReviewModal}>
              <IconAntDesign name="close" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Review</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map(value => (
                <TouchableOpacity
                  key={value}
                  onPress={() => handleStarPress(value)}>
                  <IconAntDesign
                    name={rating >= value ? 'star' : 'staro'}
                    size={30}
                    color={colors.yellow}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <LinearGradient
              colors={colors.gradientPrimary}
              style={styles.closeButton}>
              <TouchableOpacity
                onPress={handleSubmitRating}
                disabled={isSubmitting}>
                <Text style={styles.closeButtonText}>
                  {isSubmitting ? 'Submitting...' : 'Add review'}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: colors.backgroundSecondary,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    gap: 20,
  },

  modalText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'medium',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  ratingText: {
    color: colors.white,
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    borderRadius: 8,
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'semibold',
  },
});

export default ReviewModal;
