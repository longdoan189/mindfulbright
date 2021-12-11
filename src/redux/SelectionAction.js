export const selectFeeling = (value) => {
    return {
        type: 'SELECT_FEELING',
        value: value
    }
}

export const selectAnnoy = (value) => {
    return {
        type: 'SELECT_ANNOY',
        value: value
    }
}

export const selectTime = (value) => {
    return {
        type: 'SELECT_TIME',
        value: value
    }
}