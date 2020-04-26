import React, { Component } from 'react'
import {Switch} from "antd-mobile"
import {MapCounsumer} from "context/MapContext"
export default class More extends Component {
    render() {
        return (
            <MapCounsumer>
                {
                    ({showMap,changeStatus})=>{
                        return (
                            <>
                                地图:
                                <Switch checked={showMap} onChange={changeStatus}></Switch>
                            </>
                        )
                    }
                }
            </MapCounsumer>
        )
    }
}
