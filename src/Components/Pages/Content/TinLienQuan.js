import React, { Component } from 'react';
import Helper from '../../Helper';
import {
    Link
  } from "react-router-dom";

export default class TinLienQuan extends Component {
    render() {
        return (
            <div className="col-lg-4 col-item">
                <div className="hinhanh">
                    <img src={this.props.anh} alt={ this.props.tieude }/>
                </div>
                <div className="tieude">
                    <h3>
                        <Link to={"/tin-tuc/" + Helper.ChangeToSlug(this.props.tieude)  + "." + this.props.id + ".html"}>
                            {this.props.tieude}
                        </Link>  
                    </h3>
                </div>
                <div className="doanvan">
                    {this.props.mota}
                </div>
            </div>
        )
    }
}
