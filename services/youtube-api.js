import axios from 'axios';
const API_URL = process.env.API_URL || 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = process.env.API_KEY;

const youtubeSearch = async (term) => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video',
  };

  try {
    const response = await axios.get(API_URL, { params });
    return response.data.items;
  } catch (error) {
    console.log(`youtube api error: ${error}`);
    throw error;
  }
};

export default youtubeSearch;
