import React from 'react';

const AddSong = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="newTitle" placeholder="title" onChange={props.handleChange} ></input>
                <input type="text" name="newArtist" placeholder="artist" onChange={props.handleChange} ></input>
                <select id="newGenre" name="newGenre" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>genre:</option>
                    <option value="Classical">Classical</option>
                    <option value="Hiphop">Hiphop</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                </select>
                <select id="newRating" name="newRating" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled selected>rating:</option>
                    <option value="5">#####</option>
                    <option value="4">####</option>
                    <option value="3">###</option>
                    <option value="2">##</option>
                    <option value="1">#</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddSong