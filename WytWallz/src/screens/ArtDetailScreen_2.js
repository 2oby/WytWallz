import React, { useState, useEffect } from 'react';
import { ImageBackground, Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ArtDetailScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'K2D-ExtraBoldItalic': require('../assets/fonts/k2d/K2D-ExtraBoldItalic.ttf'), // Update the path to where your font is located
        // Include other font weights as needed
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>; // Or some other loading placeholder
  }

  // Replace with your actual data and assets
  const artworkImage = require('../assets/SittingMan.png');
  const title = "Sitting Man";
  const description = "The sitting man is sitting this demonstrates the importance of sitting as a commentary on sitting.";
  const price = "€2,400";
  const btcPrice = "0.15 BTC";

  return (
    <View style={styles.flexContainer}>
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground 
          source={require('../assets/Background.png')}
          style={styles.backgroundImage}
        >
          {/* Header with dynamic title */}
          <View style={styles.header}>
            <Image source={require('../assets/Art__HeaderText.png')} style={styles.headerTitle} />
          </View>

          {/* Content Area */}
          <View style={styles.contentContainer}>
            {/* White rounded rectangle background */}
            <View style={styles.roundedRectangle} />

            {/* Artwork and Details */}
            <Image source={artworkImage} style={styles.artworkImage} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>

            {/* Buy Button */}
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>{price}</Text>
              <Text style={styles.btcPrice}>{btcPrice}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    // Adjusted header styles to allow "Art" text to overlap with the white rectangle
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: 140,
    paddingBottom: 0, // pushes the content to the bottom of the header
    paddingLeft: 30, // pushes the content to the right
    backgroundColor: 'transparent',
    zIndex: 1, // Ensure the header is above the white rectangle
  },
  headerTitle: {
    width: windowWidth * 0.5, // 50% of the screen width
    height: 70, // Keep the height consistent with the header
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the top
    paddingTop: windowHeight * 0.03, // Add padding to the top
  },
  roundedRectangle: {
    position: 'absolute',
    top: -15, // Move up to cover the bottom third of the waves
    left: 20,
    right: 20,
    bottom: windowHeight * 0.01, // Move up the bottom of the rectangle
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    zIndex: 0, // Lower zIndex than the header
  },

  artworkImage: {
    width: windowWidth * 0.7, // 80% of the screen width
    height: windowHeight * 0.52, // 30% of the screen height
    resizeMode: 'contain',
    marginBottom: 15, // Add space between the image and the text
  },
  textContainer: {
    alignItems: 'center', // Center text horizontally
    marginBottom: 20, // Space before the buy button
    marginLeft: 60, // Left margin
    marginRight: 60, // Right margin
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10, // Space before the description
    fontFamily: 'K2D-ExtraBoldItalic',
  },
  description: {
    fontSize: 20,
    color: 'grey',
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 20,
  },
  buyButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  btcPrice: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
});

export default ArtDetailScreen;


