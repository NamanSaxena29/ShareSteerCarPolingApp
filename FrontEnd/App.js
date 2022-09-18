//import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Registration from './Registration';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< LoginPage />}></Route>
          <Route exact path='/registration' element={< Registration />}></Route>
          <Route exact path='/Register' element={< LoginPage />}></Route>
        </Routes>
      </div>
    </Router>
 );
}

export default App;
