import React, { useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import '../Components/Style1.css'
const Header = () => {
  const [search,setsearch]=useState(false)
  const searchicon=()=>{
    setsearch(!search)

  }
  return (

    <div>
      
       <nav className="  navbar navbar-expand-lg  bg-dark ">
  <div className="container-fluid">
 
   <Link to='/' className='text-light text-decoration-none fs-3 ms-4'>Tech-Shop</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    </div>
    {search&&(
        <div className='search-popup'>
          <input className='form-control bg-black  border-light'  style={{marginRight:'300px' ,position:'relative',right:'450px',top:'75px'}} id='search1' type='text' />     
        </div>
      )}
    <div >
        <Link className='text-light bg-dark me-4  fs-4' onClick={searchicon} ><CiSearch /></Link>
        </div>
        <div >
        <Link to='/addtocart' className='text-light  me-4 fs-4'><IoCartOutline /></Link>
        </div>
        <div >
        <Link className='text-light me-4 fs-4'><CiUser  /></Link>
        </div>
    
    {/* <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <CiSearch />
        </li>
        <li class="nav-item">
        <IoCartOutline />
        </li>
        <li class="nav-item">
        <CiUser  />
        </li>
      
      </ul> */}
    {/* </div> */}
  {/* </div> */}
  
</nav>
    </div>
  )
}

export default Header