import React from 'react';
import AddSong from './AddSong';
import SortBar from './SortBar';
import List from './List';
import { v4 as uuidv4 } from 'uuid';


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
            isSorted: false,
            newTitle: "",
            newArtist: "",
            newGenre: "",
            newRating: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleSort = this.handleSort.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let updatedSongList = this.state.songList;
        const newSong = {
            id: uuidv4(),
            title: this.state.newTitle,
            artist: this.state.newArtist,
            genre: this.state.newGenre,
            rating: this.state.newRating
        }
        updatedSongList = [...updatedSongList, newSong]
        console.log(updatedSongList);
        this.setState({ songList: updatedSongList })
    }

    // handleSort(event) {
    //     const category = event.target.innerText
    //     console.log(category);
    //     let sortedList = this.state.songList
    //     this.state.isSorted ? sortedList.sort((a, b) => a.category.localeCompare(b.category)) : sortedList.reverse((a, b) => a.category.localeCompare(b.category))
    //     this.setState({
    //         songList: sortedList,
    //         // songList: this.state.isSorted ? sortedList.sort(sortType) : sortedList.reverse(sortType),
    //         isSorted: !this.state.isSorted
    //     });
    // };

    handleSort(sortType) {
        console.log(sortType);
        let sortedList = this.state.songList
        this.state.isSorted ? sortedList.sort(sortType) : sortedList.reverse(sortType)
        this.setState({
            songList: sortedList,
            // songList: this.state.isSorted ? sortedList.sort(sortType) : sortedList.reverse(sortType),
            isSorted: !this.state.isSorted
        });
    };

    sortByTitle = () => {
        this.handleSort((a, b) => a.title.localeCompare(b.title));
        console.log('Sorted by title.');
    };

    sortByArtist = () => {
        this.handleSort((a, b) => a.artist.localeCompare(b.artist));
        console.log('Sorted by artist.');
    };

    sortByGenre = () => {
        this.handleSort((a, b) => a.genre.localeCompare(b.genre));
        console.log('Sorted by genre.');
    };

    sortByRating = () => {
        this.handleSort((a, b) => b.rating - a.rating);
        console.log('Sorted by rating.');
    };

    render() {
        return (
            <div>
                <AddSong handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <SortBar sortByTitle={this.sortByTitle} sortByArtist={this.sortByArtist} sortByGenre={this.sortByGenre} sortByRating={this.sortByRating} />
                <List songList={this.state.songList} />
                <p>New: {this.state.newTitle}, {this.state.newArtist}, {this.state.newGenre}, {this.state.newRating},</p>
            </div>
        )
    }
}


// <SortBar handleSort={this.handleSort} />



export default Container