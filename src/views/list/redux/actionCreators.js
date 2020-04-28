import { get } from 'utils/http'
 
const loadListData = (params) => {
    return (dispatch) => {
        get('/apilist/cookdetail',params).then((result) => {
            dispatch({ type: "ADD_LIST_DATA", data:result.data,...params})
        })
    }
}
export {
    loadListData
}