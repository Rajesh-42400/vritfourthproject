import React from 'react'
import { ProductDetailsCard } from '../../../components/cards/Card'

const ProductDetails = () => {
  let productData = [
    {
      position: "left",
      icon: "src/assets/icons/airplay.svg",
      title: "This is title text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      link: "This is link",
    },
    {
      position: "right",
      icon: "src/assets/icons/airplay.svg",
      title: "This is title text",
      description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
      link: "This is link",
    },
    {
    position: "left",
    icon: "src/assets/icons/airplay.svg",
    title: "This is title text",
    description: "Figma ipsum component variant main layer. Create bullet content asset draft component layer fill draft polygon. Opacity auto list.",
    link: "This is link",
    }
  ]
  return (
    <>
      <div className="container py-5 my-5">
          <div className="row">
            {
              productData?.map(({position, icon, title, description, link}, index) => <ProductDetailsCard key={index} position={position} icon={icon} title={title} description={description} link={link} />)}
          </div>
      </div>  
    </>
  )
}

export default ProductDetails