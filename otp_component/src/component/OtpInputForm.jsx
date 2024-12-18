import React, { useRef, useState, useEffect , useLayoutEffect} from 'react';

const OtpInputForm = ({ length = 4 }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRef = useRef([]);

  // Log inputRef after render
  useEffect(() => {
    console.log(inputRef.current); // To see if references are set
    if (inputRef.current[0]) {
      inputRef.current[0].focus(); // Focus on the first input
    }
  }, []); // Only run once after initial render

  useLayoutEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus(); // Focus on the first input
    }
  }, []); // Only run once after initial render

  const handleChange = (idx, e) => {
    const newOtp = [...otp];
    newOtp[idx] = e.target.value;
    setOtp(newOtp);
  };

  const handleClick = (idx) => {
    // Your click logic
  };

  const handleKeyDown = (idx, e) => {
    // Your keydown logic
  };

  return (
    <>
      {otp.map((val, idx) => (
        <input
          ref={(inputVal) => {
            inputRef.current[idx] = inputVal;
          }}
          style={{
            width: '40px',
            height: '40px',
            margin: '5px',
            fontSize: '1.2em',
            textAlign: 'center',
          }}
          type="text"
          key={idx}
          value={val}
          onChange={(e) => handleChange(idx, e)}
          onClick={() => handleClick(idx)}
          onKeyDown={(e) => handleKeyDown(idx, e)}
        />
      ))}
    </>
  );
};

export default OtpInputForm;
