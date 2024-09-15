import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../theme/colors';
import {ActionsBottomProps} from '../types/actions-bottom';
import ReviewModal from './ReviewModal';

const ActionsBottom = ({
  handleOpen,
  movieId,
  fetchMovieInfo,
}: ActionsBottomProps) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const toggleReviewModal = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  return (
    <View style={styles.overlayContainer}>
      {!isReviewModalOpen && (
        <View style={styles.mainContainer}>
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={handleOpen}>
              <IconAntDesign name="close" size={15} color={colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.reviewOptionsContainer}>
            <TouchableOpacity
              style={styles.reviewButton}
              onPress={toggleReviewModal}>
              <IconAntDesign name="staro" size={20} color={colors.white} />
              <Text style={styles.buttonText}>Add review to the movie</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <ReviewModal
        handleReviewModal={toggleReviewModal}
        isReviewModalOpen={isReviewModalOpen}
        movieId={movieId}
        fetchMovieInfo={fetchMovieInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.overlayColor2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  closeButtonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  mainContainer: {
    backgroundColor: colors.backgroundSecondary,
    width: '100%',
    height: 130,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  reviewButton: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  reviewOptionsContainer: {
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'medium',
  },
});
export default ActionsBottom;
