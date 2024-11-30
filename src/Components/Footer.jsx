// import React from 'react'

// const Footer = () => {
//   const style={
//     elementStyle:{
//       marginBottom:'10px'
//     }
//   }
//   return (
//     <>
//     <footer style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}} className='bg-dark text-light'>
//       <div>
//         <h3>Tech-Shop</h3>
//         <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
//           <li style={style.elementStyle}>
//           <p style={{width:'250px'}}>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
//           </li>
//           <li style={style.elementStyle}>
//           <input style={{width:'250px'}} type="email" placeholder='Email Address' />
//           </li>

//           <li style={style.elementStyle}>
//           <button style={{width:''}}  className='btn btn-danger text-light p-2'>Subscribe</button>
//           </li>
//         </ul>
       

       
        
//       </div>
//       <div>
//         <h5>Help</h5>
//         <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
//           <li style={style.elementStyle}>FAQs</li>
//           <li style={style.elementStyle}>Track Order</li>
//           <li style={style.elementStyle}>Cancel Order</li>
//           <li style={style.elementStyle}>Return Order</li>
//           <li style={style.elementStyle}>Warrenty info</li>
//         </ul>
        
//       </div>
//       <div>
//         <h5>Polices</h5>
//         <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
//           <li style={style.elementStyle}>Return Policy</li>
//           <li style={style.elementStyle}>Security</li>
//           <li style={style.elementStyle}>Sitemap</li>
//           <li style={style.elementStyle}>Privacy Policy</li>
//           <li style={style.elementStyle}>Terms & Conditions</li>
//         </ul>
//       </div>
//       <div>
//         <h5>Company</h5>
//         <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
//           <li style={style.elementStyle}>About Us</li>
//           <li style={style.elementStyle}>Contact Us</li>
//           <li style={style.elementStyle}>Service Centers</li>
//           <li style={style.elementStyle}>Careers</li>
//           <li style={style.elementStyle}>Affiliates</li>
//           </ul>
//       </div>
//     </footer>
//         </>
//   )
// }

// export default Foo

import React from 'react'
import { footMenu } from './FooterData'
import { footSocial } from './IconsData'
const Footer = () => {
  console.log(footMenu)
  const [row1,row2,row3]=footMenu
  const icons=footSocial
  return (

    <>
    <div className="container-fluid ">
      <div className='row border-bottom' >
        <div className='col-lg-4'>
          <h3>Tech-Shop</h3>
          <p  style={{color:'gray',width:'350px'  }}>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
          <input style={{width:'350px',color:'white'}} type="email" className='form-control bg-transparent ' id='placeholder' placeholder='Email Address*' />
          <button type='button' id='btn' className='btn btn-danger mt-3 mb-5'>Subscribe</button>

        </div>

        <div className='col-lg-3'>
          <div className='mb-3'>{row1.title}</div>
          <div>
            {
              row1.menu.map((ele)=>(
                <div style={{color:'gray'}} className='mb-2'>{ele.link}</div>
              ))
            }
          </div>
        </div>

        <div className='col-lg-3'>
          <div  className='mb-3'>{row2.title}</div>
          <div>
            {
              row2.menu.map((ele)=>(
                <div className='mb-2' style={{color:'gray'}}>{ele.link}</div>
              ))
            }
          </div>
        </div>

        <div className='col-lg-2'>
          <div  className='mb-3'>{row3.title}</div>
          <div>
            {
              row3.menu.map((ele)=>(
                <div className='mb-2' style={{color:'gray'}}>{ele.link}</div>
              ))
            }
          </div>
        </div>

        
      </div>
      <div className='  d-flex'>
                  <div className='col-lg-9'> 2024 |All Rights Reserved. Built by| Nenavath Rajeswari</div>
                  <div className='col-lg-3'>{icons.map((ele)=>(
                    <span className='ms-5 '>{ele.icon}  </span>
                  ))
                    
                    }</div>
          
          </div>

      {/* <div className="col-lg-">
        <div>{row1.title}</div>

      </div>
         
      <div className="col-lg-3"><div>{row1.title}</div>
         {
          row1.menu.map((ele)=>(
            <div>
              <div>{ele.link} </div>
            </div>
          ))
         }
      </div>
      <div className="col-lg-3"></div>
      <div className="col-lg-3"></div> */}
    </div>
   
    </>
  )
}

export default Footer