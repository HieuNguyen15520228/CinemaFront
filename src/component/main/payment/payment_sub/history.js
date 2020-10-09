import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import URL from '../../../../URL_config'
import moment from 'moment'
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        }
    }
    componentDidMount() {
        var token = localStorage.getItem('token')
        axios({
            method: 'get',
            url: URL+'/api/bookings/history',
            headers: {
                Authorization: 'bearer ' + token
              }
        })
        .then((res)=>{
            console.log(res);
            this.setState({ data: [...this.state.data, ...res.data] });
        })
        .catch((res)=>{
            console.log(res);
        })
    }
    
    render() {
        return (
            <div className="container">
                <h3>Lịch sử thanh toán</h3>
                <table className="table tablea table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Tên</th>
                            <th scope="col">Rạp</th>
                            <th scope="col">Thời gian đặt</th>
                            <th scope="col">Số ghế</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                    {
                            this.state.data.map(i => {
                                return (
                                    <tr>
                                        <td>{i.filmName}</td>
                                        <td>{i.cinema}</td>
                                        <td>{moment(i.bookingDate).format('LL')}</td>
                                        <td>{i.seatID}</td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        bookingItem: state.bookingItem
    }
}
export default connect(mapStateToProps)(Table);