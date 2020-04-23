import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import Swipper from './components/Swipper'
import {get} from 'utils/http'
export default class Cookbook extends Component {
    constructor(){
        super();
        this.state={
            swipperlist:[]
        }
    }
    render() {
        return (
            <div>
                <Headerbar>菜谱大全</Headerbar>
                <Swipper swipperlist={this.state.swipperlist}></Swipper>
            </div>
        )
    }


    async getSwipper(){
        var result = await get('/api/swipper');
        console.log(result);
        this.setState({
            swipperlist: result.data.data
        })
    }
    componentDidMount(){
        this.getSwipper();
    }
}
