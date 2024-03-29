import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const arrOfGalleryItems = galleryItems.map(galleryItem => createGallaryItem(galleryItem));
galleryContainer.append(...arrOfGalleryItems);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(lightbox);

function createGallaryItem(galleryItem) {
  const itemLink = document.createElement('a');
  itemLink.classList.add('gallery__link');
  itemLink.href = `${galleryItem.original}`;
  const imageItem = document.createElement('img');
  imageItem.classList.add('gallery__image');
  imageItem.src = `${galleryItem.preview}`;
  imageItem.alt = `${galleryItem.description}`;
  //   imageItem.title = `${galleryItem.description}`;
  itemLink.append(imageItem);
  return itemLink;
}
