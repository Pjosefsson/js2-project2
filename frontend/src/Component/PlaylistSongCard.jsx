import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteSong } from '../actions/musicActions';

export const PlaylistSongCard = ({ id, title, album, artist, albumCover }) => {
    const dispatch = useDispatch(); //möjlighet att uppdatera store

    const removeSong = () => {
        const action = deleteSong(id) //skapa tart bort
        dispatch(action) //uppdatera redux med att ta bort
    }

    return (
        <section>
            <div>{<img src={albumCover} alt="" />}</div>
            {title}{" - "}
            <span>{album}{", "}{artist}</span>
            <button onClick={removeSong}>🗑</button>
        </section>
    )
}