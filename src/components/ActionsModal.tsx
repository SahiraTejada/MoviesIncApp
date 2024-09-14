import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../theme/colors';
import {ActionsModalProps} from '../types/actions-modal';

const ActionsModal = ({handleOpen: handleBottomSheet}: ActionsModalProps) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleReviewModal = () => {
    setIsReviewModalOpen(false);
  };
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={handleBottomSheet}>
            <IconAntDesign name="close" size={15} color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.options}>
            <IconAntDesign name="staro" size={20} color={colors.white} />
            <Text style={styles.text}>Add review movie</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(21, 20, 31, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '100%',
  },
  container: {
    backgroundColor: colors.backgroundSecondary,
    width: '100%',
    height: 130,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionsContainer: {
    marginTop: 20,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'medium',
  },
});
export default ActionsModal;
