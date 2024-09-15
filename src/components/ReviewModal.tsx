import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {addMovieRating} from '../services/addMovieRating';
import {colors} from '../theme/colors';
import {ReviewModalProps} from '../types/review-modal';

const ReviewModal = ({
  isReviewModalOpen,
  handleReviewModal,
  movieId,
  fetchMovieInfo,
  handleOpen,
}: ReviewModalProps) => {
  const [rating, setRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleRating = (value: number) => {
    setRating(prevRating => (prevRating === value ? 0 : value));
  };

  const submitRating = async () => {
    if (rating === 0) {
      Alert.alert('Error', 'Please select a rating before submitting.');
      return;
    }

    setIsLoading(true);
    const sessionId = (await AsyncStorage.getItem('sessionId')) || '';

    try {
      await addMovieRating(movieId, rating, sessionId);
      fetchMovieInfo();
      handleReviewModal();
      handleOpen();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsLoading(false);
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
          <View style={styles.modalHeaderContainer}>
            <TouchableOpacity onPress={handleReviewModal}>
              <IconAntDesign name="close" size={20} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalTitle}>Review</Text>
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map(value => (
                <TouchableOpacity
                  key={value}
                  onPress={() => toggleRating(value)}>
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
              style={[
                styles.submitButton,
                {opacity: isLoading || rating === 0 ? 0.5 : 1},
              ]}>
              <TouchableOpacity
                onPress={submitRating}
                disabled={isLoading || rating === 0}>
                <Text style={styles.submitButtonText}>
                  {isLoading ? 'Submitting...' : 'Add review'}
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
  },
  modalHeaderContainer: {
    alignItems: 'flex-end',
    width: '100%',
  },
  modalContainer: {
    backgroundColor: colors.backgroundSecondary,
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalBody: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  modalTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'medium',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  submitButton: {
    padding: 10,
    borderRadius: 8,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    height: 50,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'semibold',
  },
});

export default ReviewModal;
