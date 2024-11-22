import React from 'react'
import './FourthPage.css'
import fourthimage1 from '../assets/fourthpage.png'
import fourthimage2 from '../assets/fourthpage2.png'
import FifthPage from '../FifthPage/FifthPage'

const FourthPage = () => {
  return (
    <>
    <div className="fourth-container">
    <h3>SPECIAL OFFER</h3>
     <div className='common-container'>
        <div className='living-room'>
            <div className='living-content'>
              
                    <h4>Living Room Furniture</h4>
                    <p>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>
                    <div className='content-container'>
                    <span>$150 </span>
                    <del>$250</del>
                    <button className='shopnow-btn'>SHOP NOW</button>
                </div>
                <div className='round'>
                    <div>10 <h6>DAYS</h6></div>
                    <div>15 <h6>HRS</h6></div>
                    <div>30 <h6>MINS</h6></div>
                    <div>22 <h6>SECS</h6></div>
                </div>
            </div>
            <div className='fourth-image'>
                <img src={fourthimage1} alt="" />
            </div>
        </div>
        <div className='modern-furniture'>
            <div className='modern-content'>
                <h4>Modern Chair</h4>
                <p>Hot chairs of the modern era are now<br /> available in our stock.</p>
                <div className="content-container">
                    <span>$75 </span>
                    <del>$150</del>
                    <button className='shopnow-btn'>SHOP NOW</button>
                </div>
                <div className='round'>
                    <div>15 <h6>DAYS</h6></div>
                    <div>8  <h6>HRS</h6>  </div>
                    <div>20 <h6>MINS</h6></div>
                    <div>12 <h6>SECS</h6></div>
                </div>
            </div>
            <div className='fourth-image2'>
                <img src={fourthimage2} alt="" />
            </div>
        </div>

     </div>
    </div>
    <FifthPage />
      
    </>
  )
}

export default FourthPage
