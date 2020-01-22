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
                <footer className="footer footer-bar">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-left">
                                    <p className="mb-0"> Miao Miao Help Center. Powered by <a href="https://klementtan.com">Klement Tan</a>.</p>
                                </div>
                            </div>

                            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled social-icon social text-sm-right mb-0">
                                    <li className="list-inline-item mb-0"><a href="#" className="rounded mb-0"><i className="mdi mdi-whatsapp" title="Whatsapp"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="#" className="rounded mb-0"><i className="mdi mdi-gmail" title="GMAIL"></i></a></li>
                                    <li className="list-inline-item mb-0"><a href="https://www.instagram.com/type1who/" className="rounded mb-0"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
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
