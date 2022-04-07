import React from 'react'
import { useDispatch } from 'react-redux';
import { addSong } from '../actions/musicActions';
import { v4 as uuid } from 'uuid'

export const SongCard = (song) => {
    const { title, album, artist, albumCover } = song
    const dispatch = useDispatch();

    const addToPlaylist = () => {
        const action = addSong({ ...song, id: uuid() })
        dispatch(action) //uppdatera redux med lägga till
    }

    return (
        <section>
            <div>{<img src={albumCover} alt="" />}</div>
            {title} {" - "}
            <span>{album}{", "}{artist}</span>
            <button onClick={addToPlaylist}>🎶</button>
        </section>
    )
}