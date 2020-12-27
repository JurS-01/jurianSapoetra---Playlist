import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    const allItems = props.songList.map(song => <ListItem key={song.id} song={song} handleDelete={props.handleDelete} />)
    return (
        <div>
            <div className="list-header">
                <h1>{props.filterType}</h1>
            </div>
            <ul>
                {allItems}
            </ul>
        </div>
    )
}



export default List