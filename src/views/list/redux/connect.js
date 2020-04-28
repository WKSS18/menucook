import {connect} from "react-redux"
import {loadListData} from "./actionCreators"

const mapState=(state)=>{
    return {
        datalist:state.list.datalist,
        reachEnd:state.list.reachEnd
    }
}
const mapDispatch =(dispatch)=>{
    return {
        loadData:(params)=>{
            console.log(params)
            dispatch(loadListData(params))
        }
    }
}
export default connect(mapState,mapDispatch);
