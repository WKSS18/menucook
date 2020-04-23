import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
export default class Swipper extends Component {
    constructor(){
        super();
        this.state = {
            data: "",
            imgHeight: 176,
          }
    }
    render() {
        return (
            <Carousel
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.props.swipperlist.map(item => (
                <a
                  key={item.id}
                  href=" "
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`${item.url}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
        )
    }
}
