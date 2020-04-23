import styled from 'styled-components'
import search from 'assets/images/search.png'
import {Border} from 'components/style/Border'

const SearchContainer = styled.div`
    background:${({bgcolor})=>bgcolor};
    height:1.3rem;
    padding:0.3rem;
    box-sizing:border-box;  
`
const InputContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    /* border-radius:0.15rem; */
    height:0.8rem;
    background:#fff;
    /* border:1px solid #b28969; */
    input{
        border:none;
        width:60%;
        /* z-index: 2; */
    }
    i{
        background:url(${search});
        display:block;
        width:0.35rem;
        height:0.35rem;
        background-size:cover;
    }
`
const BorderContainer = Border({
    Comp:InputContainer,
    bordercolor:({bordercolor})=>bordercolor,
    radius:'0.15'
})
export {
    SearchContainer,
    InputContainer,
    BorderContainer
}