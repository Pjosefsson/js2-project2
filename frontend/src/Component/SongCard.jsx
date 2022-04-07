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
        <section> {title}
            <span>{album}{artist}</span>
            {/* <img src={albumCover} alt="" /> */}
            <button onClick={addToPlaylist}>🎶</button>
        </section>
    )
}