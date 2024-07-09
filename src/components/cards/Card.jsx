import React from 'react'
import '../../assets/css/main.css'

const ProductCard = ({image, title, description, link}) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-5">
        <img src = {image} />
        <p className='font-28-600-140 card-text-color'>
            {title}
        </p>
        <p className='font-22-400-160 card-p-color'>
            {description}
        </p>
        <a href='#' style={{textDecoration: "none"}} className='btn-s-font-color'>{link} <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M5.5 12H19.5M19.5 12L12.5 5M19.5 12L12.5 19" stroke="#434CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg></a>
      </div>
    </>
  )
}

const ProductDetailsCard = ({position, icon, title, description, link, image}) => {
  return(
    <>

    {
      position == "left" && 
    <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5 ms-5">
        <img src={icon} />
        <p className='font-36-600-140 my-4'>{title}</p>  
        <p className='font-22-400-160'>{description}</p>
        <a href='#' style={{textDecoration: "none"}} className='btn-s-font-color'>{link} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#434CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> </a>
    </div>
  }

    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <img src={image} />
    </div>

  {
    position == "right" &&
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5 ms-5">
        <img src={icon} />
        <p className='font-36-600-140 my-4'>{title}</p>  
        <p className='font-22-400-160'>{description}</p>
        <a href='#' style={{textDecoration: "none"}} className='btn-s-font-color'>{link} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#434CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </svg> </a>
    </div>

  }
    </>
  )
}

const FooterCard = ({title, linkone, linktwo, linkthree, linkfour }) => {
  return(
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 col-sm-12">
        <ul style={{listStyle: "none"}}>
          <li className='my-2'>{title}</li>
          <li className='my-2'><a href='#' style={{textDecoration: "none"}}>{linkone}</a></li>
          <li className='my-2'><a href='#' style={{textDecoration: "none"}}>{linktwo}</a></li>
          <li className='my-2'><a href='#' style={{textDecoration: "none"}}>{linkthree}</a></li>
          <li className='my-2'><a href='#' style={{textDecoration: "none"}}>{linkfour}</a></li>
        </ul>
      </div>
    </>
  )
}

export {ProductCard, ProductDetailsCard, FooterCard}