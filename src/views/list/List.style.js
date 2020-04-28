import styled from "styled-components"

import { Border } from "components/style/Border"


const ListContainer = styled.div`
    .am-navbar-light{
        background-color:#EE7530;
        input{
            width:5.2rem;
            height:0.55rem;
            border:none;
            border-radius:0.15rem;
            background-color:rgba(0,0,0,0.2);
            padding:0.05rem 0.2rem;
            color:#fff;
        }
        .am-icon-left {
            color: white;
            font-size:15px;
        }
        .am-icon-search {
            color: white;
        }
    }
`

const ListITEMContainer = styled.div`
    ul{
        overflow: auto;
        flex: 1;
    }
`

const TextBlock = styled.p`
    width:98%;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
`
const ItemContainer = Border({
    borderwidth: "0 0 1px 0",
    bordercolor: "#dedede",
    Comp: styled.li`
            display:flex;
            padding:0.22rem;
            >div:first-child{
                width:2.6rem;
                img{
                    width:2.3rem;
                    height:1.5rem;
                }
            }
            >div:last-child{
                width:0px;
                flex:1;
                h1{
                    font-size:0.35rem;
                    line-height: 0.6rem;
                }   
                p{
                    font-size:0.3rem;
                    color:#8f8f8f;
                    line-height:0.45rem;
                }
            }
    `
})
export {
    ListITEMContainer,
    ListContainer,
    ItemContainer,
    TextBlock
} 