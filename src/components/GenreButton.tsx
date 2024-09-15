import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme/colors';

const GradientButton = ({genre}: {genre: string}) => {
  return (
    <LinearGradient
      colors={['#57565D', '#292830FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradientWrapper}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{genre}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 25,
    padding: 2,
  },
  buttonContainer: {
    backgroundColor: colors.backgroundColor1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.gray,
    fontSize: 14,
  },
});

export default GradientButton;
