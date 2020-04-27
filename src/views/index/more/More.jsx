import React, { Component } from 'react'
import { Switch } from "antd-mobile"
import connect from "../redux/connect"
 class More extends Component {
    // 可以解构出connect中的数据
    render() {
        let {showMap,changeMapStatus} = this.props;
        return (
            <>
                地图:
                <Switch checked={showMap} onChange={changeMapStatus}></Switch>
            </>
        )
    }
    componentDidMount() {
        console.log(this.props);
    }
}
export default connect(More)
