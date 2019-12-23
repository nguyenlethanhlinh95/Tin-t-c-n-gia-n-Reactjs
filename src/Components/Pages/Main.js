import React, { Component } from 'react'
import Content from './Content/Content';
import Pagination from '../Layout/Pagination/pagination';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Content></Content>
                <Pagination></Pagination>
            </div>
        )
    }
}
