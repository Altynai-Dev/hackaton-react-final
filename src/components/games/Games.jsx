import React from 'react'
import Cards from './Cards'
import "./Games.css"; 
import Navbar from '../navbar/Navbar';

const Games = () => {
  return (
   <div className='game'>
    <Navbar/>
    <h1>NETFLIX ANIME GAME</h1>
    <Cards />
    </div>
  )
}

export default Games