import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterWithoutMenuLightSocialOnly extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <footer className="footer footer-bar bg-light">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-left">
                                    <p className="mb-0 text-dark"> Miao Miao Help Center. Powered by <a href="https://klementtan.com">Klement Tan</a>.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-whatsapp" title="Whatsapp"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-gmail" title="GMAIL"></i></Link></li>
                                    <li className="list-inline-item mb-0"><Link to="#" className="rounded mr-1 text-dark"><i className="mdi mdi-instagram" title="Instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterWithoutMenuLightSocialOnly;
