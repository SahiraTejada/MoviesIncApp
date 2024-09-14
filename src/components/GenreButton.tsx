import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../theme/colors';

const GradientButton = ({genre}: {genre: string}) => {
  return (
    <LinearGradient
      colors={['#57565D', '#292830FF']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradientBorder}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{genre}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    borderRadius: 25,
    padding: 2,
  },
  button: {
    backgroundColor: '#201F28',
    paddingVertical: 10,
    paddingHorizontal: 15,
    width:'auto',
    //height:30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.gray,
    fontSize: 14,
  },
});

export default GradientButton;
