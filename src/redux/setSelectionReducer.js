const stateDefault = {
    feeling: '',
    annoy: '',
    time: '',
    counter: 0,
}

export const SeletionReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "SELECT_FEELING": {
            if (state.feeling === '') {
                state.counter += 1;
            } 
            state.feeling = action.value;
            return { ...state }
        }
        case "SELECT_ANNOY": {
            if (state.annoy === '') {
                state.counter += 1;
            } 
            state.annoy = action.value;
            return { ...state }
        }
        case "SELECT_TIME": {
            if (state.time === '') {
                state.counter += 1;
            } 
            state.time = action.value;
            return { ...state }
        }
        case "RESET_SELECTION": {
            state = {
                feeling: '',
                annoy: '',
                time: '',
                counter: 0
            }
            return state
        }
        default: return { ...state }
    }
}