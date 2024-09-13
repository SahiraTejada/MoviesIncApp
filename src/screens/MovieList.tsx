import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';

const MovieList = () => {
  return (
    <View>
      <Text style={styles.title}>Now playing</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 30,
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'medium',
  },
});
export default MovieList;
