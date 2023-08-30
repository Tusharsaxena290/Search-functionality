import React, { useState } from 'react'
import "./SearchBar.css";
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({setFilteredData}) => {

    //states
    const[input,setInput]=useState("");
    //debouncing 
    let debouncing=null;
   

const handleChange=(e)=>{
    if(debouncing){
        clearTimeout(debouncing);
    }
    debouncing=setTimeout(()=>{
    setInput(e.target.value);
    fetchData(e.target.value);
    },300)
    
}
// useEffect(()=>{
// fetchData();
// },[input])

const fetchData=(val)=>{
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
.then((json)=>{
    const results=json.filter((user)=>{
        return val.length!=0 && user && user.name && user.name.toLowerCase().includes(val)
    })
    console.log(results);
    setFilteredData(results);
})

    
}


  return (
   <>
   
        <div className='input-wrapper'>
        <FiSearch className='search-logo'></FiSearch>
            <input className='input' type="text" 
            placeholder='Type to search...'
            onChange={handleChange}
        
            />
          
            
           
        </div>
        
        </>
    
  )
}

export default SearchBar
