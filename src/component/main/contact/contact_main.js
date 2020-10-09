import React, {Component} from 'react';
import Map from './contact_sub/map'
import Contactmail from './contact_sub/contactmail'
import Contactifo from './contact_sub/contactinfo'

class Contactmain extends Component {
    render() {
        return (
            <div className="container">
                <Map/>

                <div className="text-center" style={{paddingTop: 20}}>
                    <div className="headdingGray"> <sup className="spainGray" style={{paddingRight: 20}}>________________</sup><i className="fa fa-heart-o" />
                        <sup className="spainGray" style={{paddingLeft: 20}}>________________</sup> </div>
                </div>

                <div className="contact_content">
                    <div className="container">
                        <div className="row">
                            <Contactmail/>
                            <Contactifo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactmain;