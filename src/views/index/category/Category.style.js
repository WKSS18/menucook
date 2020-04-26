import styled from "styled-components"
import {Border} from "components/style/Border"
const CategoryCon = styled.div`

`
const BorderCateContainer = Border(
    {
        Comp:CategoryCon,
        borderwidth:'1px 0 0 0'
    }
)

export default BorderCateContainer;