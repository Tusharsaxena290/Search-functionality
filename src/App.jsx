import SearchBar from "./Components/SearchBar/SearchBar"
import "./App.css";
import { useState } from "react";
import SearchList from "./Components/SearchList/SearchList";
function App() {
  const[filteredData,setFilteredData]=useState([]);
  

  return (
    <>
      <div className="App">

      
      <SearchBar setFilteredData={setFilteredData}/>
      <SearchList filteredData={filteredData}/>
      </div>
    </>
  )
}

export default App
