import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Import your screens
import HomeScreen from './src/screens/HomeScreen'; 
import ArtDetailScreen from './src/screens/ArtDetailScreen';



// Create the stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ArtDetail"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ArtDetail" component={ArtDetailScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;