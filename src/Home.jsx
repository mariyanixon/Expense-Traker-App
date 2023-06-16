// Home.jsx
import React from 'react';
import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="video-background">
          <video src="/Videos/c.mp4" autoPlay loop muted></video>
        </div>
        <div className="content">
          
          <h1 className="heading">Welcome To Home Page</h1>
          <div className="table-container">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>NAME</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>INCOME</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>EXPENSES</TableCell>
                    <Button id="bt" variant="contained" color="error">EDIT</Button>
                    <Button id="bt" variant="contained" color="success">DELETE</Button>
                    <Button id="bt" variant="contained" color="success">
                      <Link to="/single" style={{ color: 'red' }}>ADD</Link>
                    </Button>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
