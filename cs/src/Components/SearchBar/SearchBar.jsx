import React from 'react'
import './SearchBar.css'
import search_icon from '../Assets/search-icon.png'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Seach Here'/>
      <img src={search_icon} alt="" />
    </div>
  )
}

export default SearchBar
