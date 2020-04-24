import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { TabBar } from 'antd-mobile';
import cookbook from 'assets/images/cookbook.png'
import cookbookActive from 'assets/images/cookbook-active.png'
import menu from 'assets/images/menu.png'
import menuActive from 'assets/images/menu-active.png'
import more from 'assets/images/more.png'
import moreActive from 'assets/images/more-active.png'
// 首页
import CookBook from './Cookbook'



const Category = () => {
    return <h1>Category pages</h1>
}
const More = () => {
    return <h1>More pages</h1>
}

// 菜单数据
const tablist = [{
    id:1,
    title: "菜谱大全",
    icon: cookbook,
    iconActive: cookbookActive,
    comp: CookBook
},
{
    id:2,
    title: "分类",
    icon: menu,
    iconActive: menuActive,
    comp: Category
},
{
    id:3,
    title: "更多",
    icon: more,
    iconActive: moreActive,
    comp: More
}
]

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 1,
            hidden: false,
            tablist
        };
    }
    render() {
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
        );
    }
}
