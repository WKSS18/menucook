import React, { Component } from 'react'
import Catelist from "components/catelist/Catelist"
export default class Classify extends Component {
    constructor(){
        super();
        this.state={
            nav:""
        }
    }
    static getDerivedStateFromProps(props,state){
        let nav="";
        if(state.nav){
            nav=state.nav;
        }else{
            nav=Object.keys(props.list)[0];
        }
        return {
            nav
        }
    }



    handleChange = (nav)=>{
        this.setState({
            nav
        })
    }
    render() {
        return (
           
                <Catelist {...this.props} changeNav={this.handleChange} nav={this.state.nav}></Catelist>
           
        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
