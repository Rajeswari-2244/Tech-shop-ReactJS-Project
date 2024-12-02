import React from 'react'
import productsData from './ProductsData'
import { Link } from 'react-router-dom'
import { MdCurrencyRupee } from 'react-icons/md'
import Header from './Header'
import Footer from './Footer'
const BrowseProducts = () => {
  return (
    <>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8'>
                    {/* <div className='row '> */}
                        {/* <div className='col-lg-4 'style={{display:'flex',gap:'5px' ,flexWrap:'wrap'}} > */}
                            {
                                productsData.map((ele)=>(
                                     
                    <div key={ele.id} className='col-3 card bg-dark border-light text-light'style={{width:'370px'}} >
                    <Link to={`/productdetails/${ele.id}`}>
                    <div className='card-img-top ' >
                     <img src={ele.images[0]}alt="image" style={{width:'290px',marginLeft: '24px', margintop: '12px'}}/>
                    </div>
                    </Link>
                    <div className='card-body'>{ele.rateCount}
                    </div>
                    <div>{ele.title}</div> 
                    <div>{ele.info}</div>
                    <hr  />
                    <div className='d-flex'>
                        <div><MdCurrencyRupee />{ele.finalPrice}</div>
                        <div><s><MdCurrencyRupee />{ele.originalPrice}</s></div>
                    </div>
                    <div><button className='btn btn-danger w-100'>Add to Cart</button></div>
                                                     
                       
                        
                        
                    </div>
                    
                                ))
                            }
                            {/* </div>  */}
                            {/* </div> */}

                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default BrowseProducts