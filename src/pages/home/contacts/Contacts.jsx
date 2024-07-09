import React from 'react'
import '../../../assets/css/style.css'
import '../../../assets/css/main.css'
import Form from '../../../components/form/Form'

const Contacts = () => {
  return (
    <>
        <div className='container-fluid contact-bg'>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <img src='src/assets/icons/phone-call.svg' style={{background: "blue"}} />
                        <p className='font-36-600-140'>Get in touch with us</p>
                        <p className='font-22-400-160'>Figma ipsum component variant main layer. Undo select edit device arrange ipsum list list figjam font. Bold italic line scrolling inspect prototype share. Component main style.</p>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Contacts