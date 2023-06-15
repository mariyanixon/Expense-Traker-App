import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import './home.css'; // Import the CSS file

const Home = () => {
  return (
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
                  <Button id="bt" variant="contained" color="success">ADD</Button>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  )
}

export default Home;
