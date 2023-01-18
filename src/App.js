import {React, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import EditMovieForm from './EditMovieForm';


function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'The Felix Redemption', year: 1994 },
    { id: 2, title: 'Felix Lamu går till Kiosken', year: 1998 },
    { id: 3, title: 'Anton kiosken', year: 2001},
    ]);
    const [editingMovieId, setEditingMovieId] = useState(null);

    function addMovie(movie){
      setMovies([...movies, {id: Date.now(), ...movie}]);
    }

    function deleteMovie(movieId) {
      setMovies(movies.filter(movie => movie.id !== movieId));
    }
  
    function editMovie(movie) {
      setMovies(movies.map(m => (m.id === movie.id ? movie : m)));
      setEditingMovieId(null);
    }

  return (
    <div className="App">
      <MovieForm onAddMovie={addMovie} />
        {editingMovieId ? (
            <EditMovieForm
                movie={movies.find(m => m.id === editingMovieId)}
                onEditMovie={editMovie}
            />
        ) : (
            <MovieList movies={movies} onDeleteMovie={deleteMovie} onEditMovie={setEditingMovieId} />
        )}
    </div>
  );
}

export default App;
