import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Servicedata1 from './Servicedata1'
import Data from '../Components/ProductsData'
import { FaStar } from 'react-icons/fa'
import { MdOutlineCurrencyRupee } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import Relatedproducts from './Relatedproducts'
const Productdetals = () => {
  let {id}= useParams()
  const details=Data[id-1]
 
console.log(details)
// console.log(Data)
  const {images,title,info,category,finalPrice,originalPrice,rateCount}=details
  // console.log(title)

  // console.log(id)
//  const [userData,setuserData]=useState([])
    const [img1,img2,img3,img4]=images;
    let discountPrice=originalPrice-finalPrice;
    const [display,setdisplay]=useState(img1)

    const rating=()=>{
      let a=''
      for(let i=0;i<rateCount;i++){
        if(i<rateCount){
       a += '⭐'
                  
        }
       
 
      }
      return a
     
    }
  return (
    <>
      <Header/>
      <div className='container-fluid'>
      {/* {
        Data.map((ele)=>(
          
          <div className='col-lg-1'>
            <img src={ele.images[0]} alt="image1" style={{width:'100px'}} />
            <img src={ele.images[1]} alt="image2" style={{width:'100px'}}/>
            <img src={ele.images[2]} alt="image3" style={{width:'100px'}}/>
            <img src={ele.images[3]} alt="image4" style={{width:'100px'}}/>

            </div>
          
          
        ))
      } */}

      <div className='row'>
        <div className="col-lg-1">
          <img src={img1} style={{width:'150px'}} className='border m-3 p-2' onClick={()=>setdisplay(img1)}/>
          <img src={img2} style={{width:'150px'}} className='border m-3 p-2'  onClick={()=>setdisplay(img2)}/>
          <img src={img3} style={{width:'150px'}} className='border m-3 p-2' onClick={()=>setdisplay(img3)}/>
          <img src={img4} style={{width:'150px'}} className='border m-3 p-2' onClick={()=>setdisplay(img4)}/>
        </div>
        <div className='col-lg-1'></div>
        <div className='col-lg-6'>
          <img src={display} alt=""  style={{width:'650px'}} className='image-fluid'/>
        </div>
        <div className='col-lg-3 text-start'>
          <h2 className='mt-3 '>{title}</h2>
          <p>{info}</p>
          <p className='border-bottom pb-4 mb-5 ' style={{color:'gray'}}>{rating()}| 1234 Ratings</p>
          <div className='d-flex' style={{position:'relative',top:'72px'}}>
            <h1><MdOutlineCurrencyRupee />{finalPrice}</h1>
            <h4 className='mt-3 ms-3' style={{color:'gray'}}><strike><MdOutlineCurrencyRupee />{originalPrice}</strike></h4>

          </div>
          {/* <h1 ><MdOutlineCurrencyRupee />{finalPrice} <h3><strike><MdOutlineCurrencyRupee />{originalPrice}</strike></h3></h1> */}
          <p className='fs-5' style={{color:'green',position:'relative',top:'60px'}}>You save:<MdOutlineCurrencyRupee />5,000(33%)</p>
          <span><button className='btn btn-success' style={{position:'relative',bottom:'22px',left:'268px'}}><TiTick />In-stock</button></span>
          <p className='fs-5 border-bottom pb-4' style={{color:'gray'}}>Inclusive of all taxes</p>
          <h3>Offers and Discounts</h3>
          <div className='d-flex border-bottom pb-4'>
            <p className=' border p-1  m-2' style={{width:'450px'}}>No Cost EMI on Credit Card</p>
            <p className=' border p-1 m-2'style={{width:'450px'}}>Pay Later & Avail Cashback</p>
          </div>
          <button className='btn btn-danger mt-5 w-50'>Add to cart</button>
        </div>
      </div>
      </div>



<Relatedproducts Data={Data} category={category} />

      <Servicedata1/>

      <Footer/>
        
    </>
  )
}

export default Productdetals