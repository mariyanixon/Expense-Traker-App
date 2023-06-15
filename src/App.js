// Import necessary components and libraries
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import AdminLogin from './Adminlogin';
import AdminSign from './Adminsign';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin-sign-up" element={<AdminSign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
