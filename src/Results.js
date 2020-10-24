import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';

import './Results.css';

import axios from './axios';

import VideoCard from './VideoCard';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      console.log(response);
      return response;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className='results'>
      <FlipMove>
        {movies.map(movie => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
