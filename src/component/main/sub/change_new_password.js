import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import URL from '../../../URL_config'
class change_new_pass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            newPassword: '',
            newPassword2:'',
                }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e )=> {
        this.setState({ [e.target.name]: e.target.value });
    }
    changeForgotPassClick = (e) => {
        e.preventDefault();
        // axios.defaults.headers.common['Authorization'] = 'bearer '+localStorage.getItem('token');
        console.log(this.state.password);
        console.log(this.state.newPassword);
        var token = localStorage.getItem('token');
        axios({
            method: 'put',
            url: URL+'/api/users/update/'+this.props.username,
            data: { 
                password: this.state.password,
                newPassword: this.state.newPassword,
            },
            headers: {
              Authorization: 'bearer ' + token
            }
          })
            .then((response) => {
                console.log(response);
                alert('Đã đổi mật khẩu thành công')
                    this.props.history.push({
                        pathname: "/"
                    }
                    );
            })
            .catch((response) => {
                console.log(response)
                alert('Vui lòng nhập thông tin hợp lệ')
                // this.props.history.push({
                //     pathname: "/sign_in/sign_in",
                // }
                // );
            });
    }
    render() {
        return (
            <main>
            <div className="container">
              <h3>Đổi mật khẩu</h3>
              <form action>
              <div className="form-group" style={{marginLeft: '35%'}}>
                  <label htmlFor="pwd">Mật khẩu cũ:</label>
                  <input onChange={this.handleChange} name="password" type="password" className="form-control" id="pwd" style={{width: '40%'}} placeholder="Nhập password"  />
                </div>
                <div className="form-group" style={{marginLeft: '35%'}}>
                  <label htmlFor="pwd">Mật khẩu mới:</label>
                  <input onChange={this.handleChange} name="newPassword" type="password" className="form-control" id="newpwd" style={{width: '40%'}} placeholder="Nhập password"  />
                </div>
                <div className="form-group" style={{marginLeft: '35%'}}>
                  <label htmlFor="pwd">Xác nhận password:</label>
                  <input onChange={this.handleChange} name="newPassword2" type="password" className="form-control" id="pwd2" style={{width: '40%'}} placeholder="Xác nhận password" />
                </div>
                {/* Submit*/}
                <button onClick={this.changeForgotPassClick} className="btn btn-primary" style={{marginLeft: '35%'}}>Đổi password</button>
              </form>
            </div>
          </main>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(change_new_pass);