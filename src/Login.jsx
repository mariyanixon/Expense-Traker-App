import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="video-background">
        <video src="/Videos/star.mp4.mp4" autoPlay loop muted></video>
      </div>
      <div className="login-content">
        <h1 className="login-title">Welcome to Expense Tracker App</h1>
        <Box
          border={1}
          borderColor="secondary.main"
          borderRadius={10}
          padding={8}
          sx={{
            backgroundColor: 'transparent',
            color: '#333333',
            maxWidth: '400px',
            margin: '0 auto',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            borderStyle: 'none'
          }}
        >
          <h2 style={{ color: '#FFFFFF' }}>Login</h2>
          <TextField
            variant="filled"
            label="Username"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF'
              }
            }}
          />
          <br />
          <br />
          <TextField
            variant="filled"
            type="password"
            label="Password"
            sx={{
              width: '100%',
              color: '#FFFFFF',
              '& .MuiInputLabel-root': {
                color: '#FFFFFF'
              }
            }}
          />
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
            <Button id="bt" variant="contained" color="success">
              Submit
            </Button>
            <Button id="bt" variant="contained" color="warning">
              Reset
            </Button>
          </div>
          <br />
          <div style={{ textAlign: 'right' }}>
            <Typography sx={{ color: '#FFFFFF' }}>Forgot password?</Typography> 
          </div>
          <div style={{ textAlign: 'left' }}>
          <Typography sx={{ color: '#FFFFFF' }}>
              Don't have an account?<Link to="/Sign" style={{ color: 'red' }}>Sign Up</Link>
            </Typography>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default Login;

