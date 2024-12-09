//this is the otp section of right side named as rightbox

import React,{useState} from 'react'
import './Rightbox.css';
import Otp from "./Otp"
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'


export default function Rightbox() {
  //this is for the timer section before sending otp
  const[counter,setCounter]=useState(59);
  const[isActive,setIsActive]=useState(true);
  React.useEffect(()=>{
    if(counter===0)
    {
      setIsActive(false);
    }
    else
    {

      const timer=counter>0 && setInterval(()=>setCounter(counter-1),1000);
      return()=>clearInterval(timer);
    }
  })
  return (
    <div className='box2'>
          <div className='logo'>
              <img src={logo} alt='logo'/>
          </div>
          <div className='section'>
            <div className='frame1'>
                 <h3>Verify Your Email</h3>
                 <p>Please enter the 6 digit code we just sent to s*********a@xyz.com</p>
            </div>
            
            <div className='frame2'>
              <div className='otp'>
                 <Otp/>
              </div>
              <div className='down'>
                <div className='btn'>
               <Link to='/form'><button>Verify</button></Link>
                </div>
                <div className='timer'>
                  <p className='time'>{isActive===true?`Wait 00: ${counter} seconds before requesting a new code`:`Didn’t receive a code? Resend Code`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='footer'>
            <p><span className='black'>By continuing, you’re agreeing to Nobody’s</span><span className='blue'> Terms of Service, Privacy Policy</span> <span className='black'>and </span><span className='blue'>Cookie Policy</span><span className='black'>.</span></p>
          </div>
      </div>
  )
}
