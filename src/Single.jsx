import React from 'react'

import { TextField, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom'
 import './Single.css';
const Single = () => {
  return(
    <div className="login-container">
    <div className="video-background">
      <video src="/Videos/star.mp4.mp4" autoPlay loop muted></video>
    </div>
    <box>
     <h1>Add Details</h1>
 
  <Typography variant='h1' > </Typography>
  <br/>
  <h4>Enter the monthly income</h4>
  <TextField variant='standard' label='Income'></TextField>
  <br/>
  <br/>
  <h4>Enter the monthly expense </h4>
  <TextField variant='standard' label='Expense' ></TextField>
  <br/><br/>
 
  <br/>
  <Button  variant='text' color='warning'><Link to={'/single'} style={{textDecoration:'none',color:"white"}}>ADD</Link></Button>
</box>
</div>
)
}

export default Single