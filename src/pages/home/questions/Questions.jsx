import React from 'react'
import '../../../assets/css/style.css'

const Questions = () => {
  return (
    <> 
    <div className='container-fluid'>
        <div className="container q-background p-5">
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-12 col-12">
                    <p className='font-28-600-140'>Still have questions?</p>
                    <p className='font-18-400-150'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <button className='q-btn ms-auto me-4'>Get in touch</button>
                </div>
            </div>
            

        </div>
    </div>
    </>
   
  )
}

export default Questions