import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import URL from '../../../../URL_config'
class Method extends Component {
    constructor(props) {
        super(props);

    }

    paymentClick = (e) => {
        if (localStorage.getItem('total') != 0) {
            var token = localStorage.getItem('token');
            var total = parseInt(localStorage.getItem('total'));
            console.log(total);
            axios({
                method: 'post',
                data: { total: total },
                url: URL + '/api/payment/pay',
                headers: {
                    Authorization: 'bearer ' + token
                }
            })
                .then((res) => {
                    window.close();
                    window.open(res.data, "_blank")

                })
                .catch((res) => {
                    console.log(res)
                    alert('Lỗi')
                })
        } else alert('Hãy chọn sản phẩm')
    } 
    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h3>Chọn Phương pháp thanh toán</h3>
                    <br />
                    <select style={{ textAlign: "center" }}>
                        <option selected disabled hidden>Chọn tại đây</option>
                        <option value="CreditCard">Credit Card</option>
                        <option value="DebitCard">Debit Card</option>
                        <option value="Paypal">Paypal</option>
                        <option value="Visa">Visa</option>
                    </select>
                    <br />
                    <br />
                    <br />
                </div>
                <div className="submita">
                    {/* Thanh toan*/}
                    <button onClick={this.paymentClick} id="contact_form_submit" className="btn btn-primary" value="Submit">Thanh toán</button>
                </div>
                
                <div className="submitb">
                    {/* Mua tiep*/}
                    <Link to="/movie_nowshowing" id="contact_form_submit" className="btn btn-primary" value="Submit">Xem tiếp</Link>
                </div>
                <div className="submit h_button ">
                    {/* Lich su thanh toan*/}
                    <Link to="/history" id="contact_form_submit" className=" btn btn-primary" value="Submit">Lịch sử</Link>
                </div>
            </div>
        );
    }
}

export default Method;
