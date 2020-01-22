// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

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
                                                <li><Link to="/" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
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
                                <h2 >What is MiaoMiao</h2>
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

                                {/* <p className="text-muted">Copy-paste the style <code className="text-danger font-weight-bold">&lt;link&gt;</code> into your <code className="text-danger font-weight-bold">&lt;head&gt;</code> before all other stylesheets to load Bootstrap CSS.</p> */}

                                <code className="text-success rounded p-2 bg-dark font-weight-bold">import './Apps.scss';</code><br/><br/>
                                <code className="text-success rounded p-2 bg-dark font-weight-bold">import './css/materialdesignicons.min.css';</code>

                                <h4 className="mt-4 pt-2">Installtion</h4>
                                <p className="text-muted">The zip file contains all js files integrated with Landrick, however you need to perform following steps to get node_modules etc. Make sure you have installed node and its version is greater then 9. You can simply switch your current node version using nvm (Node version manager). </p>
                                <h6 className="mt-3"><code className="text-success rounded p-2 bg-dark font-weight-bold">npm install</code></h6>
                                <p className="text-muted">To run project locally you need to run below command.</p>
                                <h6 className="mt-3"><code className="text-success rounded p-2 bg-dark font-weight-bold">npm start</code></h6>

                                <h4 className="mt-4 pt-2">Reactstrap</h4>
                                <p className="text-muted">Reactstrap provides prebuilt Bootstrap 4 components that allow a great deal of flexibility and prebuilt validation. This allows us to quickly build beautiful forms that are guaranteed to impress and provide an intuitive user experience.Import required reactstrap components within <b>src/App.js</b> file or your custom component files.</p>

                                <h4 className="mt-4 pt-2">Starter Template</h4>
                                <p className="text-muted">Next is the index.html page, located in the public folder. If you do link up any external stylesheets, or need to add bootstrap, or another feature. This is where you would add it. You can see where I’ve added bootstrap in the project here. You can also change the title here, which as you can see, I have failed to do. Other than that, you won’t usually need to touch this file very much. You will also notice the div with the id of “root”. This is where all of the content will be output. You don’t need to change that, but just know that it’s there.</p>
                               
                                <pre className="code mb-0 mt-4 font-weight-bold p-4 bg-light rounded shadow text-muted">
                                <span className="text-primary">&lt;!doctype html&gt;</span> <br />
                                    <span className="text-warning">&lt;html lang="en"&gt;</span> <br />
                                    <span className="text-danger">   &lt;head&gt;</span> <br /><br />

                                    <span className="text-danger">     &lt;meta charset="utf-8" /&gt;</span> <br />
                                    <span className="text-danger">     &lt;title&gt;</span><span className="text-primary"> Landrick - Saas & Software Landing Page Template </span><span className="text-danger">&lt;/title&gt;</span> <br />
                                    <span className="text-danger">      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;</span> <br />
                                    <span className="text-danger">      &lt;meta name="description" content="Site description" /&gt;</span> <br />
                                    <span className="text-danger">      &lt;meta name="keywords" content="Your tags" /&gt;</span> <br /> <br />

                                    <span className="text-muted">      &lt;!-- favicon icon --&gt;</span> <br />
                                    <span className="text-info">      &lt;link rel="shortcut icon" href="images/favicon.ico"&gt;</span> <br /><br />
                                    <span className="text-danger">   &lt;/head&gt;</span> <br />

                                    <span className="text-danger">   &lt;body&gt;</span> <br /><br />
                                    <span className="text-danger">   &lt;div id="root"&gt; &lt;/div&gt;</span> <br /> <br />
                                   
                                    <span className="text-danger">   &lt;/body&gt;</span> <br />
                                    <span className="text-warning">&lt;/html&gt;</span> <br />
                                </pre>

                                <h4 className="mt-4 pt-2">App.js</h4>
                                <p className="text-muted">Since we have a separate components file for each component, we can work on them separately, or divide responsibilities between different members of a team, if it is a group, rather than an individual project. Let’s briefly take a look at our App.js file</p>
                               
                                <pre className="code mb-0 mt-4 font-weight-bold p-4 bg-light rounded shadow text-muted">
                                <span className="text-danger">import React, { Component } from 'react';</span> <br />
                                <span className="text-danger">import &#123; Route, Switch, BrowserRouter as Router, withRouter &#125; from 'react-router-dom';</span> <br />
                                <span className="text-danger">import './Apps.scss';</span> <br />
                                <span className="text-danger">import routes from './routes';</span> <br />
                                <br />
                                <span className="text-danger">const Root = React.lazy(() => import('./pages/Home/indexRoot'));</span> <br />
                                <span className="text-danger">const PageComingSoon = React.lazy(() => import('./pages/PageComingSoon'));</span> <br />
                                <br />
                                <span className="text-danger">class App extends Component 	&#123;</span> <br />
                                <span className="text-danger">  render() &#123; </span> <br />
                                <span className="text-danger">    return ( </span> <br />
                                <span className="text-danger">      &#60;Router&#62;</span> <br />
                                <span className="text-danger">      &#60;Route path="/page-comingsoon" component= &#123; PageComingSoon &#125; /&#62;</span> <br />
                                <span className="text-danger">      &#60;/Router&#62;</span> <br />
                                <span className="text-danger">      );</span> <br />
                                <span className="text-danger">   &#125;</span> <br />
                                <span className="text-danger"> &#125;</span> <br />
                                <span className="text-danger">export default withRouter(App);</span> <br />
                                </pre>

                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MiaoMiao;
