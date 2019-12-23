import React, { Component } from 'react'
import data from '../dulieu.json';
import SidebarCategories from '../Layout/Siderbar/Siderbar_categories';
import RelatedInfomation from './Content/TinLienQuan';

export default class Single extends Component {

    render() {
      // console.log(this.props.match.params.id);
      var id = parseInt(this.props.match.params.id);
      let new_detail = data.filter(element => element.id === id);
      var dem = 1;
      var relatedItems = data.map((data, index) => {
          if (data.id !== id){ 
            if (dem <=4){
              dem++;
              return (
                <RelatedInfomation 
                      key={index}
                      id = {data.id}
                      tieude={data.tieude} 
                      mota={data.trichdan} 
                      anh={data.anh}>
                </RelatedInfomation>
              )   
            }
                           
          }
          return true;
      });

        return (
            <div>
        <div className="wrap">
          <div className="about">
            {/* sidebar categories */}
            <SidebarCategories></SidebarCategories>
            <div className="bloder-content">
              <div className="blog-box1">
                <div className="blog-box-image">
                  <img src={new_detail[0].anh} title={new_detail[0].tieude} alt={new_detail[0].tieude} />
                </div>
                <div className="blog-box-content">
                  <h2>{new_detail[0].tieude}</h2>
                  <div>
                    {new_detail[0].noidung}
                  </div>                
                </div>
              </div>					
              <div className="clear"> </div>


              <div className="container">
                    <div className="row">
                        <h3>Tin lien quan</h3>
                    </div>
                    <div className="row">
                        {relatedItems}
                        {/* <RelatedInfomation tieude="123" mota="Linh"></RelatedInfomation> */}
                    </div>
                </div>
            </div>	
          </div>
        </div>	
        <div className="clear"> </div>
        {/* End-content-gallery*/}
        {/* DC Pagination:C9 Start */}
        <div className="wrap">
          <div className="clear"> </div>
          {/* DC Pagination:C9 End */}
        </div>
      </div>
        )
    }
}
