import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import axios from 'axios'
import URL from '../../../URL_config'
class Slot extends Component {
    constructor(props) {
        super(props);
        this.onSeatClick = this.onSeatClick.bind(this);
        this.state = {
            seatID: '',
            seatRow: [],
            seatData: []
        }
    }

    componentDidMount() {
        axios.get(URL + '/api/seats')
            .then((res) => {
                this.setState({ seatData: [...this.state.seatData, ...res.data] }) //another array
            }
            )
            .catch((res) => { })
    }
    slotClick = (e) => {
        e.preventDefault();
        if (localStorage.getItem('bookingList') != null) {
            var bookingList = JSON.parse(localStorage.getItem('bookingList'));
            var item = JSON.parse(localStorage.getItem('item'));
            if (localStorage.getItem('seatID') != null) {
                item.seatID = localStorage.getItem('seatID')
                bookingList.push(item);
                localStorage.setItem('bookingList', JSON.stringify(bookingList))
                localStorage.removeItem('item')
                localStorage.removeItem('seatID')
                this.props.history.push('/payment')
            }
            else alert('Hãy chọn lại chỗ ngồi muốn đặt')
        }
        else {
            var bookingList = [];
            var item = JSON.parse(localStorage.getItem('item'));
            if (localStorage.getItem('seatID') != null) {
                item.seatID = localStorage.getItem('seatID')
                bookingList.push(item);
                localStorage.setItem('bookingList', JSON.stringify(bookingList))
                localStorage.removeItem('item')
                localStorage.removeItem('seatID')
                this.props.history.push('/payment')
            }
            else alert('Hãy chọn lại chỗ ngồi muốn đặt')
        }
        // this.props.dispatch({
        //     type: 'ADD_BOOKING_LIST',
        //     item:item
        // })

    }
    onSeatClick = (e) => {
        var a = document.getElementsByClassName("on");
        if (document.getElementById(e.target.id).classList.contains('on')) {
            e.target.classList.remove("on");
            e.target.classList.add("off");
            document.getElementById("slot").innerHTML = " ";
            localStorage.removeItem('seatID')

        }
        else {

            if (a.length > 0) {
                for (let i = 0; i < a.length; ++i) {
                    a[i].classList.remove("on");
                }
            }

            e.target.classList.remove("off");
            e.target.classList.add("on");
            document.getElementById("slot").innerHTML = e.target.id;
            localStorage.setItem('seatID', e.target.id)
        }

    }
    componentWillReceiveProps() {
        console.log(this.state)
    }
    render() {
        var seatRowList = [];
        return (
            <div className="container mg-top-20" >
                <div className="row">
                    <p className="slot-first">CHỌN GHẾ: <span id="slot"> </span></p>
                    <div className="slot-box">
                        <div className=" slot-container mg-top-25">
                            <button className="slot-button-left">F</button>
                            {seatRowList.length = []}
                            {
                                this.state.seatData.map((i) => {
                                    if (i.seatRow === "F") {
                                        seatRowList.push(i);
                                    }
                                    seatRowList.sort((a, b) => a.seatID - b.seatID);
                                })
                            }
                            {
                                seatRowList.map(i => {
                                    if (i.isBooked) {
                                        return <button disabled onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off disable" >{i.seatID}</button>;
                                    }
                                    return <button onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off">{i.seatID}</button>;
                                })
                            }
                            <button className="slot-button-right">F</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">E</button>
                            {seatRowList.length = []}
                            {
                                this.state.seatData.map((i) => {
                                    if (i.seatRow === "E") {
                                        seatRowList.push(i);
                                    }
                                    seatRowList.sort((a, b) => a.seatID - b.seatID);
                                })
                            }
                            {
                                seatRowList.map(i => {
                                    if (i.isBooked) {
                                        return <button disabled onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off disable" >{i.seatID}</button>;
                                    }
                                    return <button onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off">{i.seatID}</button>;
                                })
                            }
                            <button className="slot-button-right">E</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">D</button>
                            {seatRowList.length = []}
                            {
                                this.state.seatData.map((i) => {
                                    if (i.seatRow === "D") {


                                        seatRowList.push(i);
                                    }
                                    seatRowList.sort((a, b) => a.seatID - b.seatID);
                                })
                            }
                            {
                                seatRowList.map(i => {
                                    if (i.isBooked) {
                                        return <button disabled onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off disable" >{i.seatID}</button>;
                                    }
                                    return <button onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off">{i.seatID}</button>;
                                })
                            }
                            <button className="slot-button-right">D</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">C</button>
                            {seatRowList.length = []}

                            {
                                this.state.seatData.map((i) => {
                                    if (i.seatRow === "C") {


                                        seatRowList.push(i);
                                    }
                                    seatRowList.sort((a, b) => a.seatID - b.seatID);
                                })
                            }
                            {
                                seatRowList.map(i => {
                                    if (i.isBooked) {
                                        return <button disabled onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off disable" >{i.seatID}</button>;
                                    }
                                    return <button onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off">{i.seatID}</button>;
                                })
                            }
                            <button className="slot-button-right">C</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">B</button>
                            {seatRowList.length = []}
                            {
                                this.state.seatData.map((i) => {
                                    if (i.seatRow === "B") {
                                        seatRowList.push(i);
                                    }
                                    seatRowList.sort((a, b) => a.seatID - b.seatID);
                                })
                            }
                            {
                                seatRowList.map(i => {
                                    if (i.isBooked) {
                                        return <button disabled onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off disable" >{i.seatID}</button>;
                                    }
                                    return <button onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off">{i.seatID}</button>;
                                })
                            }
                            <button className="slot-button-right">B</button>
                        </div>
                        <div className=" slot-container mg-top-15">
                            <button className="slot-button-left">A</button>
                            {seatRowList.length = []}
                            {

                                this.state.seatData.map((i) => {
                                    if (i.seatRow === "A") {
                                        seatRowList.push(i);
                                    }
                                    seatRowList.sort((a, b) => a.seatID - b.seatID);
                                })
                            }
                            {
                                seatRowList.map(i => {
                                    if (i.isBooked) {
                                        return <button disabled onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off disable" >{i.seatID}</button>;
                                    }
                                    return <button onClick={this.onSeatClick.bind(this)} id={i.seatCode} className="btn_me off">{i.seatID}</button>;
                                })
                            }
                            <button className="slot-button-right">A</button>
                        </div>
                        <div className="slot-text">
                            <p>Màn hình</p>
                            <hr />
                        </div>
                    </div>
                    <div className="mg-top-20">
                        <Link onClick={this.slotClick} className="btn slot-button-final" role="button" to>TIẾP TỤC</Link>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        bookingItem: state.bookingItem,
        tempItem: state.tempItem
    }
}
export default connect(mapStateToProps)(Slot);