import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Combo extends Component {
    combo = (x,y) =>{
        if (localStorage.getItem('bookingList') != null) {
            var bookingList = JSON.parse(localStorage.getItem('bookingList'));
            var item = {};
            item.vTitle = x;
            item.price = 12;
            item.film = y;
            bookingList.push(item);
            localStorage.setItem('bookingList', JSON.stringify(bookingList))
        }
        else {
            var bookingList = [];
            var item = {}
            item.vTitle = x;
            item.price = 12;
            item.film = y;
            bookingList.push(item);
            localStorage.setItem('bookingList', JSON.stringify(bookingList))
        }
    }
    render() {
        return (
            <div id="features" className="text-center ">
                <div className="container-fluid title_movie">
                    <h3><a href="#" className="btn active">ƯU ĐÃI</a></h3>
                </div>
                <div className="container fea-container">
                    <div className="row">
                        <div className="col-sm-3 fea-img">
                            <img src="../img/img_combo/1.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link onClick={()=>{this.combo('COMBO 1','C01')}} to="/payment" className="fea-fade-button"> ĐẶT THÊM</Link>
                                        </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 1</p>
                                <p>12 USD</p>
                            </div>
                        </div>
                        <div className="col-sm-3 fea-img">
                            <img src="../img/img_combo/2.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link onClick={()=>{this.combo('COMBO 2','C02')}} to="/payment" className="fea-fade-button"> ĐẶT THÊM</Link>
                                        </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 2</p>
                                <p>12 USD</p>
                            </div>
                        </div>

                        <div className="col-sm-3 fea-img ">
                            <img src="../img/img_combo/3.jpg" width="100%"/>
                            <div className="fea-fade ">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link onClick={()=>{this.combo('COMBO 3','C03')}} to="/payment" className="fea-fade-button"> ĐẶT THÊM</Link>
                                        </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 3</p>
                                <p>12 USD</p>
                            </div>
                        </div>

                        <div className="col-sm-3 fea-img ">
                            <img src="../img/img_combo/4.jpg" width="100%"/>
                            <div className="fea-fade">
                                <div className="fea-fade-text fix-fea-fade-text-combo">
                                    <p className="text-center">
                                        <Link onClick={()=>{this.combo('COMBO 4','C04')}} to="/payment" className="fea-fade-button"> ĐẶT THÊM</Link>
                                        </p>
                                </div>
                            </div>
                            <div className="fea-img-text-bottom">
                                <p>COMBO 4</p>
                                <p>12 USD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Combo;