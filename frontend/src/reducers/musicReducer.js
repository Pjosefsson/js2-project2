let initialState = {
    music: [],
    playlist: []
}

function filterSongs(songs, playListSongId) {
    const newListOfSongs = []
    songs.forEach(song => {
        if (song.id === playListSongId) {
            // gör inget
        } else {
            newListOfSongs.push(song)
        }
    });

    return newListOfSongs
}

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZE_MUSIC_LIST":
            return {
                ...state,
                music: action.payload
            }
            break

        case "ADD_SONG":

            return {
                ...state,
                playlist: [...state.playlist, action.payload]

            }
            break
        case "DELETE_SONG":
            const playlistSongId = action.payload

            return {
                ...state,
                playlist: filterSongs(state.playlist, playlistSongId)
            }
            break
        default:
            return state;
            break
    }
}

export default musicReducer;