import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Movie_01 from "../movie/sub_movie/movie_video/movie_01";
import Movie_home from "./sub_home_movie_no_trailer"
import axios from 'axios'
import URL from '../../../URL_config';

class Sub_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmList: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: URL+'/api/films/all',

        })
            .then((res) => {
                this.setState({ filmList: [...this.state.filmList, ...res.data] });
            })
            .catch((res) => {
                console.log('Lỗi: ' + res)
            }
            )
    }

    render() {
        {console.log(URL)}
        return (
            <div>
                <div id="features" className="text-center animated flipInX delay-1s slower">
                    <h2>PHIM</h2>
                    <div className="headdingGray"><sup className="spainGray pd-right-20">________________</sup><i className="fa fa-heart-o" /><sup className="spainGray pd-left-20">________________</sup></div>
                    <div id="fea-slide" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner fea-full-content" role="listbox">
                            <div className="item active">
                                <div className="container fea-container">
                                    <div className="row">
                                        {this.state.filmList.map((i) => {
                                            if (i.id_index.includes("O1"))
                                                return (<Movie_home key={i.key} Price={i.price} Img={i.imagePath} id_index={i.id_index}
                                                    eTitle={i.eTitle} vTitle={i.vTitle} />
                                                )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="container fea-container">
                                    <div className="row">
                                        {this.state.filmList.map((i) => {
                                            if (i.id_index.includes("O2"))
                                                return <Movie_home key={i.key} Price={i.price} Img={i.imagePath} id_index={i.id_index}
                                                    eTitle={i.eTitle} vTitle={i.vTitle} />;
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="item ">
                                <div className="container fea-container">
                                    <div className="row">
                                        {this.state.filmList.map((i) => {
                                            if (i.id_index.includes("O3"))
                                                return <Movie_home key={i.key} Price={i.price} Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                                    eTitle={i.eTitle} vTitle={i.vTitle} />;
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Left and right controls*/}

                        <a className="left carousel-control fea-fix-carousel" href="#fea-slide" role="button"
                            data-slide="prev">
                            <span className="fa fa-hand-o-left fea-fix-potision-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control fea-fix-carousel" href="#fea-slide" role="button"
                            data-slide="next">
                            <span className="fa fa-hand-o-right fea-fix-potision-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>

                        <ol className="carousel-indicators fea-dot">
                            <li data-target="#fea-slide" data-slide-to="0" className="active" />
                            <li data-target="#fea-slide" data-slide-to="1" />
                            <li data-target="#fea-slide" data-slide-to="2" />
                        </ol>
                    </div>
                </div>
            </div>

        );
    }
}

export default Sub_home;