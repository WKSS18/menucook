import React, { Component } from 'react'
import {HeadbarContainer} from './Headerbar.style'
export default class Headerbar extends Component {
    render() {
        return (
            <HeadbarContainer>
                {
                    this.props.children
                }
            </HeadbarContainer>
        )
    }
}
