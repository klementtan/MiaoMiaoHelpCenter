// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Typist from 'react-typist';

// Import images
import busi01 from '../../images/busi01.jpg';

// import generic component
import services from '../../images/illustrator/services.svg';
import About  from './About';
import Contact from './Contact'
import Topbar from '../../components/Layout/Topbar'


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
              <Topbar/>
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
                                            <div className="mt-4 pt-2">
                                                <Link to="/MiaoMiaoInfo" className="btn btn-outline-white rounded mb-2">MiaoMiao</Link>
                                                <Link to="/MiaoMiaoSetup" className="btn btn-outline-primary rounded">Setup MiaoMiao</Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="col-lg-5 col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                          <img src={services} className="img-fluid mover" alt="" />     
                                    </div>
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
