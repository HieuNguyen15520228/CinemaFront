import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Routerr from "./component/main/route";
import { BrowserRouter as withRouter } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import URL from './URL_config'
class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('token') != null) {
      var token = localStorage.getItem('token');
      axios({
        method: 'get',
        url: URL + '/api/users/checktoken',
        headers: {
          Authorization: 'bearer ' + token
        }
      })
        .then((response) => {
          this.props.dispatch(
            {
              type: 'LOG_IN',
              username: response.data.username,
              email: response.data.email,
              lastname: response.data.lastname,
              firstname: response.data.firstname,
              phone: response.data.phone,
              dateOfBirth: response.data.dateOfBirth,
              avatar: response.data.avatar,
              loginState: !this.props.loginState
            });
          console.log(this.props.loginState)
          // this.setState({ redirectToReferrer: true });
        })
        .catch((response) => {
          console.log('Get information Error ' + response);
          // localStorage.removeItem('token');
          //handle error
        });
    }
  }
  //Lấy thông tin khi refresh trang

  render() {
    return (
      <Router>
        <div className="App">
        {
          this.props.loginState ? <Header Username={this.props.username} Show="" Hidden="hidden"/>
          : <Header Show="hidden"/>

        }
          <Routerr loginState={this.props.loginState} />
          <Footer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    loginState: state.loginState,
    username: state.username
  }
}
export default connect(mapStateToProps)(App);
