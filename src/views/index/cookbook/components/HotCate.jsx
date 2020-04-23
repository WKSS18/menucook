import React, { Component } from 'react'
import Grid from "components/grid/Grid"
export default class HotCate extends Component {
    render() {
        return (
            <div className="hotCate">
                <h1>热门分类</h1>
                <Grid column={4}></Grid>
            </div>
        )
    }
}
