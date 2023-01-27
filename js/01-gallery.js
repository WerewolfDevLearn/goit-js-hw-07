import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
let indexOfImage = -1;

const arrOfGalleryItems = galleryItems.map(galleryItem => createGallaryItem(galleryItem));
galleryContainer.append(...arrOfGalleryItems);

function createGallaryItem(galleryItem) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('gallery__item');
  const itemLink = document.createElement('a');
  itemLink.classList.add('gallery__link');
  itemLink.href = `${galleryItem.original}`;
  const imageItem = document.createElement('img');
  imageItem.classList.add('gallery__image');
  imageItem.src = `${galleryItem.preview}`;
  imageItem.alt = `${galleryItem.description}`;
  imageItem.dataset.source = `${galleryItem.original}`;
  imageItem.dataset.indexofimage = `${(indexOfImage += 1)}`;
  itemLink.append(imageItem);
  itemContainer.append(itemLink);
  return itemContainer;
}

galleryContainer.addEventListener('click', event => {
  event.preventDefault();
  const itemRef = event.target;
  if (itemRef.nodeName !== 'IMG') {
    return;
  }

  const content = document.createElement('div');
  const lightBoxImage = document.createElement('img');
  lightBoxImage.src = itemRef.dataset.source;
  lightBoxImage.alt = itemRef.alt;
  lightBoxImage.dataset.indexoflargeimage = itemRef.dataset.indexofimage;
  content.appendChild(lightBoxImage);
  console.log(lightBoxImage);

  const basicLightInstans = basicLightbox.create(content, {
    onShow: () => addWindowListener(),
    onClose: () => removeWindowListener(),
  });
  basicLightInstans.show();

  function addWindowListener() {
    window.addEventListener('keydown', changeLargeImageIndex);
    window.addEventListener('keydown', pressEscBtn);
  }
  function removeWindowListener() {
    window.addEventListener('keydown', changeLargeImageIndex);
    window.removeEventListener('keydown', pressEscBtn);
  }
  function pressEscBtn(event) {
    if (event.code === 'Escape') {
      basicLightInstans.close();
    }
  }

  function changeLargeImageIndex(event) {
    const currentImgIndex = Number(lightBoxImage.dataset.indexoflargeimage);

    if (event.code === 'ArrowLeft') {
      const prevImgIindex = currentImgIndex - 1;

      if (prevImgIindex >= 0) {
        lightBoxImage.src = `${galleryItems[prevImgIindex].original}`;
        lightBoxImage.alt = `${galleryItems[prevImgIindex].description}`;
        lightBoxImage.dataset.indexoflargeimage = prevImgIindex;
      }
    }

    if (event.code === 'ArrowRight') {
      const nextImgIndex = currentImgIndex + 1;

      if (nextImgIndex < galleryItems.length) {
        lightBoxImage.src = `${galleryItems[nextImgIndex].original}`;
        lightBoxImage.alt = `${galleryItems[nextImgIndex].description};`;
        lightBoxImage.dataset.indexoflargeimage = nextImgIndex;
      }
    }
  }
});
