import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MovieList from './src/screens/MovieList';
import { colors } from './src/theme/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MovieList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
