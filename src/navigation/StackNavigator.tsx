import { createStackNavigator } from '@react-navigation/stack';
import MovieDetails from '../screens/MovieDetails';
import MovieList from '../screens/MovieList';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MovieList"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MovieList" component={MovieList} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

