// Image imports at the top of your file
const sittingManImage = require('../assets/SittingMan.png');
const standingManImage = require('../assets/standing_man.jpg');
const sittingWomanImage = require('../assets/sitting_woman.jpg');

// Dummy data for simulation purposes
const dummyArtworkData = {
  artworkImage: sittingManImage,
  title: "Sitting Man",
  description: "The sitting man is sitting. Brown, dull, this man is a placeholder for the possible.",
  price: "€400",
  btcPrice: "0.01 BTC"
};


//SP3FBR2AGK5H9QDNAHM7FF9K6E2B7DTE5ACFA7FWY.12345
const dummyArtworkDataA = {
  artworkImage: standingManImage,
  title: "Standing Man",
  description: "The standing man is stoic. This demonstrates the importance of standing as a commentary on sitting.",
  price: "€1,400",
  btcPrice: "0.02 BTC"
};

//SP3FBR2AGK5H9QDNAHM7FF9K6E2B7DTE5ACFA7FWY.23456 
const dummyArtworkDataB = {
  artworkImage: sittingWomanImage,
  title: "Sitting Woman",
  description: "The sitting woman is peacefull. This piece moves the viewer to consider art as art and more.",
  price: "€2,400",
  btcPrice: "0.05 BTC"
};



/**
 * Fetches artwork data based on a provided key.
 * Simulates fetching data from an API.
 * @param {string} artworkKey - The unique key for the artwork.
 * @returns {Promise<Object>} The artwork data.
 */
export async function fetchArtworkData(artworkKey) {
  console.log('Artwork Key:', artworkKey);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  if(artworkKey == "SP3FBR2AGK5H9QDNAHM7FF9K6E2B7DTE5ACFA7FWY.12345"){
    // Return the dummy data A
    return Promise.resolve({ ...dummyArtworkDataA, key: artworkKey });
  }
  else if(artworkKey == "SP3FBR2AGK5H9QDNAHM7FF9K6E2B7DTE5ACFA7FWY.23456"){
    // Return the dummy data B
    return Promise.resolve({ ...dummyArtworkDataB, key: artworkKey });
  }else{
    // Return the dummy data c
    return Promise.resolve({ ...dummyArtworkDataB, key: artworkKey });
  }

  // Uncomment below when ready to fetch from a real API
  /*
  try {
    // Replace this URL with the actual endpoint of your online service
    const response = await fetch(`https://yourapi.com/artworks/${artworkKey}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching artwork data:', error);
    throw error; // Re-throw the error for handling in the calling component
  }
  */
}