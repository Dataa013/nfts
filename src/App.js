import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NavBar from './components/navBar/Navbar'
import Home from './components/pages/Home'
function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Route path='/' exact component={Home}/>
      </Router>
    </>
  );
}

export default App;
