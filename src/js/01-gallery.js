// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line
const galleryListRef = document.querySelector('.gallery');

// * Create gallery
galleryListRef.innerHTML = createGalleryMarkup();

function createGalleryMarkup() {
  return galleryItems.map(({
    preview: previewSrc,
    original: originalSrc,
    description,
  }) => `<li class='gallery__item'>
   <a class='gallery__link' href='${originalSrc}'>
      <img class='gallery__image' src='${previewSrc}' alt='${description}' />
   </a>
</li>`).join("");
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
