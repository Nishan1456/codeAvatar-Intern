import React, {useState} from 'react'
import "./Form.css"
import '../components/Stepprogress.css';
import MainForm from '../components/MainForm'
import PropTypes from 'prop-types'


export default function Form(props) {
  //this is the process of stepprogress section
  const [currentStep, setCurrentStep] = useState(1);

  
  const nextStep = () => {
    if (currentStep < 8) setCurrentStep(currentStep + 1);
  };

 
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getStepClass = (step) => {
    if (step < currentStep) return 'completed';
    if (step === currentStep) return 'active';
    return 'pending';
  };

  return (
    <div className='container'>
      <div className='header'>
        <h3>{props.title}</h3>
      </div>
      <div className='stepsection'>
      <div className="step-progress-container">
      <div className="line-background">
        <div className="steps">
          {[...Array(8)].map((_, index) => {
            const step = index + 1;
            return (
              <React.Fragment key={step}>
                <div className={`step ${getStepClass(step)}`}></div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      </div>
       <div className='business'>
           <p style={{height:"40px",width:"59px"}}>Business Type</p>
           <p style={{height:"40px",width:"59px"}}>Business Details</p>
           <p style={{height:"40px",width:"100px"}}>Authorized Representative</p>
           <p style={{height:"40px",width:"59px"}}>Business Owners</p>
           <p style={{height:"40px",width:"63px"}}>Company Directors</p>
           <p style={{height:"40px",width:"76px"}}>Support Information</p>
           <p style={{height:"40px",width:"46px"}}>Add Details</p>
           <p style={{height:"40px",width:"80px"}}>Complete Registration</p>
       </div>
      </div>
      <MainForm/>
      <div className="controls">
         <button onClick={prevStep} disabled={currentStep === 1}>
           Previous
         </button>
         <button onClick={nextStep} disabled={currentStep === 8}>
           Next
         </button>
      </div>
    </div>
  )
}
Form.proptype={
  title:PropTypes.string,
}