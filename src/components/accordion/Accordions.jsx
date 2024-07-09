import React, { useState } from 'react'
import '../../assets/css/style.css'

const Accordions = ({title, description}) => {
  let [open, setOpen] = useState(false);
  return (
    <>
      
        <div className='border-bottom my-4' onClick={() => {setOpen((prev) => !prev)}}>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='font-22-400-160'>{title}</p>
            {
              open ? <img src='src/assets/icons/minus-svgrepo-com.svg' />  : <img src='src/assets/icons/plus-svgrepo-com.svg' />
            }
          </div>
          {
            open && <div>
                      <p className='font-18-500-160 accordion-d-color'>{description}</p>
                    </div>
          }
       </div>
    </>
  )
}

export default Accordions