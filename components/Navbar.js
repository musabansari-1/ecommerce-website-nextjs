import React, { useState } from 'react';

import {AiOutlineSearch} from 'react-icons/ai';
import {TiShoppingCart} from 'react-icons/ti';
import {FaUserAlt} from 'react-icons/fa';
import Link from 'next/link';
import {MdLeaderboard} from 'react-icons/md';
import { useStateContext } from '@/context/StateContext';

function Navbar() {

  const {setShowLeaderBoard, showLeaderBoard} = useStateContext();

  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container navbar-container">
    <Link href="/">
    <div class="navbar-brand" >UIExpress</div>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav m-auto my-2 my-lg-0 ">
        <li class="nav-item">
          <a class="nav-link"  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Featured</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact us</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
        </li> */}
      </ul>
      <form class="d-flex">
        <input className="form-control me-2 search shadow-none" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn" type="submit"><AiOutlineSearch/></button>
      </form>
      
      <div className='d-flex navbar-icons'>
      <div onClick={async () => {await setShowLeaderBoard(true); console.log(showLeaderBoard)}} style={{borderRadius: '50%', border: '2px solid orangered', padding: '6px' , }}>
      <MdLeaderboard/>
      </div>
      
      <div style={{borderRadius: '50%', border: '2px solid orangered', padding: '6px', }}>
      <FaUserAlt/>
      </div>

      <Link href="/cart">
      <div style={{borderRadius: '50%', border: '2px solid orangered', padding: '6px', }}>
      <TiShoppingCart/>
      </div>
      </Link>
      </div>
      
      
    </div>
    </div>
    
</nav>
  );
}

export default Navbar;