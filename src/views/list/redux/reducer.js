const defaultState = {
    datalist:[],
    reachEnd:false
}
const reducer = (state=defaultState,action)=>{
    let list = state.datalist;
    console.log(action)
    if(action._page===1){
        list=[];
    }
    switch(action.type){
        case "ADD_LIST_DATA":
            return {
                reachEnd:action.data.length<action._limit? true:false,
                datalist:list.concat(action.data)
            }
        default:
            return state;
    }
}
export default reducer;
