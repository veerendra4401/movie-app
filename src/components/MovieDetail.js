import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();  // Get the movie ID from the URL
  const movie = movies.find(movie => movie.id === parseInt(id)); // Find the movie based on ID

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
}

export default MovieDetail;
