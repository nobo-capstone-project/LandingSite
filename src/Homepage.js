import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import './Homepage.css';
import './background.jpg';

class Homepage extends Component {
    render() {
        return (
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

                <Row>
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
        )
    }
}

export default Homepage;