import React, { useState } from 'react'
import Data from '../Components/ProductsData'
import Card from './Card'
import Buttons from './Buttons'
import { MdCurrencyRupee } from 'react-icons/md'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Products = () => {
    const dispatch =useDispatch()
    const [item,setItems]=useState(Data)
    const menuItems=[...new Set(Data.map((val)=>val.category))]
const filterItems=(cat)=>{
    const newItems=Data.filter((newVal)=>newVal.category===cat)
    setItems(newItems)

}

const handleadd=(list)=>{
    dispatch(list)

}
    
  return (
    <div className='container-fluid'>
        <div className="row">
            <h1 className='text-center col-12 fw-bold mt-3 mb-5'>Top Products</h1>
            <Buttons menuItems={menuItems} filterItems={filterItems} setItems={setItems} />
            {/* <Card item={item} /> */}
            <div >
        <div className="row justify-content-center" style={{display:'flex',gap:'5px'}}>
            {
                item.map((val)=>(
                    // {console.log(val)}

                    <div key={val.id} className='col-3 card bg-dark border-light text-light'style={{width:'370px'}} >
                        <Link to={`/productdetails/${val.id}`}>
                        <div className='card-img-top ' >
                         <img src={val.images[0]}alt="image" style={{width:'290px',marginLeft: '24px', margintop: '12px'}}/>
                        </div>
                        </Link>
                        <div className='card-body'>{val.rateCount}
                        </div>
                        <div>{val.title}</div> 
                        <div>{val.info}</div>
                        <hr  />
                        <div className='d-flex'>
                            <div><MdCurrencyRupee />{val.finalPrice}</div>
                            <div><s><MdCurrencyRupee />{val.originalPrice}</s></div>
                        </div>
                        <div onClick={()=>{handleadd(val)}}><Link to='/addtocart'><button className='btn btn-danger w-100'>Add to Cart</button></Link></div>
                                                         
                           
                            
                            
                        </div>
                        
                        
                ))
            }
             <Link to="/browse" style={{textDecoration:'none'}}>
             <div class="card bg-dark border-light"  style={{width: '23rem'}}>
 
<div class="card-body d-flex align-items-center justify-content-center" >
   <h5 class="card-title bg-dark text-light fs-3 " >Browse All <br /> Products<IoMdArrowForward /></h5>
   {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
   
 </div>
 
</div>
</Link>
        </div>
        
       
        

    </div>

        </div>
    </div>
  )
}

export default Products