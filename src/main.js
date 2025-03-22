import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  cleanGallery,
  showLoader,
  hideLoader,
  hideButton,
  showButton,
} from './js/render-functions.js';


const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const moreBtn = document.querySelector('.more-btn');

const perPage = 15;
let page = 1;
let totalHits = 0;
let query = '';


form.addEventListener('submit', async event => {
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
  hideButton();

  try {
    page = 1;
    const data = await fetchImages(query, page, perPage);
    const images = data.hits;

    hideLoader();

    if (images.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      form.reset();
      return;
    }

    renderImages(images);
    form.reset();
    totalHits = data.totalHits;

    if (totalHits > perPage) {
      showButton();
    }

  } catch (error) {
    hideLoader();

    iziToast.error({
      message:
        'An error occurred while fetching images. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});


moreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const lastPage = Math.ceil(totalHits / perPage); 

    const data = await fetchImages(query, page, perPage);
    hideLoader();

    const images = data.hits;
    renderImages(images);

    const { height } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: 'smooth' });

    if (page >= lastPage) { 
      hideButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results",
        position: 'topRight',
      });
    }
  } catch (error) {
    hideLoader();

    iziToast.error({
      message: 'An error occurred while loading more images.',
      position: 'topRight',
    });
    console.error(error);
  }
});