import React from 'react'
import Navbar from '../Navbar/Navbar'
import furniture from '../assets/furniture.png'
import main from '../assets/furniture-main.png'
import gray_sofa from '../assets/gray_sofa.png'
import flat_sofa from '../assets/flat_sofa.png'
import color_chair from '../assets/color_chair.png'
import './Hero.css'



const Hero = () => {
  return (
    <>
        <Navbar />
        <div className="hero">
            <div className="logo">
                <img src={furniture} alt="logo" />
                <h3>Furniking</h3>
            </div>
            <div className='input-container'>
                <input type="text" placeholder='Search here'/>
                <select name="category" id="category">Categories
                    <option value="Category">Categories</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Amrature">Amrature</option>
                    <option value="Table">Table</option>
                </select>
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </div>
            <div className='cart'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            </div>
        </div>
        <div className='hero-nav'>
            <div className='collections'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-menu-up" viewBox="0 0 16 16">
                <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793zM1 9V6h14v3zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"/>
                </svg>
                <div className='all-coll'>All Collections</div>
            </div>
            <div className='list'>
                <a href="">HOME</a>
                <a href="">SHOP</a>
                <a href="">BLOG</a>
                <a href="">ABOUT</a>
                <a href="">CONTACT US</a>
            </div>
            </div>

            <div className="main">
                <ul className='all-coll-category'>
                    <li>All</li>
                    <li>New Arrival</li>
                    <li>Hot Sale</li>
                    <li>Furniture</li>
                    <li>Amrature</li>
                    <li>Table</li>
                    <li>Chair</li>
                    <li>Sofa</li>
                    <li>Mirrors</li>
                    <li>Stools</li>
                    <li>Benches</li>
                </ul>
                <div className="main-image-whole">
                    <div className="main-image-container">
                        <h5>TOP COLLECTIONS 2024</h5>
                        <h2>We Serve Your<br />
                        Dream Furniture</h2>
                        <h4>Get 50% Off on all products</h4>
                        <button className='shop-btn'>Shop Now</button>
                    </div>
                    <div className="main-image">
                        <img src={main} alt="main"/>
                    </div>
                    <div className='three-images'>
                        <div className='image1'>
                            <img src={gray_sofa} alt="" />
                            <div className='price'>$120</div>
                            <p>Office Desk Chair</p>
                        </div>
                        <div className='image1'>
                        <img src={flat_sofa} alt="" />
                        <div className='price'>$200</div>
                        <p>Home Alisa Sofa</p>
                        </div>
                        <div className='image1'>
                        <img src={color_chair} alt="" />
                        <div className='price'>$250</div>
                        <p>Modern Chair</p>
                        </div>
                    </div>
                </div>
            </div>
           
       
    </>
  )
}

export default Hero
