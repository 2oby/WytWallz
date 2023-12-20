// Dummy data for simulation purposes
const dummyArtworkData = {
  artworkImage: '../assets/SittingMan.png',
  title: "Sitting Man",
  description: "The sitting man is sitting. This demonstrates the importance of sitting as a commentary on sitting.",
  price: "€2,400",
  btcPrice: "0.15 BTC"
};

/**
 * Fetches artwork data based on a provided key.
 * Simulates fetching data from an API.
 * @param {string} artworkKey - The unique key for the artwork.
 * @returns {Promise<Object>} The artwork data.
 */
export async function fetchArtworkData(artworkKey) {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return the dummy data
  return Promise.resolve({ ...dummyArtworkData, key: artworkKey });

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