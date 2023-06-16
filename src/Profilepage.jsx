import React , {useState} from 'react'
import { TextField, Button, Typography, AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import './Single.css';

const Profilepage = () => {
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

  return (
    <div>
        <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" style={{background:"Black"}}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexShrink: 2 }}>Settings</Typography>
                    <Button variant="contained" color="secondary"><Link to = {'/Add'} style = {{textDecoration:"none",color:"white"}}>HOME</Link></Button>
                    <Button variant="contained" color="primary" ><Link to = {'/'} style = {{textDecoration:"none",color:"white"}}>LOGOUT</Link></Button>
                    
                </Toolbar>

            </AppBar>
      
        </Box>



        <Typography variant="h4" color={"black"}><b>Profile</b></Typography>
  
        
        <ul>
        <li><TextField label="Name:" /></li><br/>
        <li><TextField label="Place:" /></li><br/>
        <li><TextField label="Age:" /></li><br/>
        <li><TextField label="Education:" /></li><br/>
        <li><TextField label="Email-ID:" /></li><br/>
        <li><TextField label="Ph_No:" /></li><br/>
        </ul>

        {/* Submit button */}
        <Button variant="contained" color="primary">Update Profile</Button>

        <ul>
       <li> <TextField
          label="Income"
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        /></li>
        <br/>
       <li> <TextField
          label="Expense"
          type="number"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        /></li>
        <br/>

        </ul>
  


        {/* Button to calculate total */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            // Calculate total income and expense
            const total = parseInt(income) - parseInt(expense);
            alert(`Total: $${total}`);
          }}
        >
          Calculate Total
        </Button>


    </div>
  )
}

export default Profilepage