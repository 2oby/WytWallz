import React, { useState, useEffect } from 'react';
import { ImageBackground, Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { fetchArtworkData } from '../services/api';
import BottomMenu from '../components/BottomMenu'; // Import the BottomMenu component


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ArtDetailScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [artwork, setArtwork] = useState(null);

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

  useEffect(() => {
    const artworkKey = 'SP3FBR2AGK5H9QDNAHM7FF9K6E2B7DTE5ACFA7FWY.12345'; //Format: Smart-Contract-Address.Token-ID
    
    fetchArtworkData(artworkKey)
      .then(data => {
        setArtwork(data);
      })
      .catch(error => {
        console.error('Error fetching artwork:', error);
        // Handle the error appropriately
      });
  }, []);

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>; // Or some other loading placeholder
  }

  if (!artwork) {
    return <Text>Loading...</Text>; // Or any other loading indicator
  }

  return (
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
              {/* Update when using a real remote API to retrieve the data<Image source={{ uri: artwork.artworkImage }} style={styles.artworkImage} /> */}
              <Image source={require('../assets/SittingMan.png')} style={styles.artworkImage} />   
              <View style={styles.textContainer}>
                <Text style={styles.title}>{artwork.title}</Text>
                <Text style={styles.description}>{artwork.description}</Text>
                {/* Buy Button */}
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buyButtonText}>{artwork.price}</Text>
                  <Text style={styles.btcPrice}>{artwork.btcPrice}</Text>
                </TouchableOpacity>
              </View>
            </View>
        </ImageBackground>
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
    paddingTop: 50,
    paddingBottom: 0, // pushes the content to the bottom of the header
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
  artworkImage: {
    justifyContent: 'flex-start', // Align content to the top
    width: windowWidth * 0.7, // 80% of the screen width
    height: windowHeight * 0.52, // 30% of the screen height
    resizeMode: 'contain',
    marginTop: 0, 
    marginBottom: 0, // Reduced or set to 0 to reduce gap
  },
  textContainer: {
    alignItems: 'center', // Center text horizontally
    justifyContent: 'flex-start', // Align content to the top
    marginBottom: 10,
    marginLeft: 60, // Left margin
    marginRight: 60, // Right margin
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5, // Space before the description
    fontFamily: 'K2D-ExtraBoldItalic',
  },
  description: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 10, // Space before the buy button
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

