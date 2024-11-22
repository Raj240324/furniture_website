import React from 'react'
import './SecondPage.css'
import ThirdPage from '../ThirdPage/ThirdPage'

const SecondPage = () => {
  return (
    <>
      <div className='secondPage-container'>
        <div className="first-image-container">
            <h5>Modern Furniture Collections</h5>
            <p>Starting from $500</p>
          
                <span className='read'>Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </span>
         
        </div>
        <div className="second-third-image-container">
            <div className="second-image-container">
                <h5>Geometric Book Case</h5>
                <p>Upto 20% Discount</p>
                <span className='read'>Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </span>
            </div>
            <div className="third-image-container">
            <h5>Minimal Sofa Collections</h5>
                <p>Sale Upto 40% Discount</p>
                <span className='read'>Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </span>
            </div>
        </div>
      </div> 
      <ThirdPage />
    </>
  )
}

export default SecondPage
