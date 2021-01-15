import React from 'react';

const FilterBar = (props) => {
    return (
        <div>
            <form>
                <select id="filterGenre" name="filterGenre" onChange={props.handleChange} >
                    <option value="All">All</option>
                    <option value="Classical">Classical</option>
                    <option value="Hiphop">Hiphop</option>
                    <option value="Pop">Pop</option>
                    <option value="Rock">Rock</option>
                </select>
                <button type="submit" onClick={props.handleGenreFilter}>Filter</button>
            </form>
            <form>
                <select id="filterStar" name="filterStar" onChange={props.handleChange} >
                    <option value="All">All</option>
                    <option value="5">#####</option>
                    <option value="4">####</option>
                    <option value="3">###</option>
                    <option value="2">##</option>
                    <option value="1">#</option>
                </select>
                <button type="submit" onClick={props.handleStarFilter}>Filter</button>
            </form>
        </div>
    )
}

export default FilterBar;