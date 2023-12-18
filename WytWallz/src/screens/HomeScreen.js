import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomMenu from '../components/BottomMenu'; // Import the BottomMenu component

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground 
        source={require('../assets/Background.png')} // Adjust the path as necessary
        style={styles.backgroundImage}
      >
        {/* Other UI components can go here */}
      </ImageBackground>
        <BottomMenu /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // This ensures the entire image is visible
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default HomeScreen;