import {combineReducers} from "redux"
import index from "../views/index/redux/reducer"
import list from "../views/list/redux/reducer"
const reducer = combineReducers({
    index,
    list
})
export default reducer;