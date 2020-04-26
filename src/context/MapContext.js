import React from 'react'

const {
    Provider,
    Consumer:MapCounsumer
} = React.createContext();

class MapProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            showMap:JSON.parse(localStorage.getItem('showMap')) || false
        }
    }

    changeStatus = ()=>{
        this.setState((preState)=>{
            return {
                showMap:!preState.showMap
            }
        },()=>{
            localStorage.setItem('showMap',this.state.showMap)
        })
    }

    render(){
        return (
            <Provider value={{
                showMap:this.state.showMap,
                changeStatus:this.changeStatus
            }}>
            {
                this.props.children
            }
            </Provider>
        )
    }
}

export {
    MapProvider,
    MapCounsumer
}