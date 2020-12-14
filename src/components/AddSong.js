import React from 'react';

const AddSong = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="newTitle" placeholder="title" onChange={props.handleChange} ></input>
                <input type="text" name="newArtist" placeholder="artist" onChange={props.handleChange} ></input>
                <select id="newGenre" name="newGenre" onChange={props.handleChange} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>genre:</option>
                    <option value="blues">Blues</option>
                    <option value="classical">Classical</option>
                    <option value="hiphop">Hiphop</option>
                    <option value="jazz">Jazz</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="soul">Soul</option>
                </select>
                <select id="newRating" name="newRating" onChange={props.handleChange} >
                    <option value="" disabled selected>rating:</option>
                    <option value="5">#####</option>
                    <option value="4">####</option>
                    <option value="3">###</option>
                    <option value="3">##</option>
                    <option value="1">#</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddSong