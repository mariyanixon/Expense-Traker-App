import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import './Sign.css';

const Sign = () => {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showTerms) {
      const timeout = setTimeout(() => {
        setShowTerms(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showTerms]);

  const handleSubmit = () => {
  
    console.log('Signup submitted:', name, place, age, email, education, contactDetails, phoneNumber);

   
    navigate('/Login');
  };

  const handleReset = () => {
    setName('');
    setPlace('');
    setAge('');
    setEmail('');
    setEducation('');
    setContactDetails('');
    setPhoneNumber('');
    setAgreeTerms(false);
  };

  const handleShowTerms = () => {
    setShowTerms(true);
  };

  return (
    <div className="sign-container">
      <div className="video-background">
        <video src="/Videos/back.mp4.mp4" autoPlay loop muted></video>
      </div>
      <div className="sign-content">
        <Box>
          <h2>Sign Up</h2>
          <div className="form-field">
            <p>Name</p>
            <TextField variant="filled" type="text" value={name} onChange={(e) => setName(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Place</p>
            <TextField variant="filled" type="text" value={place} onChange={(e) => setPlace(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Age</p>
            <TextField variant="filled" type="number" value={age} onChange={(e) => setAge(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Email id</p>
            <TextField variant="filled" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Education</p>
            <TextField variant="filled" type="text" value={education} onChange={(e) => setEducation(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Contact Details</p>
            <TextField variant="filled" type="text" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Phone Number</p>
            <TextField variant="filled" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Set Password</p>
            <TextField variant="filled" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="text-field" />
          </div>
          <div className="form-field">
            <p>Confirm Password</p>
            <TextField variant="filled" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="text-field" />
          </div>
          <div className="form-field" style={{ alignItems: 'center', gap: '10px' }}>
            <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} />
            <Typography>I agree to the terms and conditions</Typography>
          </div>
          <br />
          <br />
          <div className="button-group">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="contained" color="warning" onClick={handleReset}>
              Reset
            </Button>
            <td>
              <Button variant="contained" color="secondary" onClick={handleShowTerms}>
                Terms and Conditions
              </Button>
            </td>
          </div>
          {showTerms && (
            <Typography sx={{ position: 'absolute', top: 0, right: 0, margin: '20px', color: 'red' }}>
              If book is not returned or damaged, a fine will be charged.
            </Typography>
          )}
        </Box>
      </div>
    </div>
  );
};

export default Sign;
