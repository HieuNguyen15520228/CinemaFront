import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Sign_in from "./sign_in";
import Movie from "./movie/movie";
import Movie_comming from "./movie/movie_comingsoon";
import Slot from "./movie/slot";
import Blogmain from "./blog/blog_main";
import Home from "./home";
import User from "./user";
import Contactmain from "./contact/contact_main";
import Paymentmain from "./payment/payment_main";
import PaymentSuccess from "./payment/paymentsuccess"
import Blogtwo from "./blog/blog_page/blog_two";
import Blogone from "./blog/blog_page/blog_one";
import Combo from "./combo/combo";
import Cinema_special from "./cinema/cinema_speacial";
import Cinema from "./cinema/cinema";
import ForgotPassword from "./sub/forgot_password";
import ChangeForgotPassword from "./sub/change_forgot_password";
import ChangeNewPassword from "./sub/change_new_password";
import BookingMovie from "./movie/booking_movie";
import Movie_info_01 from "./movie/sub_movie/movie_info_01";
import Movie_info_02 from "./movie/sub_movie/movie_info_02";

import Cinema_info_01 from "./cinema/sub_cinema/cinema_info_01";
import fakeAuth from "./sub/private_route"
import { BrowserRouter as withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import History from '../main/payment/payment_sub/history'

class Routerr extends Component {
    componentWillMount() {
        console.log(this.props.loginState)
    }
    
    render() {
        {console.log(this.props.loginState)}
        return (
            <div>
                
                <Route exact path="/" component={Home} />
                <PrivateRoute loginState={this.props.loginState} path="/user" component={User} />
                <Route path="/sign_in" component={Sign_in} />
                <Route path="/forgot_pass" component={ForgotPassword} />
                <Route path="/api/users/reset/" component={ChangeForgotPassword} />


                <Route path="/combo" component={Combo} />

                <Route path="/movie_nowshowing" component={Movie} />
                <Route path="/movie_info_01" component={Movie_info_01} />
                <Route path="/movie_info_02" component={Movie_info_02} />

                <Route path="/movie_commingsoon" component={Movie_comming} />
                <Route path="/booking_movie" component={BookingMovie} />
                <PrivateRoute loginState={this.props.loginState} path="/slot" component={Slot} />

                <Route path="/cinema" component={Cinema} />
                <Route path="/cinema_info_01" component={Cinema_info_01} />
                <Route path="/cinema_speacial" component={Cinema_special} />
                <Route path="/blog" component={Blogmain} />
                <Route path="/blog_one" component={Blogone} />
                <Route path="/blog_two" component={Blogtwo} />
                <Route path="/contact" component={Contactmain} />
                <Route path="/payment-success" component={PaymentSuccess}/>
                <PrivateRoute loginState={this.props.loginState} path="/new_pass" component ={ChangeNewPassword}/>
                <PrivateRoute loginState={this.props.loginState} path="/payment" component={Paymentmain} />
                <PrivateRoute loginState={this.props.loginState} path="/history" component={History} />

            </div>
        );
    }
}


function PrivateRoute({ component: Component,loginState, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                (loginState===true) ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/sign_in",
                                state: { from: props.location }
                            }}
                        />
                    )
            }
        />
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
      loginState: state.loginState
    }
  }
export default connect(mapStateToProps, null, null, {
    pure: false,
  })(Routerr);