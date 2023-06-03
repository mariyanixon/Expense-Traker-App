import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Sign.css';

const Sign = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [resetClicked, setResetClicked] = useState(false);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    if (showTerms && !resetClicked) {
      const timeout = setTimeout(() => {
        setShowTerms(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showTerms, resetClicked]);

  const handleShowTerms = () => {
    setShowTerms(true);
  };

  const handleReset = () => {
    setShowTerms(false);
    setResetClicked(true);
    setName('');
    setPlace('');
    setAge('');
    setEmail('');
    setEducation('');
    setDob('');
    setPhone('');
    setContact('');
    setTimeout(() => {
      setResetClicked(false);
    }, 5000);
  };

  return (
    <div className="sign-container">
      <div className="video-background">
        <video src="/Videos/back.mp4.mp4" autoPlay loop muted></video>
      </div>
      <div className="sign-content">
        <Box
          sx={{
            border: 'none',
          }}
        >
          <h2>Sign Up</h2>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Name</p>
            <TextField variant="filled" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Place</p>
            <TextField variant="filled" type="text" value={place} onChange={(e) => setPlace(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Age</p>
            <TextField variant="filled" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Email id</p>
            <TextField variant="filled" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Education</p>
            <TextField variant="filled" type="text" value={education} onChange={(e) => setEducation(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Date of Birth</p>
            <TextField variant="filled" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Phone no.</p>
            <TextField variant="filled" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Contact Details</p>
            <TextField variant="filled" type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
          </div>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Button variant="contained" color="success">
              Submit
            </Button>
            <Button variant="contained" color="warning" onClick={handleReset}>
              Reset
            </Button>
            <Button variant="contained" color="secondary" onClick={handleShowTerms}>
              Terms and Conditions
            </Button>
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
