import React from 'react';

const ListItem = (props) => {
    return (
        <li key={props.song.id}>
            title: {props.song.title}, artist: {props.song.artist}, genre: {props.song.genre}, stars: {props.song.rating}
            <span className="icon-trash" id={props.song.id} onClick={props.handleDelete}> </span>
        </li>
    )
}

export default ListItem