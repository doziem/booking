import React from 'react'
import "./mainHeader.css"

const MainHeader = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNavDropdown"
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <a className="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li className="nav-item dropdown">
    //           <a
    //             className="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdownMenuLink"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown link
    //           </a>
    //           <ul
    //             className="dropdown-menu"
    //             aria-labelledby="navbarDropdownMenuLink"
    //           >
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <a className="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
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
  );
}

export default MainHeader
