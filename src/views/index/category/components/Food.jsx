import React, { Component } from 'react'
import Catelist from 'components/catelist/Catelist'
export default class Food extends Component {
    
    constructor(){
        super();
        this.state = {
            nav:"肉类"
        }
    }
    
    handlechange = (nav)=>{
        this.setState({
            nav
        })
    }

    render() {
        return (
            
                <Catelist {...this.props} nav={this.state.nav} changeNav={this.handlechange}></Catelist>
        
        )
    }
}
