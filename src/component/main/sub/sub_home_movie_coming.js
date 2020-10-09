import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class sub_home_movie extends Component {
    constructor(props) {
        super(props);
    }
    infoClick = (e) =>  {
        e.preventDefault();
        console.log(this.props.id_index)
        this.props.history.push(
            {pathname: "/movie_info_02/"+this.props.id_index,
            state: { id_index: this.props.id_index }});
    }
    render() {
        return (
            <div className="col-sm-3 fea-img">
                <img src={this.props.Img} width="100%" />
                <div className="fea-fade">
                    <div className="fea-fade-text fix-fea-fade-text">
                        <hr className="hr-color-orange" />
                        <p className="text-center">
                            <Link to="" onClick={this.infoClick} refs="id_number"  className="fea-fade-button f-right">CHI TIẾT</Link>
                            
        
                        </p>
                    </div>
                </div>
                <div className="fea-img-text-bottom">
                    <p>{this.props.eTitle}</p>
                    <p>{this.props.vTitle}</p>
                </div>
                
            </div>
            
        );
    }
}

export default withRouter(sub_home_movie);