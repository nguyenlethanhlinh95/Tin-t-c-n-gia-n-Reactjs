import React, { Component } from 'react'

export default class Siderbar_categories extends Component {
    render() {
        return (
            <div className="services-sidebar">
              <h4>Categories</h4>
              <ul>
                <li><img src={"/images/pointer.png"} alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Lorem ipsum dolor sit amet</a></li>
              </ul><br />
              <h4>Archives</h4>
              <ul>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Jan, 2012</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">Feb, 2012</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">March, 2012</a></li>
                <li><img src={ "/images/pointer.png" } alt="atr" title="pointer" /><a href="/">April, 2012</a></li>
              </ul>
            </div>
        )
    }
}
