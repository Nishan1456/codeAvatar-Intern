//this is the OTP section of right side of signup 
import React, { useState } from 'react';
import './Otp.css';



const OtpInputWithDash = () => {
  // State to store OTP input values
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  // Handle OTP input change
  const handleChange = (e, index) => {
    let value = e.target.value;

    // If the input is not a number, ignore
    if (!/^\d*$/.test(value)) return;

    // Update the OTP state
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input if the current input is filled
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <React.Fragment key={index}>
            <input
              id={`otp-${index}`}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="otp-field"
              autoFocus={index === 0}
            />
            {/* Add a dash between OTP fields */}
            {index === 2 && <span className="otp-dash">-</span>}
          </React.Fragment>
        ))}
      </div>
     
    </div>
  );
};

export default OtpInputWithDash;
