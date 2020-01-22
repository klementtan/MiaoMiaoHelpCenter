// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Alert } from 'reactstrap';

import bitcoin from '../../images/icon/bitcoin.svg';
import Email from '../../images/icon/Email.svg';
import location from '../../images/icon/location.svg';
import contact from '../../images/contact.png';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }  
    
    render() {
      return (
        <React.Fragment>
          <section className="bg-half bg-light">
            <div className="home-center">
              <div className="home-desc-center">
                <div className="container">
                  <Row className="justify-content-center">
                    <Col lg={12} className="text-center">
                      <div className="page-next-level">
                        <h4 className="title">Contact Us</h4>
                        <div className="container">
                          <Row>
                            <Col>
                              <div className="contact-detail text-center">
                                <div className="icon">
                                    <img src={bitcoin} alt="Landrick" />
                                </div>
                                <div className="content mt-3">
                                    <h4 className="title font-weight-bold">Phone</h4>
                                    <p className="text-muted">Contact me via Whatsapp</p>
                                    <Link to="tel:+152534-468-854" className="text-primary">+XXX XXXX</Link>
                                </div>
                              </div>
                            </Col>
                            <Col>
                              <div className="contact-detail text-center">
                                  <div className="icon">
                                      <img src={Email} alt="Landrick" />
                                  </div>
                                  <div className="content mt-3">
                                      <h4 className="title font-weight-bold">Email</h4>
                                      <p className="text-muted">Contact me via email</p>
                                      <Link to="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                                  </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
    );
    }
}

export default Contact;