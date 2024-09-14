import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import { colors } from './src/theme/colors';

const MyTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.white,
    background: colors.backgroundPrimary,
    card: colors.backgroundPrimary,
    text: colors.gray,
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={MyTheme}>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
});

export default App;
