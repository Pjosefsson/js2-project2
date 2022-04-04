export const initializeMusicList = (data) => ({
    type: "INITIALIZE_MUSIC_LIST",
    payload: data
})

export const addSong = (data) => ({
    type: "ADD_SONG",
    payload: data,
})

export const deleteSong = (data) => ({
    type: "DELETE_SONG",
    payload: data,
})