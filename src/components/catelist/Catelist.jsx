import React, { Component } from 'react'
import CateContainer from "./Catelist.style"
export default class Catelist extends Component {
    render() {
        let { list ,changeNav,nav} = this.props;

        // 右侧显示内容
        let contentList = list[nav] || [];
        return (
            <CateContainer className="scrollbox">
               
                <div className='scrollef'>
                    <ul>
                        {
                            Object.keys(list).map((item, index) => {
                                return (<li key={index}
                                className={nav===item? 'active':''}
                                onClick={()=>changeNav(item)}
                                >
                                    {item}
                                </li>)
                            })
                        }
                    </ul>
                </div>

                <div className="scrollrig">
                    <ul>
                        {
                            contentList.map((item,index)=>{
                                return <li key={index}>
                                    {item}
                                </li>
                            })
                        }
                    </ul>
                </div>


            </CateContainer>
        )
    }

    componentDidMount() {
        // 
        console.log(Object.keys(this.props.list))
    }
}
