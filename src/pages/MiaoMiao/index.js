// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Typist from 'react-typist';

// Import images
import busi01 from '../../images/busi01.jpg';

// import generic component
import About  from './About';
import Contact from './Contact'

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

      componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);
      }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation);
     }
  
      scrollNavigation = () => {
          var doc = document.documentElement;
          var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
          if(top > 80)
          {
               document.getElementById('topnav').classList.add('nav-sticky');
          } else {
            document.getElementById('topnav').classList.remove('nav-sticky');
          }
      }

    render() {

        return (
            <React.Fragment>
                
               {/* Hero Start */}
                <section className="bg-half-170 border-bottom" id="home">
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <Row className="align-items-center">
                                    <Col lg={6} md={7}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mt-3 mb-3">
                                              <span className="element text-primary">
                                                MiaoMiao
                                                &nbsp;
                                              </span> 
                                              Trial Help Centre 
                                            </h1>
                                            <p className="para-desc text-muted">Brought to you by a fellow type 1 diabetic and her geeky Dad.</p>
                                            <div className="mt-4">
                                                <Link to="/MiaoMiao" className="btn btn-outline-primary rounded">Learn More About MiaoMiao</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <div className="position-relative">
                                            <img src={busi01} className="rounded img-fluid mx-auto d-block" alt="" />
                                            <div className="play-icon">
                                                <Link to="//vimeo.com/287684225" className="play-btn video-play-icon">
                                                    <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About */}
                <About />

                <Contact/>

            </React.Fragment>
        );
    }
}

export default Index;
