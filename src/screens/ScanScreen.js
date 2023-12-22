import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BottomMenu from '../components/BottomMenu'; // Make sure this path is correct
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const cameraFeedHeight = (windowHeight * 2) / 5; // Middle 2/5ths of the screen

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      // Reset the scanned state to false every time the screen comes into focus
      setScanned(false);
      return () => {
      };
    }, [])
    );


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    async function loadFonts() {
      await Font.loadAsync({
        'K2D-ExtraBoldItalic': require('../assets/fonts/k2d/K2D-ExtraBoldItalic.ttf'), // Update the path to where your font is located
        // Include other font weights as needed
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // Assume data is the artworkKey, or extract it as needed

    console.log('Scanned String :', data);
    navigation.navigate('ArtDetail', { artworkKey: data });
};


  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // The scanning area (middle 2/5ths of the screen)
  const scanningAreaStyle = {
    height: cameraFeedHeight,
    width: windowWidth,
    marginTop: windowHeight * 1.5 / 5, // Offset to center vertically
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground 
        source={require('../assets/Background.png')}
        style={styles.backgroundImage}
      >
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/Art__HeaderText.png')} style={styles.headerTitle} />
        </View>
        {/* Camera feed */}
        <View style={styles.cameraContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <Image
            source={require('../assets/ScanFrame.png')} // Replace with the correct path to your PNG file
            style={styles.overlay}
          />
          {scanned && (
            <TouchableOpacity
              onPress={() => setScanned(false)}
              style={styles.rescanButton}
            >
              <Text style={styles.rescanButtonText}>Tap to Scan Again</Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
      <BottomMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ... other styles ...
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    height: 70, // Adjust as needed
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerTitle: {
    width: windowWidth,
    height: 50, // Adjust as needed
    resizeMode: 'contain',
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    height: cameraFeedHeight,
    width: windowWidth,
    resizeMode: 'contain',
  },
  rescanButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  rescanButtonText: {
    fontSize: 18,
    color: '#000',
  },
  // ... other styles ...
});

export default ScanScreen;


