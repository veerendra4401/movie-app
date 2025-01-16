import React, { useState, useMemo } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './App.css';


function App() {
  const movieData = useMemo(
    () => [
      {
        id: 1,
        title: "The Shawshank Redemption",
        year: "1994",
        poster: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_SY679_.jpg",
      },
      {
        id: 2,
        title: "Daku Maharaj",
        year: "2025",
        poster: "https://th.bing.com/th/id/OIP.eWvz_Gr56FcM5bCANx7wtAHaNM?rs=1&pid=ImgDetMain.jpg",
      },
      {
        id: 3,
        title: "Inception",
        year: "2010",
        poster: "https://metropolisjapan.com/wp-content/uploads/2023/08/the-inspection-scaled.jpg",
      },
      {
        id: 4,
        title: "Forrest Gump",
        year: "1994",
        poster: "https://image.tmdb.org/t/p/original/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      },
      {
        id: 5,
        title: "Interstellar",
        year: "2014",
        poster: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8d8f28105415493.619ded067937d.jpg",
      },
      {
        id: 6,
        title: "Salaar Part 1",
        year: "2023",
        poster: "https://th.bing.com/th/id/OIP.VIiRL_GRXtZ_yJRj7SHfWAHaKs?rs=1&pid=ImgDetMain.jpg",
      },
    ],
    []
  );

  const [movies, setMovies] = useState(movieData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() !== '') {
      const filteredMovies = movieData.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(filteredMovies);
    } else {
      setMovies(movieData);
    }
  };

  return (
    <div className="App">
      <header>
  <h1 className="animated-header">Welcome to MoviesWorld</h1>
      </header>
      <section className="animated-disclaimer">
        <h2>Disclaimer</h2>
        <p>
          The links to movies provided on this website are for informational purposes only.
          All rights and credits for the movies go to their respective owners.
          This website does not claim any ownership of the content, nor is it associated with
          or endorsed by the creators, producers, or distributors of the movies.
          Any trademarks, copyrights, and other intellectual property rights belong to their respective owners.
          If you have any concerns about the use of these links, please contact us for further information.
        </p>
      </section>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />

      {/* Social Media Links */}
      <footer>
  <div className="social-media">
    <h3>Follow Us:</h3>
    <ul className="social-media-list">
      <li>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i> 🌐
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> 🐦
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> 📷
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> 💼
        </a>
      </li>
    </ul>
  </div>
  <div className="footer-copyright">
    <p>&copy; {new Date().getFullYear()} MoviesWorld. All Rights Reserved.</p>
  </div>
</footer>
    </div>
  );
}

export default App;
