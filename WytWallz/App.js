import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Import your screens
import HomeScreen from './src/screens/HomeScreen'; 
import ArtDetailScreen from './src/screens/ArtDetailScreen';
import ArtDetailScreen_2 from './src/screens/ArtDetailScreen_2';



// Create the stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ArtDetail_2"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ArtDetail" component={ArtDetailScreen} /> 
          <Stack.Screen name="ArtDetail_2" component={ArtDetailScreen_2} /> 

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;