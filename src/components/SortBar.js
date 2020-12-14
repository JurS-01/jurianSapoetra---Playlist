import React from 'react';

const SortBar = (props) => {
    return (
        <div>
            Sort by:
            <button onClick={props.sortByTitle}>title</button>
            <button onClick={props.sortByArtist}>artist</button>
            <button onClick={props.sortByGenre}>genre</button>
            <button onClick={props.sortByRating}>rating</button>
        </div>
    )
}

export default SortBar



// <button onClick={props.handleSort}>title</button>
// <button onClick={props.handleSort}>artist</button>
// <button onClick={props.handleSort}>genre</button>
// <button onClick={props.handleSort}>rating</button>

