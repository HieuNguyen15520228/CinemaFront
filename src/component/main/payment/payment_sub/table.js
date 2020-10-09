import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0
        }
    }
    componentWillMount() {
        // var bookingList2 = [];
        // var id = 0;
        if (localStorage.getItem('bookingList') != null) {
            JSON.parse(localStorage.getItem('bookingList')).map(i => {
                this.state.price = this.state.price + parseInt(i.price);
            })
            localStorage.setItem('total', this.state.price)
        }
     
    }
  
    render() {
        return (
            <div>
                <table className="table tablea table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Tên</th>
                            <th scope="col">Rạp</th>
                            <th scope="col">Thời gian</th>
                            <th scope="col">Số ghế</th>
                            <th scope="col">Giá</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (localStorage.getItem('bookingList') != null) ?
                                (JSON.parse(localStorage.getItem('bookingList')).map(i => {
                                    return (
                                        <tr>
                                            <td>{i.vTitle}</td>
                                            <td>{i.cinema}</td>
                                            <td>{(i.date != undefined || i.time != undefined) ? (i.date + " " + i.time) : ("")}</td>
                                            <td>{i.seatID}</td>
                                            <td>{i.price} USD</td>
                                        </tr>)
                                })) : (<tr></tr>)
                        }
                        <tr>
                            <td><b>Tổng cộng</b></td>
                            <td colSpan="4">{this.state.price} USD</td>
                        </tr>
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