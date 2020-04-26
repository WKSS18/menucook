import React, { Component } from 'react'
import { SearchContainer, InputContainer,BorderContainer } from './Search.style'
export default class Search extends Component {
    render() {

        // 动态控制是否有边框
        let InputWrapper = this.props.hasborder ? BorderContainer : InputContainer;
        return (
            <SearchContainer {...this.props}>
                <InputWrapper {...this.props}>
                    <i></i>
                    <input type="text" placeholder={this.props.placeholder} />
                </InputWrapper>
            </SearchContainer>
        )
    }
}