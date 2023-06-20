import React from 'react'

export default function Delivery({listDeliverys}) {
  return (
    <div className='deliveryContainer'>
       {
        listDeliverys.map((item,index) => (
            <div className='itemDelivery' key={index}>
               <div className='containerDetail'>
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                    <div className='detailDeli'>
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                    </div>
               </div>
        </div>
        ))
       }
    </div>
  )
}
