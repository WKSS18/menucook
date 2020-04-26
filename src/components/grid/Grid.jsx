import React, { Component } from 'react'
import { GridContainer } from './Grid.style'
export default class Grid extends Component {
    render() {
        return (
            <div>
                <GridContainer column={this.props.column}>
                    <ul>
                        {
                            this.props.hotlist.map((item,index) => {
                                return <li onClick={this.props.itemClick.bind(this,item)} key={index}>
                                    <img src={item.img} alt=""></img>
                                    <span>{item.title}</span>
                                </li>
                            })
                        }
                        <li>更多</li>
                    </ul>
                </GridContainer>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.hotlist);
    }
}
