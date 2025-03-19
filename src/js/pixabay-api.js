import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const myApiKey = '49327575-d50cf96af4b1ede3148c0e758';
const pixabayUrl = 'https://pixabay.com/api/';

export const fetchImages = query =>
  axios
    .get(pixabayUrl, {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      console.error(error);
    });