
import React, { useState } from 'react';
import Navbar from './Navbar';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  const [isChecked, setIsChecked] = useState(false);
  var dark = {
    height: '250vh',
    backgroundColor: 'black',
    color: 'white',
  };
  return (
        <div>
          <div className="App" style={isChecked ? dark : null}>
            <Router>
              <Navbar
                isChecked={isChecked}
                setIsChecked={() => {
                  setIsChecked(!isChecked);
                }}
              />
              
              <Routes>
                <Route path="/" element={<MoviesList/> } />
                <Route path="/about/:id" element={<MovieDetails/> } />
              </Routes>
            </Router>
          
          </div>
        </div>
      );
    }
    