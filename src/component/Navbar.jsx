import React from 'react'

export default function Navbar() {
  return (
    <div className='navbarcontainer'>

        <div className='logo' style={{cursor:"pointer"}}>
            <h1>FASHION</h1>
            <h1 style={{color:"red"}}>CUBE</h1>
        </div>
        <div className='centerNavbar' style={{cursor:"pointer"}}>
          <h5>HOME</h5>
          <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"

                >
                   SHOP
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <a className="dropdown-item" href="#">
                          WOMEN
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            MEN
                        </a>
                    </li>
                    
                </ul>
          </div>
          <h5>CONTACT</h5>
        </div>

        <div className='rightNav'>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-user"></i>
          <span className='cart'> 
          <i class="fa-solid fa-bag-shopping" style={{position:"absolute"}}></i>
          </span>
         
        </div>
 
    </div>
  )
}
