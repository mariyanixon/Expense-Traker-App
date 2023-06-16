// Import necessary components and libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import AdminLogin from './Adminlogin';
import Single from './Single';
import Profilepage from "./Profilepage";
import Dashboard from "./Dashboard";
import Details from "./Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/single" element={<Single />} />
          <Route path='/profilepage' element={<Profilepage/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          
          <Route path='/Details' element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
