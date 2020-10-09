import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import URL from '../../../URL_config'
class paymentsuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: ''
        }
    }
    componentDidMount() {
        var total = parseInt(localStorage.getItem('total'));
        console.log(window.document.location)
        axios({
            method: 'post',
            data: { total: total },
            url: URL + '/api/payment/success' + window.document.location.search
        })
            .then((response) => {
                console.log(response.data);
                this.setState({ response: [...this.state.response, ...response.data] }) //another array
            })
            .catch((response) => {
                console.log(response);
            });

        var token = localStorage.getItem('token');
        console.log(this.props)
        axios({
            method: 'post',
            data: JSON.parse(localStorage.getItem('bookingList')),
            url: URL + '/api/bookings',
            headers: {
                Authorization: 'bearer ' + token
            }
        })
            .then((res) => {

            })
            .catch((res) => {
                console.log(res);
            })
        localStorage.removeItem('bookingList');
    }

    render() {
        return (
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <h3 className="center_textbox">{this.state.response}</h3>
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        film: state.film,
        cinema: state.cinema,
        date: state.date,
        time: state.time,
        seatID: state.seatID
    }
}
export default connect(mapStateToProps)(paymentsuccess);