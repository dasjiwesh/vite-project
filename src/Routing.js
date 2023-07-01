import React from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Forms from './Forms'
import {BrowserRouter as Router, Route, Link,Routes} from 'react-router-dom'
export default class Routing extends React.Component
 {
  render()
  {
    return (
    <div >
      <Router>
        <Link to=''>Home </Link>
        <Link to='/about'>About </Link>
        <Link to='/forms'>Forms</Link>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='forms' element={<Forms />} />
      </Routes>
      </Router> 
     </div>
    );
  }
}


