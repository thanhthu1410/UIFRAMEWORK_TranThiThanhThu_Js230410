
import React from 'react'
import DropdownNav from './DropdownNav'


export default function HeaderNav() {
  return (
    <div>
         <div className='headerNav'>
            <p className='navbarLeft'>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
            <DropdownNav/>
        </div>
       

    </div>
   
  )
}
