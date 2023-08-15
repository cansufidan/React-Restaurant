import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/banner.jpg'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>GORILL BURGER HOUSE</h1>
            <p>Handmade Burger Restaurant</p>
            <Link to="./menu"><button>Order Now</button></Link>
        </div>
    </div>
  )
}

export default Home