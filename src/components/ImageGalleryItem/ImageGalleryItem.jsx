import { Component } from "react";
import { Modal } from "components/Modal/Modal";
import { Img, Item } from "./ImageGalleryItem.styled";


export class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }))
    }

    render() {
        const { showModal } = this.state;
        const { image } = this.props;
        return (
            <>
                <Item>
                    <Img
                        src={image.webformatURL}
                        alt={image.tags}
                        onClick={this.toggleModal}
                    />
                    {showModal && (
                        <Modal
                            largeImageURL={image.largeImageURL}
                            tags={image.tags}
                            onClose={this.toggleModal}
                        />
                    )}
                </Item>
            </>
        )
    }
}