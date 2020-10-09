import React, {Component} from 'react';
import Movie_01 from "./movie_video/movie_01";
import {Link} from "react-router-dom";
import axios from 'axios'
import URL from '../../../../URL_config'
class Movie_info_01 extends Component {
    constructor(props) {
        super(props);
        this.state={
            "eTitle": null,
            "vTitle": null,
            "reDate":null,
            "summ":null,
            "category": null,
            "cast": null,
            "director": null,
            "duration": null,
            "trailer": null,
            "price":null
        }
    }
    
    componentDidMount() {
        axios.get(URL+"/api/films/get/"+this.props.location.state.id_index)
        .then((res) =>{
            console.log(res);
            this.setState({
                eTitle:res.data.eTitle,
                vTitle:res.data.vTitle,
                reDate:res.data.reDate,
                summ:res.data.summ,
                category: res.data.category,
                cast:res.data.cast,
                director: res.data.director,
                duration: res.data.duration,
                trailer: res.data.trailer,
                imagePath:res.data.imagePath,
            })
            console.log(this.state);
        })
    }
    
    

    render() {
        console.log(this.state)
        return (
            <div>
                    <div id="features" className="text-center ">
                        <div className="container title_movie mg-left-10">
                            <h3 className="mg-0"><a href="#" className="btn active">THÔNG TIN PHIM</a>
                            </h3>
                        </div>
                        <div className="container fea-container">
                            <div className="row">
                                <div className="col-sm-3 fea-img">
                                    <img src={this.state.imagePath} width="100%"/>
                                    <div className="fea-fade">
                                        <button type="button" className="fea-fade-play" data-toggle="modal"
                                                data-target="#myModal"><i className="fa fa-play-circle-o"/></button>
                                    </div>
                                </div>
                                <div className="col-sm-offset-1 col-sm-6 mg-top-25 text-left">
                                    <h3 className="spainBold">{this.state.eTitle}</h3>
                                    <h4><span className="spainBold">Tên tiếng việt:</span> {this.state.vTitle}</h4>
                                    <h4><span className="spainBold">Đạo diễn:</span> {this.state.director}</h4>
                                    <h4><span className="spainBold">Một số diễn viên chính:</span> {this.state.cast}</h4>
                                    <h4><span className="spainBold">Thời lượng:</span> {this.state.duration} phút</h4>
                                    <h4><span className="spainBold">Thể loại:</span> {this.state.category}</h4>

                                </div>
                            </div>
                        </div>
                        <div className="container fea-container">
                                    <h4 className="text-left"><span className="spainBold">Giới thiệu:</span> {this.state.summ}</h4>
                        </div>
                    </div>
                {/*movie*/}
                    <Movie_01 trailer={this.state.trailer}/>
            </div>

        );
    }
}

export default Movie_info_01;