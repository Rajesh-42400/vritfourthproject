import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/main.css'
const Intro = () => {
  return (
   <>
    <div className="container my-5 py-5">
        <div className="row">
            <div className="col-6 py-5">
                <p className='font-72-600-110'>Human First, <br/> <span className="asset-color font-italic font-72-400-110">Design</span> Later</p>
                <p className='font-22-400-160 p-color'>Figma ipsum component variant main layer. Library selection strikethrough bold vertical font thumbnail edit distribute. Vector shadow mask rotate clip shadow horizontal.</p>
                <div className="d-flex">
                    <button type='button' className='intro-btn p-s-color me-4 my-4'>Get Started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg></button>
                    <button type='button' className='intro-s-btn btn-s-font-color my-4'>Button text</button>
                </div>
                                
            </div>
            <div className="col-6">
            <img src='src/assets/images/Image.png' className='img-fluid' />
            </div>
        </div>
    </div>
   </>
  )
}

export default Intro