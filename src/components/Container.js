import React from 'react';
import AddSong from './AddSong';
import List from './List';

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            songList: [
                { id: 1, title: "Purple Rain", artist: "Prince", genre: "Pop", rating: 2 },
                { id: 2, title: "Juicy", artist: "The Notorious B.I.G.", genre: "Hiphop", rating: 4 },
                { id: 3, title: "Enter the Sandman", artist: "Metallica", genre: "Rock", rating: 3 },
                { id: 4, title: "The Four Seasons", artist: "Antonio Vivaldi", genre: "Classical", rating: 5 },
                { id: 5, title: "In the air tonight", artist: "Phil Collins", genre: "Pop", rating: 1 },
            ],
            newItem: { id: 8, title: "", artist: "", genre: "", rating: "" },
            newTitle: "",
            newArtist: "",
            newGenre: "",
            newRating: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let updatedSongList = this.state.songList;
        console.log(updatedSongList);
        const newSong = {
            id: 12,
            title: this.state.newTitle,
            artist: this.state.newArtist,
            genre: this.state.newGenre,
            rating: this.state.newRating
        }
        updatedSongList = [...updatedSongList, newSong]
        this.setState({ songList: updatedSongList })

    }

    render() {
        return (
            <div>
                <AddSong handleChange={this.handleChange} addSong={this.handleSubmit} />
                <List songList={this.state.songList} />
                <p>New: {this.state.newTitle}, {this.state.newArtist}, {this.state.newGenre}, {this.state.newRating},</p>
            </div>
        )
    }
}

// <h1>{this.state.newItem.title} {this.state.newItem.title}</h1>



export default Container