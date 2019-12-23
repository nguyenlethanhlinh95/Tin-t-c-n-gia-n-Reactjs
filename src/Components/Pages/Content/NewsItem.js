import React, { Component } from 'react'
import Helper from '../../Helper';
import {
    Link
  } from "react-router-dom";

export default class NewsItem extends Component {

    render() {
        return (
            <div className="bloder-content">
                <div className="bloger-grid">						
                    <div className="blog-img">
                        <img src={this.props.anh} title="img6" alt={this.props.tieude} />
                    </div>
                    <div className="bloger-content">
                        <h5>
                            <Link to={"/tin-tuc/" + Helper.ChangeToSlug(this.props.tieude)  + "." + this.props.id + ".html"}>{this.props.tieude}</Link>
                            {/* <a href={"/tin-tuc/" + Helper.ChangeToSlug(this.props.tieude)  + "." + this.props.id + ".html"} >{this.props.tieude}</a> */}
                        </h5>
                        <p>{this.props.mota}</p>
                        <ul>
                            <li><a href="/">Lorem ipsum</a></li>
                            <li><a href="/">: 23-02-1989</a></li>
                            <li>
                                <Link to={"/tin-tuc/" + Helper.ChangeToSlug(this.props.tieude)  + "." + this.props.id + ".html"}>Readmore</Link>    
                            </li>
                        </ul>
                    </div>
                    <div className="clear"> </div>
                </div>
            </div>
        )
    }
}
