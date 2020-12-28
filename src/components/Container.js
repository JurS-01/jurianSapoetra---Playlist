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
            isSorted: true,
            newTitle: "",
            newArtist: "",
            newGenre: "",
            newRating: "",
            filterStar: "",
            filterGenre: "",
            filterType: ""
        }
        this.displayFullList = this.displayFullList.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        // this.handleSort = this.handleSort.bind(this)
        this.handleStarFilter = this.handleStarFilter.bind(this)
        this.handleGenreFilter = this.handleGenreFilter.bind(this)
    }

    // DISPLAY LIST
    displayFullList(event) {
        event.target.parentElement.style.display = "none"
        let editTools = document.getElementById("edit-tools");
        editTools.style.display = "block"
        const fullList = this.state.songList
        const listType = "My playlist"
        this.setState({
            displayedList: fullList,
            filterType: listType
        })
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
        const listType = "My playlist"
        this.setState({
            songList: updatedSongList,
            displayedList: updatedSongList,
            filterType: listType
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

    handleSort(sortType) {
        let sortedList = this.state.displayedList
        this.state.isSorted ? sortedList.sort(sortType) : sortedList.reverse(sortType)
        this.setState({
            songList: sortedList,
            isSorted: !this.state.isSorted
        });
    };

    sortByTitle = () => {
        this.handleSort((a, b) => a.title.localeCompare(b.title));
    };

    sortByArtist = () => {
        this.handleSort((a, b) => a.artist.localeCompare(b.artist));
    };

    sortByGenre = () => {
        this.handleSort((a, b) => a.genre.localeCompare(b.genre));
    };

    sortByRating = () => {
        this.handleSort((a, b) => b.rating - a.rating);
    };

    // FILTEREN

    handleGenreFilter(event) {
        event.preventDefault();
        let GenreFilteredList = "";
        let listType = "";
        if (this.state.filterGenre === "All") {
            GenreFilteredList = this.state.songList;
            listType = "My playlist"
        } else {
            GenreFilteredList = this.state.songList.filter(song => song.genre === this.state.filterGenre)
            listType = `My ${this.state.filterGenre} playlist`
        }
        this.setState({
            displayedList: GenreFilteredList,
            filterType: listType
        });
    }

    handleStarFilter(event) {
        event.preventDefault();
        let StarFilteredList = "";
        let listType = "";

        if (this.state.filterStar === "All") {
            StarFilteredList = this.state.songList;
            listType = "My playlist"
        } else {
            StarFilteredList = this.state.songList.filter(song => song.rating === this.state.filterStar)
            listType = `My ${this.state.filterStar}-star playlist`
        }
        this.setState({
            displayedList: StarFilteredList,
            filterType: listType
        });
    }

    render() {
        return (
            <div>
                <div className="start-btn-box">
                    <button onClick={this.displayFullList} className="start-btn">START MY LIST</button>
                </div>
                <div id="edit-tools">
                    <div className="list-editor">
                        <div>
                            <AddSong handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                            <SortBar sortByTitle={this.sortByTitle} sortByArtist={this.sortByArtist} sortByGenre={this.sortByGenre} sortByRating={this.sortByRating} />
                            <FilterBar handleChange={this.handleChange} handleGenreFilter={this.handleGenreFilter} handleStarFilter={this.handleStarFilter} />
                        </div>
                    </div>
                    <div className="list">
                        <List songList={this.state.displayedList} filterType={this.state.filterType} handleDelete={this.handleDelete} />
                    </div>
                </div>
            </div>
        )
    }
}



export default Container




