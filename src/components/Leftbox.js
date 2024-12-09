//this is the layout section of right side named as leftbox
import React from 'react'
import './Leftbox.css';
import singaporeFlag from '../assets/singapore.png'
import hongkongFlag from '../assets/hongkong.png'
import usaFlag from '../assets/usa.png'

export default function Leftbox() {

  return (
    
       <div className='box1'>
        <div className='back'>
       
           <p>Back</p>
        </div>
        <div className='layout'>
            <pre>Layout Cards</pre>

        </div>
        
        <div className='block1'>
        <div className='frame1'>
            <img src={singaporeFlag} alt="singapore"/>
            <h4>Singapore</h4>
            <p>Head Office</p>
            </div>
            <div className='frame2'>
            <p>XYZ Pvt. Ltd.</p>
            <p>Road to nowhere, 06-404, 500 Internal Error</p>
            </div>
        </div>
        <div className='block2'>
        <div className='frame1'>
        <img src={hongkongFlag} alt="Hongkong"/>
            <h4>Hong Kong</h4>
            <p>Branches</p>
            </div>
            <div className='frame2'>
            <p>XYZ Pte. Ltd.</p>
            <p>The Infinite Loop Office, 404 Timeout Plaza</p>
            </div>
        </div>
        <div className='block3'>
        <div className='frame1'>
        <img src={usaFlag} alt="USA"/>
            <h4>USA</h4>
            <p>Branches</p>
            </div>
            <div className='frame2'>
            <p>XYZ Inc.</p>
            <p>Nulltown, Buglandia, 500 0xDEADBEE</p>
            </div>
        </div>
       
          
      </div>
    
  )
}
