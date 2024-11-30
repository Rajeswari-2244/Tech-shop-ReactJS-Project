import React from 'react'
import Productdetals from './Productdetals'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import HomeCopnents from './HomeCopnents'
import BrowseProducts from './BrowseProducts'
import AddtoCart from './AddtoCart'
const Routings = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeCopnents/>}/>
        <Route path='/productdetails/:id' element={<Productdetals />}/>
        <Route path='/browse' element={<BrowseProducts />}/>
        <Route path='/addtocart' element={<AddtoCart/>}/>

    </Routes>
  )
}


export default Routings