const reducer = (state = [], action = {}) => {
    switch (action.type) {
        case 'ADD_MODEL':
            return { ...state, value: action.payload }
        default:
            return state
    }
}

export default reducer