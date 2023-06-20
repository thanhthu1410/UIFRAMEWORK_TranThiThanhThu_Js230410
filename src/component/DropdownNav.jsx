import React from 'react'
import './Dropdown.css';

export default function DropdownNav() {
    return (
        <div className='dropdownNav'>
            <div className="dropdown">
                <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                >
                    USD
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <a className="dropdown-item" href="#">
                          CAD
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            AUD
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            EUR
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                           GBP
                        </a>
                    </li>
                </ul>
        </div>

        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
               English
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <a className="dropdown-item" href="#">
                      France
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Italian
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                       German
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                       Spanish
                    </a>
                </li>
            </ul>
        </div>

        
        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
            >
               My Account
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li className='signin'>
                <i className="fa-solid fa-right-to-bracket" style={{color: "#121212"}}></i>
                    <a className="dropdown-item" href="#">
                        Sign In
                    </a>
                </li>
                <li className='register'>
                <i className="fa-solid fa-user-plus" style={{color: "#121212"}}></i>
                    <a className="dropdown-item" href="#">
                        Register
                    </a>
                </li>
                
            </ul>
        </div>

            
        </div>
    )
}
