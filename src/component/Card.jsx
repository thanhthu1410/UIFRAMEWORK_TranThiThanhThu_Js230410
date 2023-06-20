import React from 'react'

export default function Card({listItems}) {
    return (
        
        <div className='cardContainer'>
            
            {
                listItems.map((item,index)=>(
                    <div className="card" style={{ width: "27%" ,position:"relative"}} key={index}>
                        <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body contentCart" style={{position:"absolute"}}>
                        <button>{item.content}</button>
                    </div>
                </div>
            ))
        }       
         </div>
    )
}
