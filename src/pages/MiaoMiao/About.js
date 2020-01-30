// React Basic and Bootstrap
import React, { Component } from 'react';
import { Row, Col} from 'reactstrap';
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Credits</Popover.Title>
    <Popover.Content>
      Credits must be given to the Type1 community that have contributed to the xDrip+ Android App and Nightscout CGM in the cloud.   Their commitment for the creation of open source technology projects that enhance the lives of people with Type 1 Diabetes and those who love them is most heartfelt and admirable!
    </Popover.Content>
  </Popover>
);

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
                  <p className="text-muted para-desc mx-auto mb-0 text-justify">
                    <span className="text-primary font-weight-bold">
                    We aim to share our experience in using the Libre with MiaoMiao as a Continuous Glucose Monitoring (CGM) Device with others by getting them to experience it first hand and with guidance.
                    </span> 
                  </p>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button variant="secondary">Credits</Button>
                  </OverlayTrigger>
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