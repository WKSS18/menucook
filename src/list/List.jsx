import React, { Component } from 'react'
import ListContainer from "./List.style"
import { NavBar, Icon } from 'antd-mobile';
export default class List extends Component {

    handleClick = ()=>{
        this.props.history.go(-1);
    }
    render() {
        return (
            <ListContainer>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={this.handleClick}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '0px' }} />,
                    ]}
                  
                >
                    <input type="text"/>

                </NavBar>
            </ListContainer>
        )
    }
}
