import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './CardStru.css';


export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=4a3b711b`);
        setMovie(response.data);
        console.log(response);
    
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
     <div className='MainDiv'style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{display:'flex', gap:"30px"}}>
          <h2 key={movie.imdbID}>
            <img variant="top" src={movie.Poster} alt={movie.Title}className='PosterStyle' />
          </h2>
       
        <div className='infoStyle'>
              <p>{movie.Title}</p>
              <p><b>Director:</b> {movie.Director}</p>
              <p><b>Genre:</b> {movie.Genre}</p>
              <p><b>Rating:</b> {movie.Rated}</p>
              <p><b>Awards:</b> {movie.Awards}</p>
              <p><b>Released Date:</b> {movie.Released}</p>
              <p><b>Actors:</b> {movie.Actors}</p>
              <p><b>Year:</b> {movie.Year}</p>
              <p><b>Country:</b> {movie.Country}</p>
          
        </div>
      </div>
   </div>
  );
};


