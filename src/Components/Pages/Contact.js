import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
    fName: '',
    fPhone: '',
    fEmail: '',
    fMess: ''
  }
  handleChange  = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
  }

    render() {
        return (
            <div className="wrap">
        <div style={{border: 'none'}} className="about">
          <div className="contact-form">
            <h4>Contact</h4>
            <form onSubmit={this.handleSubmit}>
              <div>
                <span><label>Name</label></span>
                <span><input name="fName" onChange={this.handleChange} type="text" /></span>
              </div>
              <div>
                <span><label>Phone</label></span>
                <span><input name="fPhone" onChange={this.handleChange} type="text" /></span>
              </div>
              <div>
                <span><label>Email</label></span>
                <span><input name="fEmail" onChange={this.handleChange} type="text" /></span>
              </div>
              <div>
                <span><label>Giới tính</label></span>
                <span>
                  <select onChange={this.handleChange} defaultValue="">
                    <option value="">Chọn</option>
                    <option value="0">Nam</option>
                    <option value="1">Nữ</option>
                  </select>
                </span>
              </div>

              <div>
                <span><label>Subject</label></span>
                <span><textarea name="fMess" onChange={this.handleChange} /></span>
              </div>
              <div>
                <span><input type="submit" defaultValue="Submit" /></span>
              </div>
            </form>
          </div>
          <div className="map">
            <iframe title={"Google map"} width={425} height={346} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="http://maps.google.co.in/?ie=UTF8&ll=14.264383,79.804688&spn=153.263776,68.554688&t=m&z=2&output=embed" /><br /><small><a href="http://maps.google.co.in/?ie=UTF8&ll=14.264383,79.804688&spn=153.263776,68.554688&t=m&z=2&source=embed" style={{color: '#264284', fontFamily: '"Carrois Gothic SC", sans-serif', textAlign: 'left'}}>View Larger Map</a></small>
          </div>
          {/* DC Pagination:C9 End */}
        </div>
      </div>
        )
    }
}
