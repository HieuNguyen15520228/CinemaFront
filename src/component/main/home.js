import React, {Component} from 'react';
import Sub_home from './sub/sub_home'
import {  Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
          <div>
              <main>
                  <div id="home" className="carousel slide animated fadeInUp" data-ride="carousel">
                      <ol className="carousel-indicators home-dot">
                          <li data-target="#home" data-slide-to="0" className="active"/>
                          <li data-target="#home" data-slide-to="1"/>
                          <li data-target="#home" data-slide-to="2"/>
                      </ol>

                      <div className="carousel-inner text-center home-inner" role="listbox">
                          <div className="item active">
                              <img src="./img/img_home/index_slide/1.jpg" alt="Brandi Img 1" width="100%"/>
                          </div>
                          <div className="item">
                              <img src="./img/img_home/index_slide/2.jpg" alt="Brandi Img 2" width="100%"/>

                          </div>
                          <div className="item">
                              <img src="./img/img_home/index_slide/3.jpg" alt="Brandi Img 3" width="100%"/>
                          </div>
                      </div>

                      <div className="home-box">
                          <h3>MUA VÉ NHANH</h3>
                          <hr/>
                              <div className="container-fluid">
                                  <div className="form-group  ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn ngày</option>
                                          <option value="0">Thứ năm, 18/10/2018</option>
                                          <option value="1">Thứ sáu, 19/10/2018</option>
                                      </select>
                                  </div>
                                  <div className="form-group  ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn rạp</option>
                                          <option value="0">UIT Cinema Bình Dương</option>
                                          <option value="1">UIT Cinema THỦ ĐỨC</option>
                                      </select>
                                  </div>
                                  <div className="form-group ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn phim</option>
                                          <option value="0">THE NUN</option>
                                          <option value="1">SHIN</option>
                                      </select>
                                  </div>
                                  <div className="form-group ">
                                      <select className="form-control home-box-item ">
                                          <option selected disabled>Chọn xuất</option>
                                          <option value="0">19:30, 2D - Phụ đề</option>
                                          <option value="1">21:45, 2D - Phụ đề</option>
                                      </select>
                                  </div>
                                  <Link className="btn home-button-dropdown" role="button" to="/slot">MUA VÉ</Link>
                              </div>
                      </div>
                  </div>

                  <Sub_home/>

                  <div className="main-bg-img">
                      <div className="caption">
                      </div>
                  </div>

                  <div id="team" className="container text-center ">
                      <div className="row">
                          <h2>EVENT</h2>
                          <div className="headdingGray"><sup className="spainGray pd-right-20"
                                                            >________________</sup><i
                              className="fa fa-heart-o"/>
                              <sup className="spainGray pd-left-20" >________________</sup></div>

                          <div id="team-slide" className="carousel slide team-img" data-ride="carousel">
                              <div className="carousel-inner" role="listbox">
                                  <div className="item active">
                                      <div className="col-sm-3  team-img-all">
                                          <div className="team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/1.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/2.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/3.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/4.jpg" width="100%"/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="col-sm-3  team-img-all">
                                          <div className="team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/5.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/6.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/7.jpg" width="100%"/>
                                          </div>
                                      </div>
                                      <div className="col-sm-3 team-img-all">
                                          <div className=" team-img-col">
                                              <img className="team-img-pic" src="img/img_home/index_event/8.jpg" width="100%"/>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                              <ol className="carousel-indicators team-dot">
                                  <li data-target="#team-slide" data-slide-to="0" className="active"/>
                                  <li data-target="#team-slide" data-slide-to="1"/>
                              </ol>
                          </div>
                      </div>
                  </div>


              </main>
          </div>
        );
    }
}

export default Home;