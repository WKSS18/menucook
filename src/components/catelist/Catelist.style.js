import styled from "styled-components"
import {Border} from "components/style/Border"
const  CateContainer = styled.div`
    display:flex;
    overflow: hidden;
    height: 100%;
    >div:first-child{
        width:1.8rem;
        height:100%;
        background:#f3f3f3;
        overflow-y:auto;
        ul{
            li{
                text-align:center;
                color:#424242;
                line-height:1.5rem;
                position:relative;
            }
            li.active{
                color:#b99062;
                background:white;
                &::before{
                    content:"";
                    position:absolute;
                    bottom:0;
                    height:0.02rem;
                    background:#b99062;
                    left:0.6rem;
                    right:0.6rem;
                }
            }
        }
    }

    >div:last-child{
        flex:1;
        overflow-y:auto;
        background:white;
        ul{
            display:flex;
            flex-wrap:wrap;
            li{
                width:33.3333%;
                text-align:center;
                line-height:0.95rem;
            }
        }
    }
`

const BorderCateContainer = Border(
    {
        Comp:CateContainer,
        borderwidth:'1px 0 0 0'
    }
)


export default BorderCateContainer;
