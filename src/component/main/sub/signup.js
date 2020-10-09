import React, { Component } from 'react';
import axios from 'axios'
import URL from '../../../URL_config'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            password2: null,
            lastname: null,
            firstname: null,
            gender: null,
            dateOfBirth: null,
            username: null,
            phone: null,
            // loginSuccess: 'false'
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    registerClick = (e) => {
        e.preventDefault();
        axios.post(URL + '/api/users/register', {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password,
            username: this.state.username,
            gender: this.state.gender,
            dateOfBirth: this.state.dateOfBirth,
            phone: this.state.phone,
            firstname: this.state.firstname,
            lastname: this.state.lastname,

        })
            .then((response) => {
                console.log(JSON.stringify(response));
                // if(this.state.loginSuccess === 'true')
                // this.props.history.push({ 
                //     pathname: "/",
                // }
                // );
                alert('Đăng ký thành công')
            })
            .catch((err) => {
                console.log(err.response.status)
                if (err.response.status === 302)
                    alert('Tài khoản đã tồn tại')
                else if(err.response.status===400)
                    alert('Nhập thông tin hợp lệ')
            });
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Đăng ký</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="name">Tên:</label>
                                <input onChange={this.handleChange} name="lastname" id="fname" type="text" className="form-control" placeholder="Tên *" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Họ:</label>
                                <input onChange={this.handleChange} name="firstname" id="lname" type="text" className="form-control" placeholder="Họ *" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="Email *" />
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input onChange={this.handleChange} name="username" id="name" type="text" className="form-control" placeholder="Username *" />
                            </div>
                            <label>Giới tính</label>
                            <div className="form-group">
                                <input onChange={this.handleChange} name="gender" type="radio" name="gender" />
                                <span> Nam </span>
                                <input onChange={this.handleChange} name="gender" type="radio" name="gender" />
                                <span> Nữ </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Password:</label>
                                <input onChange={this.handleChange} name="password" type="password" className="form-control" placeholder="Password *" />
                            </div>
                            <div className="form-group">
                                <label>Xác nhận Password:</label>
                                <input onChange={this.handleChange} name="password2" type="password" className="form-control" placeholder="Xác nhận Password *" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="birthDate">Ngày sinh*</label>
                                <input onChange={this.handleChange} name="dateOfBirth" type="date" id="birthDate" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Số điện thoại:</label>
                                <input onChange={this.handleChange} name="phone" type="phoneNumber" className="form-control" placeholder="Số điện thoại *" />
                            </div>
                            <span className="help-block">Phần có dấu * Là những phần bắt buộc điền</span>
                            Qua việc click <strong className="label label-primary">Đăng ký</strong>, bạn đã đồng ý với <a href="#" data-toggle="modal" data-target="#t_and_c_m">Điều khoản dịch vụ</a> của chúng tôi, bao gồm cả việc sử dụng Cookie.
                        </div>
                    </div>
                    <br />
                    <br />
                    <button onClick={this.registerClick} className="btn btn-primary center_button">Đăng ký</button>
                </div>

            </div>
        );
    }
}

export default Signup;