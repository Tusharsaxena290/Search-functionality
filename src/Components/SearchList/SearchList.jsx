import React from 'react'
import "./SearchList.css";
import ListItem from '../ListItem/ListItem';

const SearchList = ({filteredData}) => {
  return (
    <>
    <div className='filtered-data-wrapper'>
   {filteredData.map((result,id)=>{
    return <ListItem name={result.name} key={id}/>
   })}

    </div>
   
    </>
  )
}

export default SearchList
