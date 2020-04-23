import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import Swipper from './components/Swipper'
import {get} from 'utils/http'
import Search from 'components/search/Search'
import HotCate from './components/HotCate'
import './cookbook.css'
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
                {/* hadborder动态控制是否有边框 */}
                <Search hasborder={true} bordercolor="red" bgcolor="#f5f5f3" inputbgcolor="#666"
                placeholder="想吃什么，搜这里，如：川菜"
                ></Search>
                <HotCate></HotCate>
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
