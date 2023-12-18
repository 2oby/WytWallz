import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// Import your screens
import HomeScreen from './src/screens/HomeScreen'; 
import ArtDetailScreen from './src/screens/ArtDetailScreen';
import ScanScreen from './src/screens/ScanScreen';



// Create the stack navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          
          <Stack.Screen name="ArtDetail" component={ArtDetailScreen} /> 
          <Stack.Screen name="Scan" component={ScanScreen} /> 
          <Stack.Screen name="Home" component={HomeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;