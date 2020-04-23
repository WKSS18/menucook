import styled from 'styled-components'

const GridContainer = styled.div`
    ul{
        display:flex;
        flex-wrap:wrap;
        li{
            display:flex;
            justify-content:center;
            align-items:center;
            height:1.5rem;
            width:${({ column }) => 100 / column}%;
        }
    }
`
export {
    GridContainer
}