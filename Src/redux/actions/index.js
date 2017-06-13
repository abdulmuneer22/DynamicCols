export const UpdateColCount = (count) => {
    return {
        type : 'UPDATE_COL_COUNT',
        payload : count
    }
}

export const ToggleColView = (status) => {
    return {
        type : 'TOGGLE_COL_VIEW',
        payload : status
    }
}