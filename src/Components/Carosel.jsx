import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay} from 'swiper/modules';
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import '../Components/Style.css'
import 'swiper/css';
import { MdCurrencyRupee } from 'react-icons/md';
import "../Components/pagination.css"
const Carosel = () => {
  return (
    <>
  <Swiper
      spaceBetween={50}
      modules={[Pagination, Autoplay]}
      pagination={{clickable:true}}
      autoplay={{delay:5000}}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='flex justify-center' style={{width:'99%',height:'500px'}}>
        <div id='boat'></div>
        <div id='details'>
        <h5>boAt Airdopes 131</h5>
        <h1>Featherweight For <br />Comfort All-Day.</h1>
        <h5 className='mt-3'><MdCurrencyRupee />1,099 <span><s><MdCurrencyRupee />2,990</s></span></h5>
        <button className='btn btn-danger text-light mt-3'>Shop Now</button>
        <h1 className='fw-bold text-light'  style={{fontSize:'600px',zIndex:'1000'}}>In Ear</h1>
        </div>
    

        </div>
        {/* <div className=''>
          <div id='boat'></div>
        </div> */}
       
      </SwiperSlide>
      <SwiperSlide> 
        {/* <div className='flex justify-center' style={{width:'100%',height:'600px'}}>
        <img src={`../images/sonyXb910n-1.png`}  style={{width:'509px',marginLeft:'780px',marginTop:'100px'
        }} alt="" />
        </div> */}

<div className='flex justify-center' style={{width:'100%',height:'500px'}}>
        <div id='sony'></div>
        <div id='details'>
        <h5>Sony WH-XB910N</h5>
        <h1>Give Your Favourite <br />Music A Boost.</h1>
        <h5 className='mt-3'><MdCurrencyRupee />13,489 <span><s><MdCurrencyRupee />19,999</s></span></h5>
        <button className='btn btn-danger text-light mt-3'>Shop Now</button>
        {/* <h1 className='fw-bold text-light'  style={{fontSize:'600px',opacity:'0.35'}}>In Ear</h1> */}
        </div>
    

        </div>
        </SwiperSlide>
      <SwiperSlide> 
        {/* <div className='flex justify-center' style={{width:'100%',height:'600px'}}>
        <img src={`../images/jbl500bt-2.png`}  style={{width:'509px',marginLeft:'810px',marginTop:'100px'
        }}  alt="" />
        <h5>JBL Live 660NC</h5>
        <h1>Keep The Noise Out, <br />Or In.You Choose.</h1>
        <h5>$9,999 <span>$14,999</span></h5>
        </div> */}
         <div className='flex justify-center' style={{width:'100%',height:'500px'}}>
        <div id='jbl'></div>
          <div id='details'>
        <h5>JBL Live 660NC</h5>
        <h1>Keep The Noise Out, <br />Or In.You Choose.</h1>
        <h5 className='mt-3'><MdCurrencyRupee />9,999 <span><s><MdCurrencyRupee />14,999</s></span></h5>
        <button className='btn btn-danger text-light mt-3'>Shop Now</button>
        {/* <h1 style={{fontSize:'500px'}}>In Ear</h1> */}
        </div>
        </div>
        </SwiperSlide>
      
    </Swiper>



    </>
  )
}

export default Carosel