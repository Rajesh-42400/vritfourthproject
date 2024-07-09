import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css'

const Form = () => {
  // let [fname, setFname] = useState();
  // let [lname, setLname] = useState();
  // let [email, setEmail] = useState();
  // let [message, setMessage] = useState();

  return (
    <>
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <form>
                <div className='d-flex'>
                <div className='me-4 mb-4 w-50'>
                <span className='font-14-500-160'><label for="fname me-4">First Name</label></span>
                <br />
                <input type='text' placeholder='First Name' className='f-input' style={{width: "100%"}} />
                </div>
                <div className= 'mb-4 w-50'>
                <span className='font-14-500-160'><label for="lname me-4">Last Name</label></span>
                <br />
                <input type='text' placeholder='Last Name' className='f-input' style={{width: "100%"}}  />
                </div>
                </div>
                <p className='font-14-500-160'><label for="email me-4">Email</label></p>
                <input type='email' placeholder='Email' style={{width: "100%"}} className='mb-4 f-input' />
                <p className='font-14-500-160'><label for="ys me-4">Your Message</label></p>
                <textarea style={{width: "100%"}} rows={5} className='mb-2 f-input'></textarea>
                <p className='font-14-500-160'>256 words</p>
                <button className='btn menu-btn font-20-600-120'>Send message</button>
            </form>
        </div>
    </>
  )
}

export default Form