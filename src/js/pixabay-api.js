import axios from 'axios';

const apiKey = '47040880-6387dd83a064ed0d7a9fde087';
const baseUrl = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await axios.get(baseUrl, {
    params: {
      key: '47040880-6387dd83a064ed0d7a9fde087',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
}
