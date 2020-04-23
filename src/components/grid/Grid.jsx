import React, { Component } from 'react'
import { GridContainer } from './Grid.style'
export default class Grid extends Component {
    constructor() {
        super();
        this.state = {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    }
    render() {
        return (
            <div>
                <GridContainer column={this.props.column}>
                    <ul>
                        {
                            this.state.list.map((item) => {
                                return <li key={item}>{item}</li>
                            })
                        }
                    </ul>
                </GridContainer>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.state.list);
    }
}
