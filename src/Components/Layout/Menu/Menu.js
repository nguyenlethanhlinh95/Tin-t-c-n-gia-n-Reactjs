import React, { Component } from 'react';
import {
    NavLink
  } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
                <div className="header-nav1">
                    <div className="wrap">
                        <ul>
                            <li>
                                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                                {/* <NavLink to="/">Home</NavLink > */}
                            </li>
                            <li>
                                <NavLink to="/lien-he" >Contact</NavLink>
                            </li>
                        </ul>				
                    <div className="search-bar">
                        <ul>
                        <li><input type="text" /></li>
                        <li><form><input type="submit" defaultValue /></form></li>
                        </ul>
                    </div>
                    </div>				
                    {/* End-Header*/}
                    <div className="clear"> </div>
                    {/* content-gallery*/}
                </div>
        )
    }
}
