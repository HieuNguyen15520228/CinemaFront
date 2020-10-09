import React, { Component } from 'react';
// import Login from './sub/login'
import Signup from './sub/signup'
import fakeAuth from './sub/private_route'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import URL from '../../URL_config'
class Sign_in extends Component {

    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginSuccess: false,
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    loginClick = (e) => {
        e.preventDefault();
        localStorage.removeItem('bookingList');
        axios.post(URL+'/api/users/login', { email: this.state.email, password: this.state.password })
            .then((response) => {
                localStorage.removeItem('token');
                localStorage.setItem('token', response.data.data.token);
                var dispatch = this.props.dispatch;
                dispatch(
                    {
                        type: 'LOG_IN',
                        username: response.data.data.username,
                        email: response.data.data.email,
                        lastname: response.data.data.lastname,
                        firstname: response.data.data.firstname,
                        phone: response.data.data.phone,
                        dateOfBirth: response.data.data.dateOfBirth,
                        avatar: response.data.data.avatar,
                        loginState: !this.props.loginState
                    });
                fakeAuth.authenticate(() => {
                    this.setState({ redirectToReferrer: true });
                });
                // if (this.state.loginSuccess === 'true')
                this.props.history.push({
                    pathname: "/",
                }
                );
            })
            .catch((response) => {
                //handle error
                console.log(response);
                this.props.history.push({
                    pathname: "/sign_in/sign_in",
                }
                );
                if (String(response) === 'Error: Network Error')
                    alert('Không có kết nối Internet');
                else
                    alert('Username hoặc mật khẩu không chính xác');
            });
    }
    render() {

        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;



        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#login">Đăng nhập</a></li>
                    <li><a data-toggle="tab" href="#register">Đăng ký</a></li>
                </ul>

                <div className="tab-content">
                    <div id="login" className="tab-pane fade in active">
                        <h3>Đăng nhập</h3>
                        <form>
                            <div>
                                <div className="form-group center_textbox">
                                    <label htmlFor="email">Email:</label>
                                    <input onChange={this.handleChange} type="email" className="form-control" id="email"
                                        placeholder="Nhập email" name="email" />
                                </div>
                                <div className="form-group center_textbox">
                                    <label htmlFor="pwd">Password:</label>
                                    <input onChange={this.handleChange} type="password" className="form-control" id="password"
                                        placeholder="Nhập password" name="password" />
                                </div>
                                <div className="checkbox center_textbox">
                                    <label><input type="checkbox" name="remember" /> Nhớ tên tài khoản</label>
                                    <Link to="/forgot_pass" className="btn btn-link"
                                    >Quên mật khẩu?</Link>
                                </div>
                            </div>
                            {/* <Login/> */}
                        </form>
                        <br/>
                        <button onClick={this.loginClick}  className="btn btn-primary center_button">Đăng nhập</button>
                    </div>
                    <div id="register" className="tab-pane fade">
                        <Signup />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username,
        email: state.email,
        firstname: state.firstname,
        lastname: state.lastname,
        phone: state.phone,
        dateOfBirth: state.dateOfBirth,
        loginState: state.loginState
    }
}
export default connect(mapStateToProps)(Sign_in);