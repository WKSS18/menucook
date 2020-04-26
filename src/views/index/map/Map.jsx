import React, { Component } from 'react'
import styled from 'styled-components'
const MapContainer  =styled.div`
    width:100%;
    height:100%;
    iframe{
        border:none;
        width:100%;
        height:100%;
    }
`


export default class Map extends Component {
    render() {
        return (
                <MapContainer>
                    <iframe src="/map.html"></iframe>
                </MapContainer>
        )
    }
}
