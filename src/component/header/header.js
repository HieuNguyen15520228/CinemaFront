import React, { Component } from 'react';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";
import fakeAuth from "../main/sub/private_route";
import { connect } from 'react-redux';
import axios from 'axios'
import URL from '../../URL_config'
// const AuthButton = withRouter((history, props) => (
//     fakeAuth.isAuthenticated ?
//         (<p>
//             {console.log(...props)}
//             <button className="na-sign-in"
//                 onClick={() => {
//                     fakeAuth.signout(() => {
//                         history.push("/");
//                     });
//                 }}
//             >
//                 <i className="fa fa-sign-out" />   ĐĂNG XUẤT
//                 </button>
//         </p>)
//         : (<Link className="na-sign-in" to="/sign_in"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>)
// )
// );
class Header extends Component {

    // componentDidMount() {
    //     if (localStorage.getItem('token') != null) {
    //         var token = localStorage.getItem('token');
    //         axios({
    //             method: 'get',
    //             url: URL + '/api/users/checktoken',
    //             headers: {
    //                 Authorization: 'bearer ' + token
    //             }
    //         })
    //             .then((response) => {
    //                 this.props.dispatch(
    //                     {
    //                         type: 'LOG_IN',
    //                         username: response.data.username,
    //                         email: response.data.email,
    //                         lastname: response.data.lastname,
    //                         firstname: response.data.firstname,
    //                         phone: response.data.phone,
    //                         dateOfBirth: response.data.dateOfBirth,
    //                         avatar: response.data.avatar,
    //                         loginState: !this.props.loginState
    //                     });
    //                 fakeAuth.authenticate(() => {
    //                     this.setState({ redirectToReferrer: true });
    //                 });
    //             })
    //             .catch((response) => {
    //                 console.log('Get information Error ' + response);
    //                 localStorage.removeItem('token');
    //                 //handle error
    //             });
    //     }
    // }
    componentWillReceiveProps() {
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <header>
                    <div className="container-fluid bg-gray">
                        <Link className="na-brand" to="/"><img src="/img/index_icon_range.png" alt={"icon_web"} /></Link>
                        <div className="navbar-right mg-top-20">
                            <p className={this.props.Show} >
                                <Link to="/user">{this.props.Username}</Link>
                                <button className="na-sign-in"
                                    onClick={() => {
                                        this.props.dispatch(
                                            {
                                                type: 'LOG_OUT',
                                                loginState: false
                                            }
                                        )
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('bookingList');
                                        this.props.history.push(
                                            {
                                                pathname: "/",
                                                state: { state: this.props.state }
                                            });

                                    }}><i className="fa fa-sign-out" />ĐĂNG XUẤT</button>
                            </p>
                            <Link className={"na-sign-in "+this.props.Hidden} to="/sign_in"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>
                            {/* <AuthButton /> */}
                            {/* {
                                this.props.loginState ?
                                    (<p>
                                        <Link to="/user">{this.props.username}</Link>
                                        <button className="na-sign-in"
                                            onClick={() => {
                                                this.props.dispatch(
                                                    {
                                                        type: 'LOG_OUT',
                                                        loginState: false
                                                    }
                                                )
                                                localStorage.removeItem('token');
                                                localStorage.removeItem('bookingList');
                                                this.props.history.push(
                                                    {
                                                        pathname: "/",
                                                        state: { state: this.props.state }
                                                    });

                                            }}
                                        >
                                            <i className="fa fa-sign-out" />ĐĂNG XUẤT
                                        </button>
                                    </p>)
                                    : (<Link className="na-sign-in" to="/sign_in"><i className="fa fa-user" /> ĐĂNG NHẬP</Link>)
                            } */}
                        </div>
                        <div className="na-bot mg-top-10">
                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Tìm kiếm tên phim, ưu đãi,..." />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="fa fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <nav className="navbar navbar-default na">
                        <div className="container">
                            <div className="row">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle na-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse na-right" id="myNavbar">
                                    <ul className="nav navbar-nav ">
                                        <li className="dropdown"><a className="na-item dropdown-toggle" data-toggle="dropdown" href="#">PHIM<span className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/movie_nowshowing">PHIM ĐANG CHIẾU</Link></li>
                                                <li><Link to="/movie_commingsoon">PHIM SẮP CHIẾU</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="na-item " to="/combo">ƯU ĐÃI</Link></li>
                                        <li><Link className="na-item" to="/blog">BLOG ĐIỆN ẢNH</Link></li>
                                        <li className="dropdown"><a className="na-item dropdown-toggle" data-toggle="dropdown" href="#">RẠP<span className="caret" /></a>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/cinema">CÁC CỤM RẠP</Link></li>
                                                <li><Link to="/cinema_speacial">RẠP ĐẶC BIỆT</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link className="na-item" to="/contact">LIÊN HỆ</Link></li>
                                        <li><Link className="na-item" to="/user">THÀNH VIÊN</Link></li>
                                        <li><Link className="na-item" to="/payment">THANH TOÁN</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username,
        loginState: state.loginState
    }
}
export default withRouter(connect(mapStateToProps)(Header));