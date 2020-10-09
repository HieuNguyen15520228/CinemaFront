import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container text-left footer-container">
                        <div className="row">
                            <div className="col-sm-3 footer-left">
                                <a className="na-brand" href="#"><img src="/img/index_icon.png" width="50%" alt={"none"}/></a>
                            </div>
                            <div className="col-sm-3 footer-center-content">
                                <h5 className="footer-text-head">Thông tin</h5>
                                <p className="text-white">Được thành lập năm 2018, chúng tôi có các chứng chỉ cần thiết để bạn có thể tin tưởng và
                                    đến với chúng tôi. Hãy đến với chúng tôi vì những thước phim chân thực sống động đặc sắc đến từng chi tiết đang đợi bạn</p>
                            </div>
                            <div className="col-sm-3 footer-center-link">
                                <h5 className="footer-text-head">Mở rộng</h5>
                                <div className="footer-center-link-div-first">
                                    <a className="footer-link-a" href="https://www.youtube.com">Youtube</a>
                                    <a className="footer-link-a" href="https://www.skype.com">Skype</a>
                                    <a className="footer-link-a" href="https://www.instagramr.com">Instagram</a>
                                    <a className="footer-link-a" href="https://www.viber.com">Viber</a>
                                </div>
                                <div className="footer-center-link-div-second">
                                    <a className="footer-link-a" href="https://www.facebook.com/UIT.Fanpage/">Facebook</a>
                                    <a className="footer-link-a" href="https://zalo.me/pc">Zalo</a>
                                    <a className="footer-link-a" href="https://www.google.com/">Google</a>
                                    <a className="footer-link-a" href="https://vn.yahoo.com/?p=us">Yahoo</a>
                                </div>
                            </div>
                            <div className="col-sm-3 col-xs-12 footer-right">
                                <p className="footer-right-top">Chúng tôi có một <i className="fa fa-heart-o" /> <span style={{color: 'orange'}}>ấm áp</span>
                                    , luôn đợi bạn</p>
                                <p className="copyright"> © 2018 UITC, chạm tới giấc mơ cửa bạn</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;