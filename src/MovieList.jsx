import React from 'react';

function MovieList({movies, onDeleteMovie, onEditMovie}){
    return (
        <div>
            {movies.map(movie => (
                <div className="movie" key={movie.id}>
                    <h2>{movie.title}</h2> 
                    <p>({movie.year})</p>
                    <br/>
                    <button onClick={() => onDeleteMovie(movie.id)}>Delete</button>
                    <button onClick={() => onEditMovie(movie.id)}>Edit</button>
                    <hr/>
                </div>
            ))}
        </div>
    );
}

export default MovieList;