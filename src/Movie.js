
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
 
        const response = await axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b');
        setMovies(response.data.Search); 
    };
    fetchData();
  }, []); 

  return (
    <div>
  
      <div className="card-container" style={{boxShadow:"10px,10px,lightgray"}}>
            {movies.map((movie) => (
              <Card key={movie.imdbID} style={{ width: '18rem', margin: '10px' }}>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                <Card.Body>
                  <Card.Title style={{textAlign:"center"}}>{movie.Title}</Card.Title>
                  <Card.Text style={{textAlign:"center"}}>{movie.Year}</Card.Text>
                  <Link to={`/about/${movie.imdbID}`}> 
                  <Button variant="btn btn-primary"> Details</Button></Link>
                </Card.Body>
              </Card>
            ))}
            </div>
            </div>
  );
};


