import React from 'react'
import { MdCurrencyRupee } from 'react-icons/md'

const Card = ({item}) => {
  return (
    <div className='container'>
        <div className="row justify-content-center" style={{display:'flex',gap:'5px'}}>
            {
                item.map((val)=>(
                    // {console.log(val)}
                    <div key={val.id} className='col-3 card 'style={{width:'370px'}} >
                        <div className='card-img-top ' >
                            <img src={val.images[0]}alt="image" />
                        </div>
                        <div className='card-body'>{val.rateCount}</div>
                        <div>{val.title}</div> 
                        <div>{val.info}</div>
                        <hr  />
                        <div className='d-flex'>
                            <div><MdCurrencyRupee />{val.finalPrice}</div>
                            <div><s><MdCurrencyRupee />{val.originalPrice}</s></div>
                        </div>
                        <div><button className='btn btn-danger w-100'>Add to cart</button></div>
                                                         
                           
                            
                            
                        </div>
                        
                ))
            }
        </div>

    </div>
  )
}

export default Card