// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

// Import images
import arrowBottom from '../../images/shapes/arrow-bottom.png';
import pen from '../../images/icon/pen.svg';
import video from '../../images/icon/video.svg';
import intellectual from '../../images/icon/intellectual.svg';
import user from '../../images/icon/user.svg';
import calendar from '../../images/icon/calendar.svg';
import sandClock from '../../images/icon/sand-clock.svg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <Row className="justify-content-center">
              <Col className="text-center">
                <div className="section-title mb-4 pb-2">
                  <h4 className="main-title mb-4">What We Do ?</h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    <span className="text-primary font-weight-bold">
                      We aim to share our experience in using the Libre with MiaoMiao as a Continuous Glucose Monitoring (CGM) Device with others by getting them to experience it first hand and with guidance.
                    </span> 
                  </p>
                  <p>
                    <span className="text-secondary font-weight-bold">
                      Credits must be given to the Type1 community that have contributed to the xDrip+ Android App and 
                      <a href="https://www.nightscoutfoundation.org/"> Nightscout </a> 
                      CGM in the cloud.   Their commitment for the creation of open source technology projects that enhance the lives of people with Type 1 Diabetes and those who love them is most heartfelt and admirable!                                    
                    </span> 
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;