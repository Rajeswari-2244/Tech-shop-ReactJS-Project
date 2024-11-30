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

const Relatedproducts = ({Data,category}) => {
  return (
    <div>
    <div className='container'>
    <div className='d-flex align-items-center justify-content-center'><h1>Related Products</h1></div>

    <div className='container'> 
        {/* <div className='row'> */}

        <Swiper
              spaceBetween={50}
              modules={[Pagination,Autoplay]}
              pagination={{clickable:true}}
              autoplay={{delay:5000}}
              slidesPerView={4}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
               
 
         

            {
               Data.filter((ele)=>ele.category==category).map(ele => (
             

              <SwiperSlide>
                {/* <div className='row  ' style={{display:'inline'}}> */}
                <div className=' card  '>
                  <img src={ele.images[0]} alt="" />
                  <h1>{ele.title}</h1>
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