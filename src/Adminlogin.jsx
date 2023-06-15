import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here, e.g., sending a request to the server

    // Assuming the login is successful, navigate to the admin dashboard
    navigate('/admin-dashboard');
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-content">
        <div className="video-background">
          <video src="/Videos/star.mp4.mp4" autoPlay loop muted></video>
        </div>
        <div className="login-content">
          <h1 className="admin-login-title">Admin Login</h1>

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
              borderStyle: 'none',
            }}
          >
            <TextField
              variant="filled"
              label="Username"
              sx={{
                width: '100%',
                color: '#FFFFFF',
                '& .MuiInputLabel-root': {
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
                  color: '#FFFFFF',
                },
                '& .MuiFilledInput-input': {
                  color: '#FFFFFF',
                },
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
              <Button id="bt" variant="contained" color="success" onClick={handleLogin}>
                Login
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
                Don't have an account?
                <Link to="/admin-sign-up" style={{ color: 'red' }}>
                  Sign Up
                </Link>
              </Typography>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
