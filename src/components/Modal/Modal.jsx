import { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalWrapper } from './Modal.styled';

import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };

    onClickBackdrop = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <Overlay onClick={this.onClickBackdrop}>
                <ModalWrapper>
                    <img src={this.props.largeImageURL} alt="" />
                </ModalWrapper>
            </Overlay>,
            modalRoot
        );
    }
}

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
