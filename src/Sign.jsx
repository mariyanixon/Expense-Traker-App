import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './Sign.css';

const Sign = () => {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    if (showTerms) {
      const timeout = setTimeout(() => {
        setShowTerms(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [showTerms]);

  const handleShowTerms = () => {
    setShowTerms(true);
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
            <TextField variant="filled" type="text" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Place</p>
            <TextField variant="filled" type="text" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Age</p>
            <TextField variant="filled" type="number" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Email id</p>
            <TextField variant="filled" type="email" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Education</p>
            <TextField variant="filled" type="text" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Date of Birth</p>
            <TextField variant="filled" type="date" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Phone no.</p>
            <TextField variant="filled" type="number" />
          </div>
          <div style={{ display: 'flex', gap: '50px' }}>
            <p>Contact Details</p>
            <TextField variant="filled" type="text" />
          </div>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
            <Button variant="contained" color="success">
              Submit
            </Button>
            <Button variant="contained" color="warning">
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
