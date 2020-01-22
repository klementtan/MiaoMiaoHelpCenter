// React Basic and Bootstrap
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class MiaoMiao extends Component {

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
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
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
                                            <h4 className="title"> MiaoMiao </h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/index-business" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <span className="text-uppercase text-primary font-weight-bold">MiaoMiao</span>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <Row>
                            <Col>
                                <h2 id='what-is-miao-miao' name='what-is-miao-miao'>What is MiaoMiao</h2>
                                <p className="text-muted">MiaoMiao is a device that is placed atop the Libre sensor. Think of the MiaoMiao as a bridge between your phone and the Libre. It is responsible for collecting BG data every few minutes from your Libre and sends it to your phone via Bluetooth.
                                Unfortunately in Singapore, there are no healthcare companies (e.g. Dexcom) that sells CGM. Therefore, the combination of MiaoMiao + Libre is the only option which enables you to enjoy the benefits of a CGM.</p>
                                <br/>

                                <h2>Why use MiaoMiao?</h2>

                                <h3 className="mt-4 pt-2">1. Type 1 Diabetes & BG Monitoring</h3>

                                <p className="text-muted">As Adam Brown accurately said, <span className="text-primary font-weight-bold">"if you don't check your blood glucose it is like you're driving your car blindfolded"</span> In his book <a href="https://brightspotsandlandmines.org/">Bright Spots and Landmines</a> he shared that blood glucose (BG) is just a number and you should use that number to indicate what to do next - for example, eat some glucose tabs or inject a unit for correction. 

                                Finger prick BG checks are the first most fundamental step in managing your diabetes, especially for Type 1 Diabetics (T1Ds) who thrive to live their lives normally doing activities that any healthy human being wants to do. 

                                To achieve this, it is important to get a feedback loop on your BG. But how? This is where Continuous Glucose Monitoring (CGM)* comes in!</p>

                                <h3 className="mt-4 pt-2">2. Libre & it's Limitation</h3>

                                <h5 className="mt-4 pt-2">What is a Libre Sensor?</h5>
                    
                                <p className="text-muted">Abbott's Freestyle Libre Sensor is a small device attached to your body and collects BG readings from your interstitial fluid. This causes a lag between actual BG and the Libre readings. (Click <a href="https://freestylelibre.com.sg/faq">here</a> to view Abbott's offcial FAQ on the Freestyle Libre)</p>
                                
                                <h5 className="mt-4 pt-2">What is a Libre Reader?</h5>
                    
                                <p className="text-muted">Abbott's Freestyle Libre Reader is a device that you can use to (a) measure finger prick tests and (b) flash the reader at the Libre sensor to receive BGL readings. You can now use your phone and download the Freestyle LibreLink App that allows you to use your phone to flash at the Libre sensor too. (Click <a href="https://freestylelibre.com.sg/faq">here</a> to view Abbott's offcial FAQ on the Freestyle Libre)</p>

                                <h5 className="mt-4 pt-2">Libre Limitations</h5>
                    
                                <p className="text-muted">Abbott's Freestyle Libre uses a Flash Glucose Monitoring (FGM) system. This means that you can receive data only when you flash the Libre Reader/phone to the sensor. In other words, if you don't flash the reader/phone you will not know what's your BG. Continue reading on about CGM vs FGM (It's super important that you know this!!)</p>
                                
                                <h3 className="mt-4 pt-2">3. 24 / 7 CGM using MiaoMiao+Libre</h3>

                                <p className="text-muted">Now you know that the Libre uses the FGM system. So how do we transform the Libre into a CGM? You guessed right - MiaoMiao.</p>

                                <h5 className="mt-4 pt-2">Word of Caution</h5>

                                <p className="text-muted">Having the CGM provide 24/7 BG data and alerts is awesome for keeping BG within target range. However, please be careful not to over-scrutinise on the data and make sure that you are not stressed out by the readings. As mentioned previously, your BG is just a number to indicate what is your next course of action. Nothing more, nothing less.</p>

                                <p className="text-muted">In reference to the Spiderman Movie: "With great power, comes great responsibility"</p>
                                

                                <p className="text-muted">You are given a powerful tool, the CGM, and it is your responsibility to do finger pricks and try to get the right mindset for it to work.</p>

                                {/* <p className="text-muted">Copy-paste the style <code className="text-danger font-weight-bold">&lt;link&gt;</code> into your <code className="text-danger font-weight-bold">&lt;head&gt;</code> before all other stylesheets to load Bootstrap CSS.</p> */}
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MiaoMiao;
