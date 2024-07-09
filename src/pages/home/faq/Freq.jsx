import React from 'react'
import Accordions from '../../../components/accordion/Accordions'
import '../../../assets/css/style.css'

const Freq = () => {
  const accordianData = [
    {
      title: "This is a question text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",

    },
    {
      title: "This is a question text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      
    },
    {
      title: "This is a question text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      
    },
    {
      title: "This is a question text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      
    },
    {
      title: "This is a question text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      
    },
    {
      title: "This is a question text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      
    }
  ]
  return (
    <>
     <div className="container-fluid">
        <div className="container py-5">
          <div className="row">
            <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                <img src='src/assets/icons/airplay.svg' />
                <p className='font-36-600-140 my-4'>Frequently asked questions</p>
                <p className='font-22-400-160'>Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.</p>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
            {accordianData?.map(({title, description}, index) => <Accordions key={index} title={title} description={description} />)}
            </div>
          </div>
        </div>
    </div>
    
    </>
   
  )
}

export default Freq