import React from 'react'
import '../../assets/css/style.css'
import {FooterCard} from '../cards/Card'

const Footer = () => {
  const menuData = [
    {
      title: "Title",
      linkone: "Link 1",
      linktwo: "Link 2",
      linkthree: "Link 2",
      linkfour: "Link 2"
    },
    {
      title: "Title",
      linkone: "Link 1",
      linktwo: "Link 2",
      linkthree: "Link 2",
      linkfour: "Link 2"
    },
    {
      title: "Title",
      linkone: "Link 1",
      linktwo: "Link 2",
      linkthree: "Link 2",
      linkfour: "Link 2"
    }
  ]

  let socialIcons = [
    'src/assets/icons/Frame.png', 'src/assets/icons/Social.png', 'src/assets/icons/Social (1).png', 'src/assets/icons/Social.png'
  ]
  return (
    <>
        <div className="container-fluid">
            <div className="container py-5">
              <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                    <img src='src/assets/logo/Logo.png' />
                    <p className='font-18-500-160 my-4 f-p-color'> Figma ipsum component variant main <br /> layer. Outline blur link pixel create. Flatten <br /> duplicate. </p>
                    <button className='f-btn'>Button text </button>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div className="row">
                  {menuData?.map(({title, linkone, linktwo, linkthree, linkfour}, index) => <FooterCard key={index} title={title} linkone={linkone} linktwo={linktwo} linkthree={linkthree} linkfour={linkfour} />)}                
                  </div>
                </div>

                <div className="col-lg-12 col-md-6 col-sm-12 col-12 mt-5 pt-5">
                  <div className="d-flex justify-content-between">
                    <p>©DesignSchool 2024. All rights reserved.</p>
                    <div className='d-flex me-5 pe-5'>
                        {socialIcons?.map((item, index) => <img key={index} src={item} className='img-fluid me-2'  />)}  
                    </div>
                  </div>
                </div>
            </div>    
            </div>
        </div>
    </>
  )
}

export default Footer