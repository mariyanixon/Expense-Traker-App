import { TableBody } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Dashboard.css';
//import { Link } from 'react-router-dom';
// import Navbar from './Navbar';
import axios from 'axios';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  const getTotal = () => {
    let total = 0;
    expenses?.forEach(e => total += e.expense);
    return total;
  };
  const total = getTotal();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      });
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleDeleteClick = (expenseId) => {
    axios.delete(`/api/expenses/${expenseId._id}`)
      .then(response => {
        console.log('Expense deleted successfully:', response.data);
        setExpenses(prevExpenses =>
          prevExpenses.filter(expense => expense._id !== expenseId)
        );
        window.location.reload(); // Refresh the page
      })
      .catch(error => {
        console.error('Error deleting expense:', error);
      });
  };

  const handleBlockClick = (userId) => {
    axios.put(`/api/user/${userId}/block`)
      .then(response => {
        console.log('User blocked successfully:', response.data);
        // Update the expenses state to reflect the updated block status
        setExpenses(prevExpenses =>
          prevExpenses.map(expense => {
            if (expense._id === userId) {
              return {
                ...expense,
                isBlocked: true
              };
            }
            return expense;
          })
        );
      })
      .catch(error => {
        console.error('Error blocking user:', error);
      });
  };
  

  return (
    <div>
      {/* <Navbar /> */}
      <div className="home-container">
        <div className="video-background">
          <video src="/Videos/c.mp4" autoPlay loop muted></video>
        </div>
        <div className="content">
          <h1 className="heading">Admin DashBoard</h1>
          <Button variant="contained" color="error" >LOGOUT</Button>

          <div className="table-container">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>NAME</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>INCOME</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>EXPENSES</TableCell>
                    <TableCell style={{ color: "white", fontFamily: "cursive", fontSize: "30px", paddingLeft: "20px" }}>ACTIONS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow key={expense._id}>
                      <TableCell style={{ color: "white" }}>{expense.username}</TableCell>
                      <TableCell style={{ color: "white" }}>{expense.income}</TableCell>
                      <TableCell style={{ color: "white" }}>{expense.expense}</TableCell>
                      {/* <TableCell>

                        <>
                          <Button variant="contained" color="primary">Block</Button>
                          <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(expense)}>Delete</Button>

                        </>

                      </TableCell> */}
                      <TableCell>
  <>
    {expense.isBlocked ? (
      <Button variant="contained" disabled>
        Blocked
      </Button>
    ) : (
      <Button variant="contained" color="primary" onClick={() => handleBlockClick(expense._id)}>
        Block
      </Button>
    )}
    <Button variant="contained" color="secondary" onClick={() => handleDeleteClick(expense)}>
      Delete
    </Button>
  </>
</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          {/* <Button variant="contained" color="success">
            <Link to="/single" style={{ color: 'red' }}>ADD</Link>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





