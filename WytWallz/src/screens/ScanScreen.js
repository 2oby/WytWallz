import React, { useState, useEffect } from 'react';
import { ImageBackground, Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { fetchArtworkData } from '../services/api';
import BottomMenu from '../components/BottomMenu'; // Import the BottomMenu component
import { BarCodeScanner } from 'expo-barcode-scanner';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScanScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.flexContainer}>
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {/* If you want to add a mask overlay like the one in your image */}
        <View style={styles.overlay}>
          <View style={styles.overlayFrame} />
        </View>

        {scanned && (
          <TouchableOpacity onPress={() => setScanned(false)} style={styles.rescanButton}>
            <Text>Tap to Scan Again</Text>
          </TouchableOpacity>
        )}
      </View>
      <BottomMenu />
    </SafeAreaView>
  );
 
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    //flex: 1,
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    // Adjusted header styles to allow "Art" text to overlap with the white rectangle
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: 70,
    paddingBottom: 10, // pushes the content to the bottom of the header
    paddingLeft: 0, // pushes the content to the right
    backgroundColor: 'transparent',
    zIndex: 1, // Ensure the header is above the white rectangle
  },
  headerTitle: {
    width: windowWidth * 0.5, // 50% of the screen width
    height: 40, // Keep the height consistent with the header
    resizeMode: 'contain',
  },
  contentContainer: {
   // flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Align content to the top
    paddingTop: windowHeight * 0.01, // Add padding to the top
  },
  roundedRectangle: {
    position: 'absolute',
    top: -20, // Move up to cover the bottom third of the waves
    left: 20,
    right: 20,
    bottom: windowHeight * 0.01, // Move up the bottom of the rectangle
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    zIndex: 0, // Lower zIndex than the header
  },


  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayFrame: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
  },
  rescanButton: {
    alignItems: 'center',
    padding: 20,
  },
});

export default ScanScreen;


