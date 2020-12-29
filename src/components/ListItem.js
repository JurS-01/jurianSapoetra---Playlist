import React from 'react';



const ListItem = (props) => {
    return (
        <tr key={props.song.id} className="list-item">
            <td className="item">{props.song.title}</td>
            <td className="item">{props.song.artist}</td>
            <td className="item">{props.song.genre}</td>
            <td className="item">{props.song.rating}</td>
            <td className="item" id="delete-field">
                <span className="icon-trash" id={props.song.id} onClick={props.handleDelete}> </span>
            </td>
        </tr>
    );
}

export default ListItem
