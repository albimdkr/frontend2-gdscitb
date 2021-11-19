import { useState } from 'react';
import './App.css';
import './components/Wishlist.css';
import './components/Navbar.css';
import './components/Overview.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies')

  const [movies] = useState (
    [
      {
        name: 'Wood job',
        genre: 'Culutere, adventure',
        image: 'https://m.media-amazon.com/images/M/MV5BMGE2Yjc0ODctN2IyZS00MDNhLWFmYmYtNDdiZmUzOTk5ODFkXkEyXkFqcGdeQXVyMjU0ODQ5NTA@._V1_FMjpg_UX1000_.jpg',
        overview: "After failing to get into university, a soft city boy randomly picks a job in forestry.."
      },
      {
        name: 'North Face',
        genre: 'Action, Climbing',
        image: 'https://m.media-amazon.com/images/M/MV5BMTQzNTY1MzU3MF5BMl5BanBnXkFtZTcwMDk5MTQxMw@@._V1_FMjpg_UX1000_.jpg',
        overview: 'a secretary at a Berlin newspaper in 1936 gets to write about two alpinists as she knows them well. She later gets to report on/photograph her friends and other alpinists climb of the dangerous Swiss Eiger north face.'
      },
      {
        name: 'The Imitation Game',
        genre: 'Action, Solving',
        image: 'https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_.jpg',
        overview: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life."
      },
      {
        name: 'Who am i',
        genre: 'Action, Cyber',
        image: 'https://m.media-amazon.com/images/M/MV5BYmRiYjQ0OGQtYTAzMi00OGVjLWE4YTQtM2Q4YjBlZTBhMWM5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
        overview: "Benjamin, a young German computer whiz, is invited to join a subversive hacker group that wants to be noticed on the world's stage."
      },
    ]);

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, {...movie}]);
    };

    const removeFromWL = (movieToRemove) => {
      setWishlist(
        wishlist.filter((movie) => movie !== movieToRemove)
      );
    };

    const toOverviewHandler = (movie) => {
      setOverview([...overview, {...movie}]);
      setPage('overview');
    };

    const fromOverviewHandler = (overviewToRemove) => {
      setOverview(
        overview.filter((movie) => movie !== overviewToRemove)
        );
      navigateTo('movies');
    };

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };

    const renderMovies = () => (
      <>
              <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>CINEMA123</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "ActivedHome">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="WLButton">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
              </div>
              <div className="Cards">
              {movies.map((movie, idx) => (
                <div className = "Card" key={idx}>
                  <img onClick={() => toOverviewHandler(movie)} className="MoviePoster" src = {movie.image}></img>
                  <div className = "Container">
                    <h5>{movie.name}</h5>
                    <h5>{movie.genre}</h5>
                    <div onClick={() => addToWishlist(movie)} className="Button">
                    <p>Add to Wishlist</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </>
    );

    const renderOverview = () => (
      <>
      <div className = "Navbar">
        <ul>
            <li>
                <h4>CINEMA123</h4>
            </li>
        </ul>
      </div>
      <div className = "OverviewHeader" >
          <h5>Overview</h5>
          </div>
      <div className="OverviewContent">
          <div className = "Overview">
            {overview.map((movie, idx) => (
            <div className = "OverviewContainer">
              <img className = "OverviewPoster" src = {movie.image}></img>
              <div className = "MovieOverview">
                <p>{movie.overview}</p>
              </div>
              <h5 className="BackButton" onClick={() => fromOverviewHandler(movie)}>Back</h5>
            </div>
          ))}
          </div>
      </div>

      </>
    )

    const renderWishlist = () => (
      <>
      <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>CINEMA123</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "Home">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="ActivedWL">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
      </div>
      <div className = "Wishlist">
        <div className = 'WishlistContent'>
          <div className = "WishlistHeader">
            <h5>Wishlist</h5>
          </div>
          <div className = "WishlistBody">
            <div className = "WishlistCards">
              {wishlist.map((movie, idx) => (
                <div className = "WishlistCard">
                  <div className = "Details">
                    <img src = {movie.image}></img>
                    <h5>{movie.name}</h5>
                  </div>
                  <div className = "RemoveButton">
                    <h5 onClick={() => removeFromWL(movie)}>Remove</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );

  return (
    <div className="App">
            {page === 'movies' && renderMovies()}
            {page === 'overview' && renderOverview()} 
            {page === 'wishlist' && renderWishlist()}
    </div>
  );
}
export default App;