import { React, useState } from 'react';

function EditMovieForm({ movie, onEditMovie }) {
    const [title, setTitle] = useState(movie.title);
    const [year, setYear] = useState(movie.year);

    function handleSubmit(event) {
        event.preventDefault();
        onEditMovie({ ...movie, title, year });
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
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditMovieForm;