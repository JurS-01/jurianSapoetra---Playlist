import React from 'react';

// const ListItem = (props) => {
//     return (
//         <div className="item-box">
//             <li key={props.song.id} className="list-item">
//                 title: {props.song.title}, artist: {props.song.artist}, genre: {props.song.genre}, stars: {props.song.rating}
//                 <span className="icon-trash" id={props.song.id} onClick={props.handleDelete}> </span>
//             </li>
//         </div>
//     )
// }

const ListItem = (props) => {
    return (
        <li key={props.song.id} className="list-item">
            {props.song.title} - {props.song.artist} <spanby className="itemDetails">(genre: {props.song.genre}, stars: {props.song.rating})</spanby>
            <span className="icon-trash" id={props.song.id} onClick={props.handleDelete}> </span>
        </li>
    )
}

export default ListItem