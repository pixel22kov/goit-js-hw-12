import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.remove('visually-hidden');
}
export function hideLoader() {
  loader.classList.add('visually-hidden');
}

export const cleanGallery = () => {
  gallery.innerHTML = '';
};

export const renderImages = images => {
  const markup = images.map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
      `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}" alt="${tags}">
          <div class="photo-wrapper">
            <img src="${webformatURL}" alt="${tags}" />
            <div class="info-wrapper">
              <div class="info-box">
                <h3 class="gallery-title">Likes</h3>
                <p class="gallery-text">${likes}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Views</h3>
                <p class="gallery-text">${views}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Comments</h3>
                <p class="gallery-text">${comments}</p>
              </div>
              <div class="info-box">
                <h3 class="gallery-title">Downloads</h3>
                <p class="gallery-text">${downloads}</p>
              </div>
            </div>
          </div>
        </a>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250, 
  });
  lightbox.refresh();
};