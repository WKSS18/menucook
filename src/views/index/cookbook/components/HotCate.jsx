import React, { Component } from 'react'
import Grid from "components/grid/Grid"
export default class HotCate extends Component {
    handleClick=(item)=>{
        console.log(item)
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
        console.log(this.props.hotlist)
    }
}

