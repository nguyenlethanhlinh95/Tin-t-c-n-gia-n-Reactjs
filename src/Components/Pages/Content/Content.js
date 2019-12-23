import React, { Component } from 'react';
import Sidebar from '../../Layout/Sidebar';
import NewsItem from './NewsItem';
import data from '../../dulieu.json';


export default class Content extends Component {
    render() {
        var newsItem = data.map((data, index) => {
            return <NewsItem 
                        key={index} 
                        id = {data.id}
                        tieude={data.tieude} 
                        mota={data.trichdan} 
                        anh={data.anh}>
                    </NewsItem>
        });

        //var related_infomation = 
        return (
            <div className="wrap">
                <div className="about">
                    <Sidebar></Sidebar>

                    {/* load data News */}
                    {newsItem}

                    
                </div>

                
            </div>
        )
    }
}
