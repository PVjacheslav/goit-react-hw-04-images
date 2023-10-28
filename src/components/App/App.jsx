import { Component, useEffect, useState } from "react";
import * as API from '../../helpers/PixabayAPI'
import { SearchBar } from "components/Searchbar/SearchBar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { Button } from "components/Button/Button";
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [searchName, setSearchName] = useState('')
  const [images, setImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    if (searchName === '') {
      return
    }
    
    async function addImages() {
      try {
        setIsLoading(true)
  
        const data = await API.getImages(searchName, currentPage);
  
        if (data.hits.length === 0) {
          return toast.info('Sorry image not found...', {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
  
        const normalizedImages = API.normalizedImages(data.hits);
  
        setImages(prevImages => [...prevImages, ...normalizedImages])
        setIsLoading(false)
        setTotalPages(Math.ceil(data.totalHits / 12))
      } catch (error) {
        toast.error('Something went wrong!', {
            position: toast.POSITION.TOP_RIGHT,
          });
      } finally {
        setIsLoading(false)
      }
    }
    addImages()
  },[searchName, currentPage])

  const LoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1)
  };

  const handleSubmit = query => {
    setSearchName(query)
    setImages([])
    setCurrentPage(1)
  };

  return (
      <div>
        <ToastContainer transition={Slide} />
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
            <p
              style={{
              padding: 120,
              textAlign: "center",
              fontSize: 32
            }}
            >
              Image gallery is empty...
            </p>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={LoadMore}/>
        )}
      </div>
    );
}
export class App1 extends Component{

  

  

 

 

};
