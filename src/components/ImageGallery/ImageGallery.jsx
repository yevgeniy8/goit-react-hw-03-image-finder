import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { Gallery } from './ImageGallery.styled';

import PropTypes from 'prop-types';

const ImageGallery = ({ collections, openModal }) => {
    return (
        <Gallery>
            {collections.map(item => (
                <ImageGalleryItem
                    key={item.id}
                    id={item.id}
                    webformatURL={item.webformatURL}
                    openModal={openModal}
                />
            ))}
        </Gallery>
    );
};

ImageGallery.propTypes = {
    collections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ),
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
