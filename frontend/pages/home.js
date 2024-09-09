import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/laptop.jpg"
import "../Styles/home.css"
function home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer"      >
        <h1>
          Tech Friend
        </h1>
        <p>Your tech buddy</p>
        <Link to="/menu"> 
        <button>VIEW CROUSE</button>
        </Link>

      </div>
    </div>
  )
}

export default home;

