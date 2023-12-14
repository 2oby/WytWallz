import React from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ArtDetailScreen = () => {
  // You'll replace these with your actual data and assets
  const artworkImage = require('../assets/SittingMan.png');
  const title = "Sitting Man";
  const description = "The sitting man is sitting this demonstrates the importance of sitting as a commentary on sitting.";
  const price = "€2,400";
  const btcPrice = "0.15 BTC";

  return (
<View style={{ flex: 1 }}>
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground 
        source={require('../assets/Background.png')} // Adjust the path as necessary
        style={styles.backgroundImage}
      >

      <View style={styles.container}>
        <Image source={artworkImage} style={styles.artworkImage} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
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
  safeArea: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the full height of the screen
    width: null, // Ensure width is auto-adjusted
    height: null, // Ensure height is auto-adjusted
  },
  artworkImage: {
    // Set your desired dimensions
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.5,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
    textAlign: 'center',
  },
  buyButton: {
    marginTop: 20,
    backgroundColor: 'blue', // Replace with your desired color
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