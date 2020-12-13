import React from 'react';

const ListItem = (props) => {
    return (
        <li key={props.song.id}>
            title: {props.song.title}, artist: {props.song.artist}, genre: {props.song.genre}, stars: {props.song.rating}
        </li>
    )
}

export default ListItem