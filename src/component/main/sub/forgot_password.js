import React, {Component} from 'react';
import axios from 'axios'
import URL from '../../../URL_config'
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            }
            // this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) =>
    {
        this.setState({[e.target.name] : e.target.value});
    }
  
    forgotClick = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        axios.post(URL+'/api/users/forgot', {
            email:this.state.email
        })
            .then((response) => {
                alert('Hãy kiểm tra email của bạn')       
            })
            .catch((response) => {
                //handle error
                alert('Nhập thông tin hợp lệ')
                this.props.history.push({ 
                    pathname: "/sign_in/sign_in",
                  }
                );
                console.log(response);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="modal-header">
                    <h3 className="modal-title">Quên mật khẩu</h3>
                </div>
                <div className="modal-body">
                    <p>Nhập email để chúng tôi có thể gửi thư xác nhận và giúp bạn khôi phục lại mật
                        khẩu</p>

                    <div className="form-group center_textbox">
                        <label htmlFor="email">Nhập lại email:</label>
                        <input onChange={this.handleChange} type="email" className="form-control" id="email"
                               placeholder="Nhập email" name="email" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={this.forgotClick} type="button" className="btn btn-primary center_button"><a href="change_pwd.html"
                                                                         style={{color: 'white'}}>Gửi</a>
                    </button>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;