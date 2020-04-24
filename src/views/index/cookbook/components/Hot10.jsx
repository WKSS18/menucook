import React, { Component } from 'react'

export default class Hot10 extends Component {
    render() {
        return (
            <div className='Top10'>
                <span>精品好菜</span>
                <ul>
                    {
                        this.props.list.slice(0, 10).map((item, index) => {
                            return <li key={item.id}>
                                <img src={item.img} alt="" />
                                <p>{item.name}</p>
                                <p><span>浏览：{item.all_click}</span>收藏：{item.favorites}<span></span></p>
                            </li>

                        }
                        )}
                </ul>
            </div>
        )
    }
}
