import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'
import '../../assets/css/main.css'
import menuitems from './menuitems';

const Header = () => {
  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 my-auto">
                <img src='/src/assets/logo/Logo.png' className='img-fluid' />
                </div>
                <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12 my-auto">
                            <div className="menu_items align-items-center">
                            <ul style={{listStyle: "none" }}>
                                {menuitems?.map((item, index) => <li key={index} style={{display: "inline-block", margin: "0px 60px"}}>{item}</li> )}
                            </ul>
                            </div> 
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <button className='btn menu-btn font-20-600-120'><img src='src/assets/icons/phone-call.svg' />Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header