import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fetchSubmit = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loadButton = document.querySelector('.load-button');
const galleryList = document.querySelector('.gallery-list');

let page = 1;
let perPage = 15;
let totalHits = 0;
let searchRequest = '';

fetchSubmit.addEventListener('submit', async event => {
  event.preventDefault();
  searchRequest = searchInput.value.trim();
  page = 1;
  galleryList.innerHTML = '';
  loadButton.style.display = 'none';
  await loadPhotos();
});

loadButton.addEventListener('click', async () => {
  await loadPhotos();

  const photoItem = document.querySelector('.photo-item');
  if (photoItem) {
    const itemHeight = photoItem.getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  }
});

async function loadPhotos() {
  if (!searchRequest) return;

  gallery.style.display = 'block';
  const searchParams = {
    key: '47040880-6387dd83a064ed0d7a9fde087',
    q: searchRequest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page,
  };

  try {
    const photos = await fetchPhotos(searchParams);
    gallery.style.display = 'none';
    if (photos.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'No images found. Try again with a different query.',
      });
      return;
    }

    totalHits = photos.totalHits;
    await renderPhotos(photos.hits);
    page++;

    const totalDisplayed = (page - 1) * perPage;
    if (totalDisplayed >= totalHits) {
      loadButton.style.display = 'none';
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      loadButton.style.display = 'block';
    }
  } catch (error) {
    gallery.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: `Something went wrong. Error: ${error.message}`,
    });
  }
}

iziToast.settings({
  timeout: 10000,
  position: 'topRight',
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
});
