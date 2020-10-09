import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Movie_01 from "./sub_movie/movie_video/movie_01";
import Movie_home from "../sub/sub_home_movie_no_trailer"
import axios from 'axios'
import URL from '../../../URL_config'
class Movie extends Component {
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
                console.log(this.state.filmList)
            })
    }
    render() {
        return (
            <div>
                <div id="features" className="text-center ">
                    <div className="container-fluid title_movie">
                        <h3><a href="#" className="btn active">PHIM ĐANG CHIẾU</a>/
                            <Link className="btn" to="/movie_commingsoon">PHIM SẮP CHIẾU</Link></h3>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            {this.state.filmList.map((i) => {
                                if (i.id_index.includes("O1"))
                                    return (<Movie_home key={i.key} Price={i.price} Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                        eTitle={i.eTitle} vTitle={i.vTitle} />
                                    )
                            })}
                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                            {this.state.filmList.map((i) => {
                                if (i.id_index.includes("O2"))
                                    return (<Movie_home key={i.key} Price={i.price} Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                        eTitle={i.eTitle} vTitle={i.vTitle} />
                                    )
                            })}

                        </div>
                    </div>
                    <div className="container fea-container">
                        <div className="row">
                        {this.state.filmList.map((i) => {
                                if (i.id_index.includes("O3"))
                                    return (<Movie_home key={i.key} Price={i.price} Img={i.imagePath} id_index={i.id_index} /*Detail={"/movie_info_01/"+i.id_index}*/
                                        eTitle={i.eTitle} vTitle={i.vTitle} />
                                    )
                            })}
                        </div>
                    </div>
                </div>


                {/*movie*/}
                <div className="modal fade" id="myModal" role="dialog">
                    <Movie_01 />
                </div>



            </div>
        );
    }
}

export default Movie;