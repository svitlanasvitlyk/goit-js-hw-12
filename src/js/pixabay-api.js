import axios from 'axios';

export async function fetchPhotos(params) {
  const response = await axios.get('https://pixabay.com/api/', { params });
  console.log(response.config.url);
  return response.data;
}
