import React, { Component } from 'react'
import Grid from "components/grid/Grid"
import {withRouter} from 'react-router-dom' 
class HotCate extends Component {
    handleClick=(item)=>{
        this.props.history.push('/list');

    }
    render() {
        return (
            <div className="hotCate">
                <h1>热门分类</h1>
                <Grid itemClick={this.handleClick} column={4} hotlist={this.props.list}></Grid>
            </div>
        )
    }

    componentDidMount(){
 
    }
}

export default withRouter(HotCate)