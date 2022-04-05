let initialState = {
    music: []
}

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIALIZE_MUSIC_LIST":
            return {
                ...state,
                music: action.payload
            }
        case "ADD_SONG":

            return {
                ...state,
                music: [[...state.music], action.payload]

            }
        case "DELETE_SONG":

            return {

            }
        default:
            return state;
    }
}

export default musicReducer;