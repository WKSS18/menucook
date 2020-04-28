import React, { Component } from 'react'
import { ListContainer, ItemContainer,TextBlock,ListITEMContainer } from "./List.style"
import connect from "./redux/connect"
import { NavBar, Icon, ListView, Toast } from 'antd-mobile'
import "assets/styles/common.css"
class List extends Component {
    constructor() {
        super();
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        })

        // 分页
        this.page=1;
        this.limit=10;
        this.state={
            dataSource,
            keyword:''
        }
    }
    handleClick = () => {
        this.props.history.go(-1);
    }

    // 上拉翻页
    onEndReached=()=>{
        if(this.props.reachEnd){
            Toast.info("没有更多的数据了",1);
            return;
        }
        console.log(this.props.datalist)
        this.props.loadData({_page:++this.page,_limit:this.limit,q:this.state.keyword})
    }

    // 设置keyword
    handleChange = (event)=>{
       this.setState({
           keyword:event.target.value
       })
    }

    // 搜索事件
    handleSearch =()=>{
        this.page = 1;
        this.props.loadData({ _page: this.page, _limit: this.limit, q: this.state.keyword })
    }




    render() {
        const row = (rowData, sectionID, rowID) => {
            return (
                <ItemContainer>
                    <div>
                        <img src={rowData.img} alt="" />
                    </div>
                    <div>
                        <h1>{rowData.name}</h1>
                        <TextBlock>{rowData.burdens}</TextBlock>
                        <p>{rowData.all_click}浏览 {rowData.favorites}收藏</p>
                    </div>
                </ItemContainer>
            )
        }
        return (
            <ListContainer>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleClick}
                    rightContent={[
                        <Icon key="0" type="search" onClick={this.handleSearch} style={{ marginRight: '0px' }} />,
                    ]}

                >
                    <input type="text" onChange={this.handleChange} placeholder="红烧鱼" />
                </NavBar>
                <ListITEMContainer>
                    {
                        <ListView
                            ref={el => this.lv = el}
                            dataSource={this.state.dataSource.cloneWithRows(this.props.datalist)}
                            renderRow={row}
                            useBodyScroll
                            scrollRenderAheadDistance={500}
                            onEndReached={this.onEndReached}
                            onEndReachedThreshold={10}
                        />
                    }
                </ListITEMContainer>

            </ListContainer>
        )
    }
    componentDidMount() {
        console.log(this.props)
        this.props.loadData({_page:this.page,_limit:this.limit,q:this.state.keyword});
    }
}

export default connect(List)
