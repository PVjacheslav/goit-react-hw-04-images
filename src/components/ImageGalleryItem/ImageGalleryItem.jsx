import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { Img, Item } from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ image }) => {
    const[openModal, setOpenModal] = useState()

    const toggleModal = () => {
        setOpenModal(prevModal => !prevModal)
    }
        
        return (
            <>
                <Item>
                    <Img
                        src={image.webformatURL}
                        alt={image.tags}
                        onClick={toggleModal}
                    />
                    {openModal && (
                        <Modal
                            largeImageURL={image.largeImageURL}
                            tags={image.tags}
                            onClose={toggleModal}
                        />
                    )}
                </Item>
            </>
        )
    
}