import {connect} from 'react-redux'
// connect store和组件连接，实现数据的共享

const mapState = (state)=>{
    return {
        showMap:state.index.showMap
    }
}
const mapDispath=(dispatch)=>{
    return {
        changeMapStatus:()=>{
            dispatch({type:'change_map_val'})
        }
    }
}

export default connect(mapState,mapDispath);
