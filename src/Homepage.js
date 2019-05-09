import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import { Flex, Box } from 'reflexbox';

import './Homepage.css';
import './background.jpg';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    {/* <h2>TravelEasy</h2> */}
                    <MediaQuery maxDeviceWidth={768}>
                        <Row>
                            <Col xs="12">
                                <img src={require('./background.jpg')} alt='background' />
                            </Col>
                        </Row>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={769}>
                        <Row>
                            <Col xs="6">

                                <h2 className="catch-line">An Application to help You Explore the Places Less Traveled.. Easily!</h2>
                                <p className="subtitle">"We aim to Develop a Collaborative Community that Generates Quality Travel Guides for all around the World. They are designed to help you explore places that can be very difficult to navigate as a Tourist or Foreigner."</p>
                            </Col>
                            <Col xs="6">
                                <img src={require('./background.jpg')} alt='background' />
                            </Col>
                        </Row>
                    </MediaQuery>

                    <div className="title-row" >
                        <Col sm="12" >
                            <h2 className="features-title">Features of this Product:</h2>
                        </Col>
                    </div>

                    <Row style={{ marginBottom: "50px" }}>
                        <Col sm="4">
                            <Card body>
                                <CardTitle>Quality Guides</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>
                                            Insider Suggestions for Recreation, Events, Restaurants, etc.
                                    </li>

                                        <li>
                                            Similar Features to AllTrails / Yelp (Bookmark, Images, Ratings).
                                    </li>

                                        <li>
                                            Detailed Routes that Seamlessly Direct to Google / Apple Maps.
                                    </li>
                                    </ul>


                                </CardText>



                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                                <CardTitle>"Open-Sourced"</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>
                                            Utilizes the large scale of users online to generate quality guides.
                                    </li>

                                        <li>
                                            Community Ranked Guides - Upvoting and Downvoting to determine quality of routes.
                                    </li>
                                    </ul>


                                </CardText>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                                <CardTitle>Accessibility</CardTitle>
                                <CardText>
                                    <ul>
                                        <li>Supports elevation and grade for people with disabilities.</li>
                                        <li>
                                            Assists and Encourages People with Disabilities to Travel the World.
                                    </li>
                                    </ul>
                                </CardText>
                            </Card>
                        </Col>
                    </Row>

                    {/* <Row>
                    <Col sm="10">
                        <Card body>
                            <CardTitle>Join Our Email List to Be Notified of the Release of this Product!</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet<br />Lorem ipsum dolor sit amet</CardText>
                        </Card>
                    </Col>

                </Row> */}
                </div >
                <div>
                    <div style={Style.space}>
                        <div className="container">
                            <div>
                                <h2 style={Style.headText}>TERN</h2>
                                <p style={Style.headText}>TravelEasy provides a efficient solution for tourists to explore
                                a new destination. Users are able to search routes basic on their current location or kew words.
                                Within each route, the app elaborately list every stop and its description. Users also can view
                                comments and votes for each route in order to choose a best fit route. Beside that, we aim to
                                develop a collaborative community, that users can edit and post new routes to the app.
                                </p>
                                <div style={Style.center}>
                                    <a href="https://github.com/nobo-capstone-project/TravelEasy">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{width: "600px", textAlign: 'center'}}>
                                <h3>EXPLORE</h3>
                                <p>Allows end users to easily brainstorm travel guides</p>
                            </div>
                            <div style={{width: "600px", textAlign: 'center'}}>
                                <h3>PLAN</h3>
                                <p>Easily plan all of the logistics of each day guide</p>
                            </div>
                            <div style={{width: "600px", textAlign: 'center'}}>
                                <h3>DO IT!</h3>
                                <p>
                                    Planned trips will be saved in
                                    the app and be utilized during
                                    the travel. Easily access the
                                    navigation to each stop.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={Style.bgc}>
                        <div className="container">
                            <h2 style={Style.headText}>Live Prototype</h2>
                            <div style={Style.gallery}>
                                <iframe width="476" height="1000" src="//invis.io/DMRNWHJ7F5E" frameborder="0" allowfullscreen></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Style = {
    headText: {
        textAlign: "center",
        paddingTop: "10px"
    },

    bgc: {
        paddingBottom: "10px"
    },
    space: {
        // paddingBottom: "20px",
        marginBottom: "50px"
    },
    gallery: {
        display: "flex",
        justifyContent: "center"
    },
    center: {
        textAlign: "center",
        width: "100%"
    }
};

export default Homepage;