// React Basic and Bootstrap
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import setUpOverview from '../../images/MiaoMiao/miaomiao-setup-overview.png';
import miaoMiaoWatch from '../../images/MiaoMiao/MiaoMiaoWatch.png';
import nightScoutSettings from '../../images/MiaoMiao/nightScoutSettings.png';
import nightScoutReport from '../../images/MiaoMiao/nightScoutReport.png';
import { Row, Col } from 'reactstrap';
import InstagramEmbed from 'react-instagram-embed';
import {Helmet} from "react-helmet";

class MiaoMiaoSetUp extends Component {

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
                                            <h4 className="title"> MiaoMiao Set-up</h4>
                                            <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
                                                <li><Link to="/" className="text-uppercase font-weight-bold text-dark">Home</Link></li>
                                                <span className="text-uppercase text-primary font-weight-bold">MiaoMiao Set-up</span>
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
                      <h2 id='what-is-miao-miao' name='what-is-miao-miao'>Overview of Setup Process</h2>
                      <img class="img-fluid mx-auto d-block" src={setUpOverview} alt="Setup overview"></img>
                      <ul className="list-group mt-4">
                        <h3>1. Put on MiaoMiao</h3>
                        <li className="list-inline-item text-muted"> 1. Fully charge the MiaoMiao until the flashing red LED light turns green.</li>
                        <li className="list-inline-item text-muted"> 2. Change to a new Libre and set up as normal.</li>
                        <li className="list-inline-item text-muted"> 3. Press the MiaoMiao reset button. Check that you see a flashing LED light.</li>
                        <li className="list-inline-item text-muted"> 4. Attach MiaoMiao onto the Libre using the adhesives.</li>
                      </ul>
                      <br/>
                      <div class="row justify-content-md-center">
                        <InstagramEmbed class="img-fluid mx-auto d-block"
                          url='https://www.instagram.com/p/BveKHgthFWl/'
                          hideCaption={true}
                          containerTagName='div'
                          protocol=''
                          injectScript
                          onLoading={() =>
                        {}}
                        onSuccess={() => {}}
                        onAfterRender={() => {}}
                        onFailure={() => {}}
                        />
                      </div>
                      <ul className="list-group mt-4">
                        <h3>The Setup Process - Android xDrip</h3>
                        <li className="list-inline-item text-muted"> 1. Click <a href="https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk">here</a> to install the xDrip+ Android app on our smartphone.</li>
                        <li className="list-inline-item text-muted"> 2. Turn off the bluetooth and then turn it back on again.</li>
                        <li className="list-inline-item text-muted"> 3. Start the xDrip+ app and follow the instruction for initial setup</li>
                        <li className="list-inline-item text-muted"> 4. Fingers crossed, you should be able to see your live BG reading on the app. If not reboot your phone and try again.</li>
                        <li className="list-inline-item text-muted"> 5. You can use additional surgical tapes or the armband to further secure MiaoMiao, especially if you are active and may lose the device.</li>
                        <li className="list-inline-item text-muted"> 6. Locked app multiple app to prevent accidentally closing it.</li>
                        <li className="list-inline-item text-muted"> 7. There are many settings that you can adjust to suit your needs.</li>
                      </ul>
                      <ul className="list-group mt-4">
                        <h5>Useful settings to review and set</h5>
                        <li className="list-inline-item text-muted"> 1. Glucose Units - High Value and Low Value: This sets the limit for displaying the chart.  BG values below Low Value are in <span class="text-danger">red</span> while those above High Value are in <span class="text-warning">orange</span></li>
                        <li className="list-inline-item text-muted"> 2. Turn off the bluetooth and then turn it back on again.</li>
                        <li className="list-inline-item text-muted"> 3. Start the xDrip+ app and follow the instruction for initial setup</li>
                        <li className="list-inline-item text-muted"> 4. Fingers crossed, you should be able to see your live BG reading on the app. If not reboot your phone and try again.</li>
                        <li className="list-inline-item text-muted"> 5. You can use additional surgical tapes or the armband to further secure MiaoMiao, especially if you are active and may lose the device.</li>
                        <li className="list-inline-item text-muted"> 6. Locked app multiple app to prevent accidentally closing it.</li>
                        <li className="list-inline-item text-muted"> 7. There are many settings that you can adjust to suit your needs.</li>
                        <li className="list-inline-item text-muted">
                          <details open="">
                            <summary>Useful settings to review and set</summary>
                            <ul id="401491dd-7097-4375-a76b-edc7468b0aee" class="toggle">
                              <li className="list-inline-item text-muted">
                                <details open="">
                                  <summary>Glucose Units</summary>
                                  <ul id="8c316841-b8e2-4a0a-935a-b3340cce5a2a" class="toggle">
                                    <li>
                                      <details open="">
                                        <summary>High Value and Low Value: This sets the limit for displaying the chart.  BG values below Low Value are in <mark class="highlight-red">Red </mark>while those above High Value are in <mark class="highlight-orange">Orange</mark></summary>
                                      </details>
                                    </li>
                                  </ul>
                                </details>
                              </li>
                            </ul>
                            <ul id="bcefba83-d2a8-40d3-99fd-19e3d09b325c" class="toggle">
                              <li className="list-inline-item text-muted">
                                <details open="">
                                  <summary>Alarms and Alerts (all alerts are an estimate of your BG, always finger prick to confirm before taking corrective actions)</summary>
                                  <ul id="42da6064-ad8c-4b8d-941e-e89051ce2b38" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>Glucose Level Alerts List: Enter to create and change alerts for High and Low BG.  </summary>
                                        <ul id="c3e4b99a-8dba-4f1a-9724-f0ea12c22a12" class="toggle">
                                          <li>
                                            <details open="">
                                              <summary>Tap on hold on existing alert to edit or tap on Create Low/High Alert</summary>
                                            </details>
                                          </li>
                                        </ul>
                                        <ul id="0bc58579-2c22-45e6-8195-f4efc4194c90" class="toggle">
                                          <li className="list-inline-item text-muted">
                                            <details open="">
                                              <summary>Set your appropriate Threshold, Time for Alert (e.g. night time only), Override phone Silent Mode (so that you will be notified even if the phone is on silient)</summary>
                                            </details>
                                          </li>
                                        </ul>
                                      </details>
                                    </li>
                                  </ul>
                                  <ul id="c009193e-cde2-404a-85a1-492752a3254d" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>Missed Reading Alert</summary>
                                        <ul id="2161d40f-5d86-4714-bca4-f639ce0ef12d" class="toggle">
                                          <li>
                                            <details open="">
                                              <summary>Enable Missed Reading Alert: so that you will be notified there is a disconnection between your phone and your Libre/MiaoMiao </summary>
                                            </details>
                                          </li>
                                        </ul>
                                      </details>
                                    </li>
                                  </ul>
                                  <ul id="86a12b24-9d3b-4773-970d-8caaf76176f8" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>Other Alerts (Huge change in BG)</summary>
                                        <ul id="0045fd14-ebb7-4da3-a909-c19cf13e2e94" class="toggle">
                                          <li className="list-inline-item text-muted">
                                            <details open="">
                                              <summary>Enable BG falling fast and BG rising fast so that you will be notified if there is huge changes in your BG </summary>
                                            </details>
                                          </li>
                                        </ul>
                                        <ul id="e8c11206-11d1-413f-8cfc-748f1ee4a503" class="toggle">
                                          <li className="list-inline-item text-muted">
                                            <details open="">
                                              <summary>Override Silent mode (so that you will be notified even if the phone is on silient)</summary>
                                            </details>
                                          </li>
                                        </ul>
                                        <p id="abb54592-a5e6-4f4a-ab1e-f62f8d63dca1" class=""></p>
                                      </details>
                                    </li>
                                  </ul>
                                  <ul id="577fcd95-a997-4c1b-bcd5-9abe9d61cae4" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>Extra Alerts  (Forecast Lows and Batter Low)</summary>
                                        <ul id="619003c6-60e0-4b16-80f5-90662e03fc1b" class="toggle">
                                          <li>
                                            <details open="">
                                              <summary>Enable Forecast Lows and Raise alarm on Forecast Low, and set Alarm at Forecast Low mins so that you will be notified when it is forecasted that you may experience low BG in xx minutes</summary>
                                            </details>
                                          </li>
                                        </ul>
                                        <ul id="79def24d-5548-453d-a9da-228913248aae" class="toggle">
                                          <li className="list-inline-item text-muted">
                                            <details open="">
                                              <summary>Enable Battery alerts so that you will be notified if MiaoMiao batttery is low</summary>
                                            </details>
                                          </li>
                                        </ul>
                                      </details>
                                    </li>
                                  </ul>
                                </details>
                              </li>
                            </ul>
                            <ul id="e9a99ae8-78d8-495a-9301-fb2f8243a089" class="toggle">
                              <li className="list-inline-item text-muted">
                                <details open="">
                                  <summary>xDrip+ Predictive Simulation Settings (to show forecast low and parameters for the predictive model)</summary>
                                  <ul id="46c38ee5-f3a6-4df1-a34d-c4d5f4396b19" class="toggle">
                                    <li>
                                      <details open="">
                                        <summary>Enable Predictive Simulations</summary>
                                      </details>
                                    </li>
                                  </ul>
                                  <ul id="dacf02fe-fb5f-47e7-ae54-ed43b1dc29e6" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>Enter in parameters for Carb Ratio, Insulin Sensitivity &amp; Carb Absorption Rate.  Consult your Endo if you are not sure. </summary>
                                      </details>
                                    </li>
                                  </ul>
                                  <ul id="f71ef0b5-a8c6-46d3-8a90-f5f8c6e9581e" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>Enable Use trend momentum so that the past BG trend is factor in the predictive calculation</summary>
                                      </details>
                                    </li>
                                  </ul>
                                  <ul id="27a0f52b-c1b1-429e-86ba-f5f0d3860e0c" class="toggle">
                                    <li className="list-inline-item text-muted">
                                      <details open="">
                                        <summary>These settings will affect the Forecast Low alerts</summary>
                                      </details>
                                    </li>
                                  </ul>
                                </details>
                              </li>
                            </ul>
                            <ul id="e77bd56d-8997-4f46-abec-dd8d754dca3c" class="toggle">
                              <li className="list-inline-item text-muted">
                                <details open="">
                                  <summary>Load / Save settings to SDcard &gt; Save All Setting so that you can easily restore them when you need to reset the app, uninstall it or change phone. </summary>
                                </details>
                              </li>
                            </ul>
                            <p id="cfd75d4b-c796-45cc-8a55-2d3bedbbd460" class=""></p>
                          </details>
                        </li>
                      </ul>
                      {/**/}
                        <h3>Sync BG On to the Cloud - Nightscout
                        </h3>
                        <ul className="list-group mt-4" >
                          <li className="list-inline-item text-muted">1. The aim of the cloud service is to host your real time and historical BG so that others can also monitor your BG and get alerts.   This can also be used as a backup of your BG data and to generate report for your Endo.  </li>
                          <li className="list-inline-item text-muted">2. This is a T1D community driven project and you can find a step by step guide <a href="http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku">here</a>.</li>
                          <li className="list-inline-item text-muted">3. You will need to setup a Github account to get the program to run the cloud BG service.</li>
                          <li className="list-inline-item text-muted">4. Then you have to create a cloud hosting account with Heroku to have a personalised website that will host your BG data.
                          <li className="list-inline-item text-muted">5. This is where you will set your preference for Target High BG, Target Low BG and alerts</li>
                          <li className="list-inline-item text-muted">6. Note down your unique website url and your secret passphrase which you will need to set up the cloud services </li></li>
                        </ul>
                        <h3>Read BG on Watch
                        </h3>
                        <p className="text-muted">
                          Go to xDrip+ Settings > Smart Watch Features > Wear Integration and turn on Android Wear integration
                        </p>
                        <p className="text-muted">
                          Install xDrip+ on your Android Watch and select it as your watch face
                        </p>
                        <img class="img-fluid mx-auto d-block w-50" src={miaoMiaoWatch} alt="Miao Miao watch"></img>
                        <br></br>
                        <h3>
                          Generate BG Report
                        </h3>
                        <p className="text-muted">When you have set up Nightscout all your BG data and notes that you have entered into the system  is stored in the cloud and you can easily request for different reports from detailed daily figures to high level trend analysis for the period of your choice.</p>
                        <p className="text-muted">Setting up online Report Generator
                        <ul className="list-group mt-4" >
                          <li className="list-inline-item text-muted">1. Go to <a href="https://nightscout-reporter.zreptil.de/">Night Scout</a></li>
                          <li className="list-inline-item text-muted">2. Click on menu icon on top left, set language by selecting US or UK flag for US/UK English</li>
                          <li className="list-inline-item text-muted">
                            3. Then click on settings and enter your 
                            <ul className="list-group mt-4" >
                              <li className="list-inline-item text-muted">  - Herokuapp site <a href="https://&lt;user&gt;.herokuapp.com">address</a></li>
                              <li className="list-inline-item text-muted">  -User token, which is your heroku secret passphrase</li>
                            </ul>
                          </li>
                          <li className="list-inline-item text-muted">Remember to update your Heroku site settings to allow the report generator to access your BG data</li>
                        </ul>
                        </p>
                        <img class="img-fluid mx-auto d-block" src={nightScoutReport} alt="Night Scout Report"></img>
                        <p></p>
                        <img class="img-fluid mx-auto d-block" src={nightScoutSettings} alt="Night Scout Settings"></img>
                        <h3>
                          Useful Resources
                        </h3>
                        <p className="text-muted"><a href="https://github.com/NightscoutFoundation/xDrip">xDrip+</a> - Resources for xDrip+ app to capture BG reading from MiaoMiao and Libre, and display it on your phone.  Contains the latest download and tech stuff if you want to geek into it.
                          <div class="indented">
                          <p className="text-muted"></p>
                          </div>
                          </p>
                          <p className="text-muted"><a href="https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk">xDrip+ download</a>
                          </p>
                          <p className="text-muted"><strong>xDrip+ Setup</strong> - Guide to connect MiaoMiao to xDrip+ app <a href="https://miaomiao.cool/pages/how-to-use-miaomiao-with-xdrip">here</a>.
                          </p>
                          <p className="text-muted"><a href="https://github.com/jamorham/xDrip-plus/blob/master/Documentation/WatchGuide.md">xDrip+ on Android SmartWatch </a>-  To setup SmartWatch, so that you can have your BG reading on your wrist. 
                          </p>
                          <p className="text-muted"><a href="http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku">Nightscout Setup </a>- To create a cloud service to host your real time and historical BG so that others can also monitor your BG and get alerts.   This can also be used as a backup of your BG data and to generate report for your Endo.
                          </p>
                          <p className="text-muted"><a href="https://nightscout-reporter.zreptil.de/">Nightscout Report Generator </a>- To create detailed charts analysis of your historical BG patterns in PDF that you can download and share with your Endo.
                          </p>
                          <p className="text-muted"><a href="https://github.com/jamorham/xDrip-plus/blob/master/Documentation/libre-fix-bt-connection-issues.md">xDrip+ Fixes </a>- Tips to fix Bluetooth Connection Issues 
                          </p>
                          <p className="text-muted"><a href="https://apps.apple.com/us/app/tomato-app/id1474342049">iPhone MiaoMiao Tomato App </a>
                          </p>
                      {/*<p className="text-muted">Copy-paste the style <code className="text-danger font-weight-bold">&lt;link&gt;</code> into your <code className="text-danger font-weight-bold">&lt;head&gt;</code> before all other stylesheets to load Bootstrap CSS.</p>
                      */}
                      </Col>
                    </Row>
                  </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MiaoMiaoSetUp;
