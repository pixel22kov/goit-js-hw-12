import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import { renderImages, cleanGallery, showLoader, hideLoader } from './js/render-functions.js';


const form = document.querySelector('.form');
const input = document.querySelector('.form-input');


form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a valid search query!',
      position: 'topRight',
    });
    return;
  }

  cleanGallery();
  showLoader();

  fetchImages(query)
    .then(images => {
   if (images.length === 0) {
     iziToast.error({
       message: 'Sorry, there are no images matching your search query. Please try again!',
       position: 'topRight',
     });
     form.reset();
     return;
   }

    renderImages(images);
    form.reset();
    })
    .catch(error => {
    iziToast.error({
     message: 'An error occurred while fetching images. Please try again later.',
     position: 'topRight',
    });
    console.error(error);
  })
    .finally(() => {
      hideLoader(); 
  });
});