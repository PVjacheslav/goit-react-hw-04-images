import { Component } from "react";
import { createPortal } from "react-dom";
import { ModalWindow, Overlay } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
        document.body.style.overflow = 'visible'
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        const { largeImageURL, tags } = this.props; 

        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <ModalWindow>
                    <img src={largeImageURL} alt={tags} />
                </ModalWindow>
            </Overlay>,
            modalRoot);
    }
}