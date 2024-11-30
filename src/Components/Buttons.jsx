import React from 'react'
import Data from '../Components/ProductsData'
import '../Components/Buttons.css'

const Buttons = ({menuItems,filterItems,setItems}) => {
  return (
    <div className='d-flex justify-content-center mb-5'>
        <button className='btn btn-black text-white p-1 px-2 mx-5 fw-bold' id='btn'  onClick={()=>setItems(Data)}>All</button> 
        {
            menuItems.map(val=>(
               <button className='btn btn-black text-white p-1 px-2 mx-5 fw-bold'  id='btn' onClick={()=>filterItems(val)}>{val}</button> 
            ))
        }
           

    </div>
  )
}

export default Buttons