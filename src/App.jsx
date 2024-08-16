import axios from "axios";
import SearchInput from "./SearchInput"
import { useState } from "react";
import ImageList from "./ImageList";

function App() {
  const [ images, setImages ] = useState([]);

  const onSearchSubmit = async (query) => {
    const response = await axios.get(`https://pixabay.com/api/?key=45463405-0522f51c0428c9fca70bd989a&q=${query}&image_type=photo&pretty=true`)
    setImages(response.data.hits);    
  }
  return (
    <>
    <div className="ui container" style={{marginTop: 30}}>
      <SearchInput onSearchSubmit={ onSearchSubmit } />
      <ImageList images={images} />
    </div>
    </>
  )
}

export default App
