import React, { Component } from 'react'
import Headerbar from 'components/headerbar/Headerbar'
import Search from 'components/search/Search'
import Classify from './components/Classify'
import Food from './components/Food'
import "./Category.scss"
import { get } from "utils/http"
import  CategoryCon  from "./Category.style"
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
class Category extends Component {
    constructor() {
        super();
        this.state = {
            dir: "left",
            categorylist: [],
            materiallist: []
        }
    }
    handlClick = (val) => {
        this.setState(() => {
            return {
                dir: val
            }
        }, () => {
            // 这里读取state确保值已经修改完毕了
            if (this.state.dir === "left") {
                this.props.history.push('/index/Category/classify')
            } else {
                this.props.history.push('/index/Category/food')
            }
        })
        // this.setState({
        //     dir: val
        // })
        // this.setState({});
        // if (this.state.dir === "left") {
        //     this.props.history.push('/index/Category/classify')
        // } else {
        //     this.props.history.push('/index/Category/food')
        // }
    }
    render() {
        return (
            <div className="box">
                <div className="HeaderTab">
                    <Headerbar>
                        <ul className={this.state.dir}>
                            <li className={this.state.dir === 'left' ? 'active' : ''} onClick={this.handlClick.bind(this, 'left')}>分类</li>
                            <li className={this.state.dir === 'right' ? 'active' : ''} onClick={this.handlClick.bind(this, 'right')}>食材</li>
                        </ul>
                    </Headerbar>
                </div>
                <Search inputbgcolor="#EFEFEF" bgcolor="#ffffff" placeholder="想吃什么，搜这里，00如：川菜"></Search>
                {/* 排他性路由 */}
                    <div className="scroll">
                        <Switch>
                            <Route style={{height:"100%"}} path="/index/Category/classify" render={() => {
                                return <Classify list={this.state.categorylist}></Classify>
                            }}>
                            </Route>
                            <Route path="/index/Category/food" render={() => {
                                return <Food list={this.state.materiallist}></Food>
                            }}>

                            </Route>
                            {/* 初始进来进行路由重定向 */}
                            <Redirect from="/index/Category" to='/index/Category/classify'></Redirect>
                        </Switch>
                    </div>
            </div>


        )
    }

    async getCategory() {
        let result = await get("/api/category");
        this.setState({
            categorylist: result.data.data.category,
            materiallist: result.data.data.material
        })
    }
    componentDidMount() {
        this.getCategory();
    }
}

// 为了获取当前上下文的路由信息可以用withRouter方法增强
export default withRouter(Category);
