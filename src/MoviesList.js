
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './CardStru.css';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import {Button } from 'react-bootstrap'
export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [Search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://www.omdbapi.com/?s=${Search}&apikey=4a3b711b`);
      if (response.data.Search) {
        const startIndex = (currentPage - 1) * 5;
        const endIndex = startIndex + 5;
        setMovies(response.data.Search.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(response.data.Search.length / 5));
      } else {
        setMovies([]);

      }
    };

    fetchData();
  }, [Search, currentPage]);

  const PreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };
  const NextPage = () => {
    setCurrentPage((nextPage) => (nextPage < totalPages ? nextPage + 1 : totalPages));
  };
  return (
    <div>
      <div className='SearchBox'>
      <input
        type="text"
        placeholder="Search for movies..."
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        className="col-md-4 my-1  mx-auto"
      />
      </div>
   {Search === '' ? (
        <div style={{textAlign:"center", marginTop:"20px"}}>Search for movies above
             <Movie />
        </div>
        
      ) : movies.length === 0 ? (
        <div style={{textAlign:"center",marginTop:"30px"}}><h3>No matches found please Try again!!!</h3></div>
      ) : (
     
    <div className="card-container">
      {movies.map((movie) => (
        <Card key={movie.imdbID} style={{ width: '18rem', margin: '10px' }}>
          <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Year}</Card.Text>
           <Link to={`/about/${movie.imdbID}`}><div className='DetailsButton'> <Button variant="btn btn-primary" > Details</Button></div></Link>
          </Card.Body>
        </Card>
      ))}
    <div className="pagination  d-flex justify-content-center align-items-center">
      <Button variant="outline-primary" onClick={PreviousPage} disabled={currentPage === 1} className='mx-2'>
         Prev
      </Button>
      <span className='mx-4'>{`Page ${currentPage} / ${totalPages}`}</span>
      <Button variant="outline-primary" onClick={NextPage} disabled={currentPage === totalPages} className='mx-2'>
        Next
      </Button>

</div>

</div>

)}
  </div>
  
  );
}
