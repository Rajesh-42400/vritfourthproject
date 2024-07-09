import React from 'react'
import { ProductCard } from '../../../components/cards/Card'

const Products = () => {
    let productData = [
        {
            image: '',
            title: 'Card Title',
            description: 'Figma ipsum component variant main layer. Figjam prototype share. Figma ipsum component variant main layer. Figjam prototype share.',
            link: 'This is link'
        },
        {
            image: '',
            title: 'Card Title',
            description: 'Figma ipsum component variant main layer. Figjam prototype share. Figma ipsum component variant main layer. Figjam prototype share.',
            link: 'This is link'
        },
        {
            image: '',
            title: 'Card Title',
            description: 'Figma ipsum component variant main layer. Figjam prototype share. Figma ipsum component variant main layer. Figjam prototype share.',
            link: 'This is link'
        }
    ]
  return (
  
    <>
        <div className="container">
            <p className='font-48-600-120 text-center mb-5'>This is title text</p>
            <p className='font-22-400-160 text-center mb-5 pb-5'>Figma ipsum component variant main layer. Create bullet content asset draft <br /> component layer fill draft polygon. Opacity auto list.</p>
            <div className="row">
            {productData?.map(({image, title, description, link}, index) => <ProductCard key={index} image={image} title={title} description={description} link={link} />)}
            </div>
        </div>
        
    </>
  )
}

export default Products