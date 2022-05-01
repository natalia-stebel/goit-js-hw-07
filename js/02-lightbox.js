
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createGalleryItem = ({ preview, original, description }) => {
  return `
  <div>
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  </div>`;
};

// {/* <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a> */}

const createGalleryContainer = galleryItems.map(createGalleryItem).join('');
const galleryImages = document.querySelector('.gallery');

galleryImages.insertAdjacentHTML('beforeend', createGalleryContainer);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});