import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
const ImageGallery = ({ images, openModal }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className={s.gallery}>
        {images.map(image => (
          <li className={s.item} key={image.id} onClick={() => openModal(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
