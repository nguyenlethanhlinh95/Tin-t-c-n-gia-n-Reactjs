import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (		
                <div className="header">
                    <div className="wrap">
                    {/* Start-logo*/}
                    <div className="logo">
                        <Link to={"/"}>
                            <img src={"/images/logo.png"} title="logo" alt={"Logo"} />
                        </Link>
                        {/* <a href="/"></a> */}
                    </div>				
                    {/* End-Logo*/}
                    {/* Start-Header-nav*/}				
                    <div className="clear"> </div>				
                    {/* End-Header-nav*/}
                    </div>
                </div>
        )
    }
}
