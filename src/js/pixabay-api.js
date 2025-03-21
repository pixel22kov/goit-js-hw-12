import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myApiKey = '49327575-d50cf96af4b1ede3148c0e758';
const pixabayUrl = 'https://pixabay.com/api/';

export const fetchImages = async (query, page, perPage) => {
  try {
    const response = await axios.get(pixabayUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: perPage,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    iziToast.error({
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  }
};
