import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Sign from './Sign';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Sign" element={<Sign />} />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;
