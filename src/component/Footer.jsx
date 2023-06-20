import React from 'react'

export default function Footer() {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center" , background:"hsl(0, 0%, 95%)", marginTop:"50px"}}>
        <div className='container-footer'>
            <div className='footer-top'>
                <div className="left-footer">
                    <span>Blog</span>
                    <span>FAQs</span>
                    <span>Contact us </span>
                </div>
                <div className='right-footer'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div>
                <i class="fa-regular fa-copyright"></i>
                <span>2023 All Rights Reserved. This template is made with by </span>
                <span style={{color:"red"}}>ThanhThu</span>
            </div>
        </div>

    </div>
  )
}
