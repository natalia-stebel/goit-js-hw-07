       
import { galleryItems } from './gallery-items.js';
// Change code below this line

const createGalleryItem = ({ preview, original, description }) => {
  return `
 <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
    style="display:block"
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
  </a>
</div>
    `;
};


const createGalleryContainer = galleryItems.map(createGalleryItem).join('');

const galleryImages = document.querySelector('.gallery');

galleryImages.insertAdjacentHTML('beforeend', createGalleryContainer);

galleryImages.addEventListener('click', onImageClick);

function onImageClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
   modalOpen(event.target.dataset.source);
}
let instance;
function modalOpen(src) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${src}" style="height:100vh; display:block"></img>
    </div>
`,
    {
      isOpen: instance => {
        addListener();
      },
      isClose: instance => {
        removeListener();
      },
    },
  );
  instance.show();
}

function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}