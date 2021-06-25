import Image from 'next/image';
import styles from './imageWrapper.module.scss';

const ImageWrapper = (props) => {
  return (
    <div className={styles['image__wrapper']}>
      <Image
        className={styles['image__media']}
        src={props.src}
        alt={props.alt || 'alt text'}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
         <div
        className={`${styles['image__media-alt']} ${
          theme === 'DEFAULT'
            ? styles['image__media-alt--default']
            : styles['image__media-alt--dark']
        }`}
      >
        <p>{props.alt}</p>
      </div>
    </div>
  );
};

export default ImageWrapper;
