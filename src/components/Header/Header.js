import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="title">
            <h1>Weather</h1>
        </div>
        
        <div className="search-bar">
            <form action="">
                <input type="text" placeholder='Search' />
                <button type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>      
    </div>
  )
}
