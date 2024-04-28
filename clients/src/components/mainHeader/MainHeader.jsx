import React from 'react'
import "./mainHeader.css"

const MainHeader = () => {
  return (
    <div className='mainHeader'>
      <ul className='headers'>
          <li className="headers_ListItem">Home</li>
          <li className="headers_ListItem">
            <a href="/about">
            About Us
            </a>
            <ul className='innerUl'>
              <li>Who We Are </li>
              <li>Our Facilities</li>
            </ul>
          </li>
          <li className="headers_ListItem">Rooms</li>
          <li className="headers_ListItem">Events</li>
          <li className="headers_ListItem">Galery</li>
          <li className="headers_ListItem">Blog</li>
          <li className="headers_ListItem">Reservation</li>
          <li className="headers_ListItem">Contact Us</li>
      </ul>
    </div>
  )
}

export default MainHeader
