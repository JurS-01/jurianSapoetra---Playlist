import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    const allItems = props.songList.map(song => <ListItem key={song.id} song={song} handleDelete={props.handleDelete} />)
    return (
        <div>
            <ul>
                {allItems}
            </ul>
        </div>
    )
}



export default List