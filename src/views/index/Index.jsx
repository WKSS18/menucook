import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { TabBar } from 'antd-mobile';
import cookbook from 'assets/images/cookbook.png'
import cookbookActive from 'assets/images/cookbook-active.png'
import menu from 'assets/images/menu.png'
import menuActive from 'assets/images/menu-active.png'
import more from 'assets/images/more.png'
import moreActive from 'assets/images/more-active.png'
import map from "assets/images/location.png"
import mapActive from "assets/images/location-active.png"
// 首页
import CookBook from './Cookbook'
import Category from './category/Category'
import More from "./more/More"
import Map from "./map/Map"


// context
import { MapCounsumer } from "../../context/MapContext"
// const Category = () => {
//     return <h1>Category pages</h1>
// }

// 菜单数据
const tablist = [{
    id: "CookBook",
    title: "菜谱大全",
    icon: cookbook,
    iconActive: cookbookActive,
    comp: CookBook
},
{
    id: "Category",
    title: "分类",
    icon: menu,
    iconActive: menuActive,
    comp: Category
},
{
    id: "More",
    title: "更多",
    icon: more,
    iconActive: moreActive,
    comp: More
}
]

// 地图模块
const mapTab = {
    id: "map",
    title: "地图",
    icon: map,
    iconActive: mapActive,
    comp: Map
}
tablist.splice(2, 0, mapTab);

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'category',
            hidden: false,
            tablist
        };
    }
    render() {
        return (
            <MapCounsumer>
                {
                    // 通过控制tablist的元素实现添加删除效果
                    ({ showMap }) => {
                        if (showMap) {
                            if (this.state.tablist.length === 3) {
                                this.state.tablist.splice(2, 0, mapTab)
                            }
                        } else {
                            if (this.state.tablist.length === 4) {
                                this.state.tablist.splice(2, 1)
                            }
                        }
                        return (
                            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                                <TabBar
                                    unselectedTintColor="#949494"
                                    tintColor="#33A3F4"
                                    barTintColor="white"
                                    hidden={this.state.hidden}
                                >
                                    {
                                        this.state.tablist.map((item, index) => {
                                            return (
                                                <TabBar.Item
                                                    title={item.title}
                                                    key={item.id}
                                                    icon={<div style={{
                                                        width: '22px',
                                                        height: '22px',
                                                        background: `url(${item.icon}) center center /  21px 21px no-repeat`
                                                    }}
                                                    />
                                                    }
                                                    selectedIcon={<div style={{
                                                        width: '22px',
                                                        height: '22px',
                                                        background: `url(${item.iconActive}) center center /  21px 21px no-repeat`
                                                    }}
                                                    />
                                                    }
                                                    selected={this.state.selectedTab === item.id}
                                                    onPress={() => {
                                                        this.setState({
                                                            selectedTab: item.id,
                                                        });
                                                        console.log(this.props);
                                                        // 利用this.props拿到当前上下文的路由信息
                                                        let { path } = this.props.match;
                                                        this.props.history.push(path + "/" + item.id);
                                                    }}
                                                    data-seed="logId"
                                                >
                                                    {<item.comp></item.comp>}
                                                </TabBar.Item>
                                            )
                                        })
                                    }

                                </TabBar>
                            </div>
                        )

                    }
                }
            </MapCounsumer>
        );
    }
}
