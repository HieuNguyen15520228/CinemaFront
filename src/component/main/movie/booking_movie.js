import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import moment from 'moment'
class BookingMovie extends Component {
    dateClick = (e, date) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                date: date
            }
        }))
    }
    timeClick = (e, time) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                time: time
            }
        }))
    }
    cinemaClick = (e, cinema) => {
        this.setState(prevState => ({
            item: {
                ...prevState.item,
                cinema
            }
        }))
    }
    constructor(props) {
        super(props);
        this.state = {
            id_index: '',
            item: {
                date:null,
                time:null,
                cinema:null
            }
        }
    }
    componentWillMount() {
        {
            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    film: localStorage.getItem('film'),
                    vTitle: localStorage.getItem('filmName'),
                    price: localStorage.getItem('price')
                }
            }));

        }
    }

    bookingClick = (e) => {
        console.log(this.state.item)
        if (this.state.item.cinema != null & this.state.item.date != null & this.state.item.time != null) {
            e.preventDefault();
            localStorage.setItem("item", JSON.stringify(this.state.item));
            localStorage.removeItem('film');
            localStorage.removeItem('filmName');
            localStorage.removeItem('price');
            // var dispatch = this.props.dispatch;
            // dispatch({
            //     type: "TEMP_ITEM",
            //     film: this.state.item.film,
            //     date: this.state.item.date,
            //     time: this.state.item.time,
            //     cinema: this.state.item.cinema
            // })
            this.props.history.push({
                pathname: '/slot'
            })
        }
        else alert('Hãy chọn thông tin muốn đặt')
    }
    getDay = (x) => {
        var t = moment().add(x, 'days').isoWeekday();
        if (t === 7)
            return 'CN'
        return 'T' + (t + 1)
    }//Lấy ngày trong tuần
    getDM = (x) => {
        return moment().add(x, 'days').format("DD/MM")
    }//Lấy Ngày/Tháng
    getDMY = (x) => {
        return moment().add(x, 'days').format().slice(0, 10);
    }//Lấy Ngày/Tháng/Năm
    getY = (x) => {
        return moment().add(x, 'days').year();
    }//Lấy năm
    render() {
        return (
            <div className="container">
                <div className="modal-header">
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="active">
                                <a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(0)))} href="#1" data-toggle="tab"><span
                                    className="f-left tab-day">{this.getDay(0)}</span> {this.getDM(0)} <br />{this.getY(0)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(1)))} href="#1" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(1)}</span> {this.getDM(1)} <br />{this.getY(1)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(2)))} href="#2" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(2)}</span> {this.getDM(2)} <br />{this.getY(2)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(3)))} href="#3" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(3)}</span> {this.getDM(3)} <br />{this.getY(3)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(4)))} href="#2" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(4)}</span> {this.getDM(4)} <br />{this.getY(4)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(5)))} href="#3" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(5)}</span> {this.getDM(5)} <br />{this.getY(5)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(6)))} href="#3" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(6)}</span> {this.getDM(6)} <br />{this.getY(6)}</a>
                            </li>
                            <li>
                                <a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(7)))} href="#1" data-toggle="tab"><span
                                    className="f-left tab-day">{this.getDay(7)}</span> {this.getDM(7)} <br />{this.getY(7)}</a>
                            </li>
                            <li><a className="tab-item" onClick={((e) => this.dateClick(e, this.getDMY(8)))} href="#1" data-toggle="tab"><span
                                className="f-left tab-day">{this.getDay(8)}</span> {this.getDM(8)} <br />{this.getY(8)}</a>
                            </li>
                        </ul>

                        <div className="tab-content ">
                            <div className="tab-pane active" id="1">
                                <h3>Không có dữ liệu tại ngày này</h3>
                            </div>
                            <div className="tab-pane" id="2">
                                <div className="mg-top-20">
                                    <ul className="nav nav-tabs tab-fix">
                                        <li className="tab-item-in"><a href="#tab_in1_1" ref="cinema1"
                                            onClick={((e) => this.cinemaClick(e, this.refs.cinema1.text))} data-toggle="tab">UIT
                                                    CINEMA BÌNH DƯƠNG</a>
                                        </li>
                                        <li className="tab-item-in"><a href="#tab_in1_2" ref="cinema2"
                                            onClick={((e) => this.cinemaClick(e, this.refs.cinema2.text))} data-toggle="tab">UIT
                                                    CINEMA THỦ ĐỨC</a>
                                        </li>
                                        <li className="tab-item-in"><a href="#tab_in1_1" ref="cinema3"
                                            onClick={((e) => this.cinemaClick(e, this.refs.cinema3.text))} data-toggle="tab">UIT
                                                    CINEMA BÌNH THẠNH</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_in1_1">
                                            <div className=" mg-top-20">
                                                <hr />
                                                <ul className="nav nav-tabs tab-fix">
                                                    <li className="tab-item-in"><a ref="time1"
                                                        onClick={((e) => this.timeClick(e, this.refs.time1.text))}
                                                        href="#tab_continues">17:00</a>
                                                    </li>
                                                    <li className="tab-item-in"><a ref="time2"
                                                        onClick={((e) => this.timeClick(e, this.refs.time2.text))}
                                                        href="#tab_continues">19:30</a>
                                                    </li>
                                                    <li className="tab-item-in"><a ref="time3"
                                                        onClick={((e) => this.timeClick(e, this.refs.time3.text))}
                                                        href="#tab_continues">21:30</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab_in1_2">
                                            <div className=" mg-top-20">
                                                <hr />
                                                <ul className="nav nav-tabs tab-fix">
                                                    <li className="tab-item-in"><a ref="time1"
                                                        onClick={((e) => this.timeClick(e, this.refs.time1.text))}
                                                        href="#tab_continues">17:00</a>
                                                    </li>
                                                    <li className="tab-item-in"><a ref="time2"
                                                        onClick={((e) => this.timeClick(e, this.refs.time2.text))}
                                                        href="#tab_continues">19:30</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="3">
                                <div className=" mg-top-20">
                                    <ul className="nav nav-tabs tab-fix">
                                        <li className="tab-item-in"><a ref="cinema1" href="#tab_in_1" ref="cinema1"
                                            onClick={((e) => this.cinemaClick(e, this.refs.cinema1.text))} data-toggle="tab">UIT CINEMA
                                                    BÌNH DƯƠNG</a>
                                        </li>
                                        <li className="tab-item-in"><a ref="cinema2" href="#tab_in_2" ref="cinema3"
                                            onClick={((e) => this.cinemaClick(e, this.refs.cinema2.text))} data-toggle="tab">UIT CINEMA
                                                    THỦ ĐỨC</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab_in_1">
                                            <div className=" mg-top-20">
                                                <hr />
                                                <ul className="nav nav-tabs tab-fix">
                                                    <li className="tab-item-in"><a ref="time1"
                                                        onClick={((e) => this.timeClick(e, this.refs.time1.text))}
                                                        href="#tab_continues">17:00</a>
                                                    </li>
                                                    <li className="tab-item-in"><a ref="time2"
                                                        onClick={((e) => this.timeClick(e, this.refs.time2.text))}
                                                        href="#tab_continues">21:30</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="tab_in_2">
                                            <div className=" mg-top-20">
                                                <hr />
                                                <ul className="nav nav-tabs tab-fix">
                                                    <li className="tab-item-in"><a ref="time1"
                                                        onClick={((e) => this.timeClick(e, this.refs.time1.text))}
                                                        href="#tab_continues">17:00</a>
                                                    </li>
                                                    <li className="tab-item-in"><a ref="time1"
                                                        onClick={((e) => this.timeClick(e, this.refs.time2.text))}
                                                        href="#tab_continues">19:30</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="mg-top-20">
                        <Link onClick={this.bookingClick} className="btn tab-button-dropdown" role="button" to>TIẾP TỤC</Link>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        tempItem: state.tempItem,
        bookingItem: state.bookingItem,
        film: state.film
    }
}
export default connect(mapStateToProps)(BookingMovie);