import React, { Component } from 'react';
// import Sub_user from './sub/sub_user'
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import axios from 'axios';
import _ from 'lodash';
import { Link, Redirect, withRouter } from 'react-router-dom'
import URL from '../../URL_config'
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: null,
            username: ''
        }
        // npm start
    }

    // handleChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })
    //     console.log(this.state)
    // }

    handleClick = (e) => {
        e.preventDefault();

        var token = localStorage.getItem('token');
        axios({
            method: 'put',
            url: URL + '/api/users/edit/' + this.props.username,
            data: {
                avatar: this.state.avatar
            },
            headers: {
                Authorization: 'bearer ' + token

            }
        })
            .then((response) => {
                this.props.dispatch(
                    {
                        type: "CHANGE_AVATAR",
                        avatar: response.data.avatar
                    }
                )
                this.setState({ avatar: response.data })
                alert("Đã đổi ảnh đại diện thành công")
            })
            .catch((response) => {
                alert('Có lỗi xảy ra')
            });

    }

    uploadFile = (files) => {
        const image = files[0];
        const cloudname = 'dle1pivzi';
        const url = `https://api.cloudinary.com/v1_1/${cloudname}/image/upload`;
        const timestamp = Date.now() / 1000;
        const uploadPreset = 'u6ione3y';
        const paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'Cq5nbLQcnpv_YTS-JxrEnQni0PU';
        const signature = sha1(paramsStr);
        const params = {
            'api_key': '216193211179642',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
        let uploadRequest = superagent.post(url);
        uploadRequest.attach('file', image)

        Object.keys(params).map((key) => {
            uploadRequest.field(key, params[key])
        })
        uploadRequest.end((err, res) => {
            if (err) {
                console.log(err);
                return
            }
            this.setState({ avatar: res.body.url });
        })
    }
    // componentWillReceiveProps(){
    //     console.log(this.state);
    //     console.log(this.props)
    // }
    // saveClick=(e)=>{
    //     e.preventDefault();
    //     axios.post(URL+"/api/users/updateinfo",{

    //     })
    // }
    render() {
        return (
            <div className="container">
                <div>
                    <h3>Thông tin người dùng</h3>
                    <br />
                    <div className="row whiteframe" style={{ paddingTop: '30px', paddingBottom: '50px' }}>
                        <div className="center-block">
                            <div className="center-cropped profileimg">
                                <Dropzone onDrop={this.uploadFile} >
                                    < img name="avatar" onChange={this.handleChange} src={!_.isEmpty(this.state.avatar) ? this.state.avatar : this.props.avatar} />
                                </Dropzone>
                            </div>
                            <div>
                                <button id="save" onClick={this.handleClick} className="btn btn-primary buttonstyle">Lưu ảnh đại diện</button>
                            </div>
                            <br />
                            {/* <div className="center_button">
                                <label id="#bb" className="avtbutton profilebutton">Đổi ảnh đại diện
                                
                                    <input type="file" id="File" className="hideinput" size={60} />
                                </label>
                            </div> */}
                        </div>

                        <hr />
                        <div className="col-md-6 profilecol1">
                            <div>
                                <div>
                                    <h4>Họ</h4>
                                    <p name="firstname"  className="profiletext" id="firstname" >{this.props.firstname} </p>
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <h4>Tên</h4>
                                    <p className="profiletext" id="lastname" >{this.props.lastname}</p>
                                </div>

                            </div>
                            <hr />
                            <div>
                                <div>
                                    <h4>Username</h4>
                                    <p name="username"  className="profiletext" id="username" >{this.props.username}</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 profilecol1">
                            <div>
                                <div>
                                    <h4>Email</h4>
                                    <p   name="email" className="profiletext" id="email" >{this.props.email}</p>
                                </div>

                            </div>
                            <hr />
                            <div>
                                <div>
                                    <h4>Ngày sinh</h4>
                                    <p  name="dateOfBirth" className="profiletext" id="dateOfBirth" >{this.props.dateOfBirth}</p>
                                </div>

                            </div>
                            <hr />
                            <div>

                              <div>
                                    <h4>Số điện thoại</h4>
                                    <p name="phone" className="profiletext" id="phone" >{this.props.phone}</p>
                                </div>
                            </div>

                        </div>
                        
                        <div>
                            <div>
                                <Link to="/new_pass" id="chanePass" className="btn btn-primary buttonstyle">Đổi mật khẩu</Link>
                            </div>
                        </div>
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
        loginState: state.loginState,
        avatar: state.avatar
    }
}
export default (connect(mapStateToProps)(User));