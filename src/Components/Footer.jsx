import React from 'react'

const Footer = () => {
  const style={
    elementStyle:{
      marginBottom:'10px'
    }
  }
  return (
    <>
    <footer style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}} className='bg-dark text-light'>
      <div>
        <h3>Tech-Shop</h3>
        <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
          <li style={style.elementStyle}>
          <p style={{width:'250px'}}>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
          </li>
          <li style={style.elementStyle}>
          <input style={{width:'250px'}} type="email" placeholder='Email Address' />
          </li>

          <li style={style.elementStyle}>
          <button className='btn btn-danger text-light p-2'>Subscribe</button>
          </li>
        </ul>
       

       
        
      </div>
      <div>
        <h5>Help</h5>
        <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
          <li style={style.elementStyle}>FAQs</li>
          <li style={style.elementStyle}>Track Order</li>
          <li style={style.elementStyle}>Cancel Order</li>
          <li style={style.elementStyle}>Return Order</li>
          <li style={style.elementStyle}>Warrenty info</li>
        </ul>
        
      </div>
      <div>
        <h5>Polices</h5>
        <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
          <li style={style.elementStyle}>Return Policy</li>
          <li style={style.elementStyle}>Security</li>
          <li style={style.elementStyle}>Sitemap</li>
          <li style={style.elementStyle}>Privacy Policy</li>
          <li style={style.elementStyle}>Terms & Conditions</li>
        </ul>
      </div>
      <div>
        <h5>Company</h5>
        <ul style={{listStyle:'none',marginLeft:'-25px',marginTop:'25px'}}>
          <li style={style.elementStyle}>About Us</li>
          <li style={style.elementStyle}>Contact Us</li>
          <li style={style.elementStyle}>Service Centers</li>
          <li style={style.elementStyle}>Careers</li>
          <li style={style.elementStyle}>Affiliates</li>
          </ul>
      </div>
    </footer>
        </>
  )
}

export default Footer