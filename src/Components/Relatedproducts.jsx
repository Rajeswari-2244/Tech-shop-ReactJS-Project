// import React from 'react'

// const Relatedproducts = ({Data,category}) => {
//   return (
//     <>
// <div className='container'>
//   <div className='d-flex align-items-center justify-content-center'><h1>Related Products</h1></div>
//   {/* {
//     const filterItems=(cat)=>{
//       const newItems=Data.filter((newVal)=>newVal.category===cat)
//       setItems(newItems)
//   }
// } */}

// {/* <div className='container'> */}
//     <div className='row'>
//         {
//             Data.filter((ele)=>ele.category==category)
//               </div>
                    
                
                
            
//               }
//               {/* </div> */}
//               </div>
            
  
//     </>
//   )
// }

// export default Relatedproducts
import React from 'react'
// import Swiper from 'swiper'
// import { Autoplay, Pagination } from 'swiper/modules'
// import { SwiperSlide } from 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { MdCurrencyRupee } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Relatedproducts = ({Data,category}) => {


  const rating=({rateCount})=>{
    let a=''
    for(let i=0;i<rateCount;i++){
      if(i<rateCount){
     a += '⭐'
                
      }
     

    }
    return a
   
  }
  return (
    <div>
    <div className='container'>
    <div className='d-flex align-items-center justify-content-center'><h1>Related Products</h1></div>

    <div className='container'> 
      

        <Swiper
              spaceBetween={50}
              modules={[Pagination,Autoplay]}
              pagination={{clickable:true}}
              autoplay={{delay:3000}}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
               
 
         

            {
               Data.filter((ele)=>ele.category==category).map(ele => (
             

              <SwiperSlide>
                <div className='container py-5'>
                <div key={ele.id} className=' card bg-dark border-light text-light'style={{width:'370px'}} >
                      
                        <div className='card-img-top ' >
                         <img src={ele.images[0]}alt="image" style={{width:'290px',marginLeft: '24px', margintop: '12px'}}/>
                        </div>
                      
                        <div className='card-body'>{rating(ele.rateCount)}
                        </div>
                        <div>{ele.title}</div> 
                        <div>{ele.info}</div>
                        <hr  />
                        <div className='d-flex'>
                            <div><MdCurrencyRupee />{ele.finalPrice}</div>
                            <div><s><MdCurrencyRupee />{ele.originalPrice}</s></div>
                        </div>
                        <div><Link to='/addtocart'><button className='btn btn-danger w-100'>Add to Cart</button></Link></div>
                                                         
                           
                            
                            
                        </div>
                        </div>

                {/* <img src={ele.images[0]} alt="" /> */}
                {/* <h1>{ele.title}</h1> */}
                {/* <div className=''> </div> */}
                {/* </div> */}
                </SwiperSlide>
                            ))
            } 

              </Swiper>
              
            
            
            
          {/* } */}
    </div>
    </div>


    </div>
    //  </div>
  )
}
export default Relatedproducts