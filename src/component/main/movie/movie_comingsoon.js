import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Movie_home from "../sub/sub_home_movie_coming"
import URL from '../../../URL_config'
class Movie_comming extends Component {
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
                console.log(res)
                this.setState({ filmList: [...this.state.filmList, ...res.data] });
            })
            .catch((res) => {
                console.log('Lỗi: ' + res)
            }
            )
    }
    render() {

        return (
            <div>
                <div id="features" className="text-center ">
                    <div className="container-fluid title_movie">
                        <h3><Link className="btn" to={"/movie_nowshowing"}>PHIM ĐANG CHIẾU</Link>/
                            <a href="#" className="btn active">PHIM SẮP CHIẾU</a></h3>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            {this.state.filmList.map((i) => {
                                if (i.id_index.includes("U1"))
                                    return <Movie_home folder='index_comingsoon' Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                        eTitle={i.eTitle} vTitle={i.vTitle} />;
                            })}
                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                        {this.state.filmList.map((i) => {
                                if (i.id_index.includes("U2"))
                                    return <Movie_home folder='index_comingsoon' Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                        eTitle={i.eTitle} vTitle={i.vTitle} />;
                            })}
                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                        {this.state.filmList.map((i) => {
                                if (i.id_index.includes("U3"))
                                    return <Movie_home folder='index_comingsoon' Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                        eTitle={i.eTitle} vTitle={i.vTitle} />;
                            })}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Movie_comming;