const defaultState = {
    showMap: true
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "change_map_val":
            return {
                showMap: !state.showMap
            }
        default:
            return state;
    }
}
export default reducer;