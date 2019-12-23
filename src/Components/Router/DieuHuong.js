import React, { Component } from 'react';
import {
    Route,
    
  } from "react-router-dom";
import Home from '../Pages/Main';
import Contact from '../Pages/Contact';
import Single from '../Pages/Single';

export default class DieuHuong extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/trang-chu" component={Home} /> */}
                <Route exact path="/tin-tuc/:slug.:id.html" component={Single} />
                <Route exact path="/lien-he" component={Contact} />
            </div>
        )
    }
}
