import SearchInput from "./SearchInput"

function App() {
  const onSearchSubmit = (event) => {
    console.log(event);
    
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
