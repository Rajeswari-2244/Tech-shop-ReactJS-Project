import React from 'react'
import servicesData from './Servicedata'

const Servicedata1 = () => {
  return (
    <div>
        <div className="container-fluid ms-3" style={{width:'1500px'}}>
            <div className='d-flex align-items-center justify-content-center mb-5 '><h1>Our Advantages</h1></div>
            <div className="row">
                {
                    servicesData.map((ele)=>(
                        <div className="col-lg-3 ">
                            <div className=" bg-black  text-light">
                                <div className='d-flex'>
                                    <div> <div className='text-danger fs-2 '>{ele.icon}</div></div>
                               <div>
                               <div className='fw-bold ms-5'>{ele.title}</div>
                               <div className='fw-light ms-5'>{ele.info}</div>
                            <div className='mb-5'></div>
                            

                               </div>
                              
                                </div>
                            </div>
                            <div className='mt-5'></div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Servicedata1