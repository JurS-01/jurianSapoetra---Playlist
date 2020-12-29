import React from 'react';
import ListItem from './ListItem';


const List = (props) => {
    const allItems = props.songList.map(song => <ListItem key={song.id} song={song} handleDelete={props.handleDelete} />)
    return (
        <div>
            <div className="list-header">
                <h1>{props.filterType}</h1>
            </div>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr className="table-headers">
                        <th className="table-head">Song</th>
                        <th className="table-head">Artist</th>
                        <th className="table-head">Genre</th>
                        <th className="table-head">Rating</th>
                        <th className="table-head"></th>
                    </tr>
                </thead>
                <tbody>{allItems}</tbody>
            </table>
        </div>
    )
}

export default List