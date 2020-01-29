// React Basic and Bootstrap
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import howMiaoMiaoWorks from '../../images/MiaoMiao/how_miaomiao_works.png';
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
                                
                                <h3 className="mt-4 pt-2">4. CGM vs FGM</h3>

                                <h5 className="mt-4 pt-2">CGM: Continuous Glucose Monitoring</h5>
                                
                                <p className="text-muted">
                                  Why <span className="text-primary font-weight-bold">so chim</span> (complex)... What is CGM? To put it simply, CGM
                                  <ul className="list-group mt-4">
                                    <li className="list-inline-item text-muted"> - is a method to track glucose levels throughout the <span className="text-primary font-weight-bold">day and night</span></li>
                                    <li className="list-inline-item text-muted"> - takes glucose measurements at <span className="text-primary font-weight-bold">regular intervals, 24 hours a day.</span></li>
                                    <li className="list-inline-item text-muted"> - provides you glucose levels in <span className="text-primary font-weight-bold">real time</span> to help you make more <span className="text-primary font-weight-bold">informed decisions</span> throughout the day</li>
                                    <li className="list-inline-item text-muted"> - allows you to set high and low BG  <span className="text-primary font-weight-bold">alerts</span> </li>
                                  </ul>
                                </p>
                                <p className="text-muted">
                                  <ul className="list-group mt-4">
                                    However, we have to highlight that
                                    <li className="list-inline-item text-muted"> - CGM<span className="text-primary font-weight-bold"> does not replace</span> finger prick checks for BG</li>
                                    <li className="list-inline-item text-muted"> - data from CGM is not 100% accurate, hence you must still do regular finger prick checks</li>
                                  </ul>
                                </p>
                                <h5 className="mt-4 pt-2">FGM: Flash Glucose Monitoring</h5>

                                <p className="text-muted">
                                  <ul className="list-group mt-4">
                                  Abbott's Freestyle Libre uses the FGM system, which
                                    <li className="list-inline-item text-muted"> - shows <span className="text-primary font-weight-bold">current</span> glucose reading</li>
                                    <li className="list-inline-item text-muted"> - takes glucose measurements only when you<span className="text-primary font-weight-bold"> flash the reader</span>  to its sensor</li>
                                  </ul>
                                </p>

                                <h5 className="mt-4 pt-2">Still Confused?</h5>
                                <p className="text-muted">Take a look at this comparison table</p>
                                {/*Add table*/}

                                <h5 className="mt-4 pt-2">Here are two scenarios to better illustrate the difference</h5>
                                <p className="text-muted">In both scenarios, Amy goes for a 45 minute bicycle ride in the park. She starts off nicely at 8mmol/L before the ride.</p>

                                <h7 className="mt-4 pt-2">Scenario A:</h7>
                                <p className="text-muted">30 minutes later, she glances at her phone and sees her BG is at 4mmol/L and receives an alert that BG is dropping fast. She then decides to stop her exercise and take glucose tabs.</p>

                                <h7 className="mt-4 pt-2">Scenario B:</h7>
                                <p className="text-muted">She is happily enjoying her bicycle ride and forgets to take out her reader/phone to flash at her Libre sensor. After reaching home, she flashed her reader/phone only to realise that she has been low during the last 10 minutes of her exercise.</p>
                                
                                <p className="text-muted">In <span className="text-primary font-weight-bold">Scenario A</span> where Amy is using a <span className="text-primary font-weight-bold">CGM</span>, she is able to take necessary actions quickly to react to the fluctuations of BG <span className="text-primary font-weight-bold">while exercising</span>.</p>

                                <p className="text-muted">In <span className="text-primary font-weight-bold">Scenario B</span> where Amy is using a <span className="text-primary font-weight-bold">FGM</span>, she is unaware of her BG while exercising, and received BG data only <span className="text-primary font-weight-bold">after exercising</span>.</p>

                                <h5 className="mt-4 pt-2">TL;DR</h5>

                                <p className="text-muted">CGM offers real time 24 hour BG readings that is more advantageous than the FGM.</p>
                                
                                <h3 className="mt-4 pt-2">5. Share BG with Loved Ones</h3>

                                <p className="text-muted">To thrive as a person living with Type 1 Diabetes, we require a good solid support system. By using the CGM, your loved ones can help keep track of your BG too!</p>
                                <p>
                                  <ul className="list-group mt-4">
                                    <h5 className="mt-4 pt-2">Benefits</h5>
                                    <li className="list-inline-item text-muted"> - Your loved ones will get a peace of mind when you are out alone, or travelling overseas without them</li>
                                    <li className="list-inline-item text-muted"> - You can keep yourself accountable to your target BG range by getting loved ones involved in helping to remind and motivate you.</li>
                                    <li className="list-inline-item text-muted"> - Your loved ones can receive alerts for lows or highs anytime of the day</li>
                                    <li className="list-inline-item text-muted"> - When you are asleep (or are not very good at waking up to alarms), your loved ones can be alerted</li>
                                  </ul>
                                </p>
                                <p>
                                  <ul className="list-group mt-4">
                                    <h5 className="mt-4 pt-2">Advice</h5>
                                    <li className="list-inline-item text-muted"> - Be open to your loved ones in terms of what you would like them to help you with when managing your BG</li>
                                    <li className="list-inline-item text-muted"> - Be clear on what actions you want your loved ones to take at certain levels of BG(E.g. When I am at 5mmol/L could you remind me to eat a pack of nuts?)</li>
                                  </ul>
                                </p>
                                <h3 className="mt-4 pt-2">6. Life-saving Alerts</h3>

                                <p className="text-muted">No exaggerations, CGM alerts are truly life-saving! Momentarily when we get caught up with life, we forget about taking care of our diabetes. Alerts are most useful during sleep, when you are too occupied at work, traveling, etc. </p>
                                  <ul className="list-group mt-4">
                                    <p className="text-muted">The xDrip+ App that is used in tandem with MiaoMiao sounds off if:</p>
                                    <li className="list-inline-item text-muted"> - BG is high/low </li>
                                    <li className="list-inline-item text-muted"> - BG is rising/dropping fast</li>
                                    <li className="list-inline-item text-muted"> - low is predicted in X minutes</li>
                                  </ul>
                                <h2>How it works?</h2>
                                <img class="img-fluid mx-auto d-block" src={howMiaoMiaoWorks} alt="How Miao Miao works flow chart"></img>
                                <h2>Things you need</h2>
                                <ul className="list-group mt-4">
                                  <li className="list-inline-item text-muted"> - Abbott Freestyle Libre Sensor - preferably newly installed</li>
                                  <li className="list-inline-item text-muted"> - MiaoMiao - we will provide that together with the charger, stickers and armband</li>
                                  <li className="list-inline-item text-muted"> - Smart Phone to install app for capturing, displaying and storing BG data</li>
                                  <li className="list-inline-item text-muted"> - Android phones have more support</li>
                                  <li className="list-inline-item text-muted"> - Apple iPhone app is also available but there may be some issues</li>
                                </ul>
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
