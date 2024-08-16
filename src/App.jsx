import axios from "axios";
import SearchInput from "./SearchInput"

function App() {
  const onSearchSubmit = async (query) => {
    const response = await axios.get(`https://pixabay.com/api/?key=45463405-0522f51c0428c9fca70bd989a&q=${query}&image_type=photo&pretty=true`)
    console.log(response.data.hits);
    
    
  }
  return (
    <>
    <div className="ui container" style={{marginTop: 30}}>
      <SearchInput onSearchSubmit={ onSearchSubmit } />
    </div>
    </>
  )
}

export default App
