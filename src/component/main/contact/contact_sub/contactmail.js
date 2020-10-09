import React, {Component} from 'react';
import axios from 'axios';
import URL from '../../../../URL_config'
class Contactmail extends Component {
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            name:'',
            message:''
        }
    }
    contactClick = (e) =>{
        e.preventDefault();
        console.log(this.state);
        axios.post(URL+'/api/contact', {
            ...this.state
        })
            .then((response) => {
                console.log(response);
                alert(response.data);
            })
            .catch((response) => {
                //handle error
                alert('Có lỗi xảy ra')
            });
    }
    render() {
        return (
            <div>
                <div className="col-lg-7">
                    <h3 className="message1">Hãy để lại lời nhắn cho chúng tôi</h3>
                    <div className="message2">
                        {/* Contact Us Form */}
                        <div style={{marginTop: 30}}>
                            <form id="reply_form" action="post">
                                <div style={{width: '90%'}}>
                                    <input name="name" onChange={this.handleChange} id="contact_form_name" className="form-control contact_form_name" placeholder="Tên" required="required" data-error="Bắt buộc nhập tên" />
                                    <br />
                                    <input name="email" onChange={this.handleChange} id="contact_form_email" className="form-control contact_form_email" placeholder="Email" required="required" data-error="Bắt buộc nhập email hợp lệ" />
                                </div>
                                <br />
                                <div>
                                    <textarea onChange={this.handleChange} style={{padding: 8, width: '90%', height: 90, borderRadius: 5}} id="contact_form_message" className="text_field contact_form_message" name="message" placeholder="Message" required data-error="Please, write us a message." defaultValue={""} />
                                </div>
                                <br />
                                <div>
                                    {/* Submit*/}
                                    <button onClick={this.contactClick} id="contact_form_submit"  className="btn center_button1 btn-primary">Gửi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactmail;