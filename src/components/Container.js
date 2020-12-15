import React from 'react';
import AddSong from './AddSong';
import SortBar from './SortBar';
import List from './List';
import FilterBar from './FilterBar';
import { v4 as uuidv4 } from 'uuid';


class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            songList: [
                { id: 1, title: "Purple Rain", artist: "Prince", genre: "Pop", rating: "2" },
                { id: 2, title: "Juicy", artist: "The Notorious B.I.G.", genre: "Hiphop", rating: "4" },
                { id: 3, title: "Enter the Sandman", artist: "Metallica", genre: "Rock", rating: "3" },
                { id: 4, title: "The Four Seasons", artist: "Antonio Vivaldi", genre: "Classical", rating: "5" },
                { id: 5, title: "In the air tonight", artist: "Phil Collins", genre: "Pop", rating: "1" },
            ],
            displayedList: [],
            isSorted: false,
            newTitle: "",
            newArtist: "",
            newGenre: "",
            newRating: "",
            filterStar: "",
            filterGenre: ""
        }
        this.displayFullList = this.displayFullList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        // this.handleSort = this.handleSort.bind(this)
        this.handleStarFilter = this.handleStarFilter.bind(this)
        this.handleGenreFilter = this.handleGenreFilter.bind(this)
    }

    // DISPLAY FULL LIST
    displayFullList() {
        const fullList = this.state.songList
        this.setState({ displayedList: fullList })
    }

    // TOEVOEGEN

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const newSong = {
            id: uuidv4(),
            title: this.state.newTitle,
            artist: this.state.newArtist,
            genre: this.state.newGenre,
            rating: this.state.newRating
        }
        const updatedSongList = [...this.state.songList, newSong]
        this.setState({
            songList: updatedSongList,
            displayedList: updatedSongList
        })
    }


    // VERWIJDEREN

    handleDelete(event) {
        const updatedDisplayedList = this.state.displayedList.filter(song => song.id != event.target.id)
        const updatedSongList = this.state.songList.filter(song => song.id != event.target.id)
        this.setState({
            displayedList: updatedDisplayedList,
            songList: updatedSongList
        })
    }

    // SORTEREN

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
        let sortedList = this.state.displayedList
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

    // FILTEREN

    handleGenreFilter(event) {
        event.preventDefault();
        let GenreFilteredList = "";
        this.state.filterGenre === "All"
            ? GenreFilteredList = this.state.songList
            : GenreFilteredList = this.state.songList.filter(song => song.genre === this.state.filterGenre)
        this.setState({ displayedList: GenreFilteredList });
    }

    handleStarFilter(event) {
        event.preventDefault();
        let StarFilteredList = "";
        this.state.filterStar === "All"
            ? StarFilteredList = this.state.songList
            : StarFilteredList = this.state.songList.filter(song => song.rating === this.state.filterStar)
        this.setState({ displayedList: StarFilteredList });
    }

    /* make filter jump back on default after adding new song
    - sort correct from first click
    - sort in one short function
    - redux
    - styling:
        # hamburger menu
        # show component bar
    */

    render() {
        return (
            <div>
                <button onClick={this.displayFullList}>Show my song list</button>
                <AddSong handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <SortBar sortByTitle={this.sortByTitle} sortByArtist={this.sortByArtist} sortByGenre={this.sortByGenre} sortByRating={this.sortByRating} />
                <FilterBar handleChange={this.handleChange} handleGenreFilter={this.handleGenreFilter} handleStarFilter={this.handleStarFilter} />
                <List songList={this.state.displayedList} handleDelete={this.handleDelete} />
            </div>
        )
    }
}





export default Container
