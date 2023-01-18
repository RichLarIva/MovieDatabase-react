import {React, useState } from 'react';

function MovieForm({onAddMovie}){
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onAddMovie({title, year});
        setTitle('');
        setYear('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
            </label>
            <label>
                Year:
                <input type="text" value={year} onChange={event => setYear(event.target.value)} />
            </label>
            <button type="submit">Add Movie</button>
        </form>
    );
}

export default MovieForm;