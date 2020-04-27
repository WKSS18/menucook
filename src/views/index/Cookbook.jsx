import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import Swipper from './cookbook/components/Swipper'
import {get} from 'utils/http'
import Search from 'components/search/Search'
import HotCate from './cookbook/components/HotCate'
import './cookbook.scss'
import Hot10 from './cookbook/components/Hot10'
export default class Cookbook extends Component {
    constructor(){
        super();
        this.state={
            swipperlist:[],
            hotcatedata:[],
            list:[]
        }
    }
    render() {
        return (
            <div>
                <Headerbar>菜谱大全</Headerbar>
                <Swipper swipperlist={this.state.swipperlist}></Swipper>
                {/* hadborder动态控制是否有边框 */}
                <Search hasborder={true} bordercolor="red" bgcolor="#f5f5f3" inputbgcolor="#ccc"
                placeholder="想吃什么，搜这里，如：川菜"
                ></Search>
                <HotCate list={this.state.hotcatedata}></HotCate>
                <Hot10 list={this.state.list}></Hot10>
            </div>
        )
    }


    async getSwipper(){
        var result = await get('/api/swipper');
        this.setState({
            swipperlist: result.data.data
        })
    }

    async getHotCate(){
        let result = await get('/api/hotcate');
        this.setState({
            hotcatedata:result.data.list
        })
    }

    async getlist(){
        let result = await get('/api/list');
        this.setState({
            list:result.data.data
        })
    }

    componentDidMount(){
        this.getSwipper();
        this.getHotCate();
        this.getlist();
    }
}
