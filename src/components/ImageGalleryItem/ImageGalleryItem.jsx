import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, openModal }) => {
    return (
        <GalleryItem onClick={() => openModal(id)}>
            <GalleryItemImage src={webformatURL} alt="" />
        </GalleryItem>
    );
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
