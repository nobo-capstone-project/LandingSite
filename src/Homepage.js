import React, { Component } from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import './Homepage.css';
import './background.jpg';

class Homepage extends Component {
    render() {
        return (
            <div>
                <div class="intro">
                        <Row>
                            <Col xs="1"></Col>
                            <Col xs="5">

                                <h1 className="catch-line">Introduction</h1>
                                <p className="subtitle">We at Tern are committed to providing curated travel tours, making it possible for everyone and anyone to freely explore 
                                any destination and serving you a one-stop solution for all of your travel needs. In our user research, we found that aspiring travelers often find brainstorming and logistics planning 
                                for travel to be overwhelming. There are too many sources available, such as Google Reviews, Reddit, Yelp, and Airbnb, which do not have the sole purpose of 
                                “Detailed Travel Planning.” With our service, travel planning can be more enjoyable and less burdensome. In addition, once embarking the travel, you can easily access the travel itineraries 
                                and be guided to the next activities for the day.
                                </p>
                                <p>
                                    * More details at our GitHub Repository: <a href="https://github.com/nobo-capstone-project/TravelEasy">Tern GitHub</a>
                                </p>
                            </Col>
                            <Col xs="1">
                            </Col>
                            <Col xs="3">
                                <img src={require('./loading.png')} alt='background' />
                            </Col>
                        </Row>
                </div>
                <div className="sectionbreak"></div>
                <div>


                        <Row>

                            <Col xs="1"></Col>
                            <Col xs="3">
                                <img src={require('./explore.png')} alt='background' />
                            </Col>
                            <Col xs="1">
                            </Col>
                            <Col xs="6">

                                <h2 >Features</h2>
                                <Row>
                                    <Col xs="2">
                                        <img src={require('./brainstorm.png')} alt='background' />

                                    </Col>
                                    <Col xs="4">  
                                        <h3>BRAINSTROM</h3> 
                                        <p className='feature'>View posts from travelling enthusiasts around the world and get inspiration.</p>                             
                                    </Col>
                                    <Col xs="2">
                                        <img src={require('./trending.png')} alt='background' />

                                    </Col>
                                    <Col xs="4">
                                    <h3>TRENDING</h3> 
                                        <p className='feature'>Know the hottest travelling style so you never get outdated.</p>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    <Col xs="2">
                                        <img src={require('./vote.png')} alt='background' />

                                    </Col>
                                    <Col xs="4">  
                                        <h3>VOTING</h3> 
                                        <p className='feature'>Upvote for your favorites trips, and downvote for your disliked trips.</p>                             
                                    </Col>
                                    <Col xs="2">
                                        <img src={require('./credit.png')} alt='background' />

                                    </Col>
                                    <Col xs="4">
                                        <h3>CREDITS</h3> 
                                        <p className='feature'>Any behaviors count towards your credits, including posting, commenting, voting, etc.</p>
                                    </Col>
                                    
                                </Row>
                                
                                <Row>
                                    <Col xs="2">
                                        <img src={require('./follow.png')} alt='background' />

                                    </Col>
                                    <Col xs="4">  
                                        <h3>FOLLOW</h3> 
                                        <p className='feature'>Anyone can be an expert in this community as long as you are enthusiastics in travelling and sharing. Get more inspiration from following experts and friends. </p>                             
                                    </Col>
                                    <Col xs="2">
                                        <img src={require('./plan.png')} alt='background' />

                                    </Col>
                                    <Col xs="4">
                                    <h3>PLAN TRIPS</h3> 
                                        <p className='feature'>Add favored trips in your plan. Tern will send you notifications based on you needs and navigate you everywhere in the world. </p>
                                    </Col>
                                    
                                </Row>
                                
                            </Col>
                        </Row>
                </div >
                <div className="sectionbreak"></div>
                
                <div class="core">
                    <Row>
                        <Col xs="1"></Col>
                        <Col xs="10">
                        <h2>Core Screens </h2>
                        <Row>
                            <Col xs="4">
                                <Col xs="1"></Col>
                                <Col xs="10">
                                    <img className="corescreen" src={require('./corescreen1.png')} alt='coresreen1' />
                                    <img className="corescreen" src={require('./corescreen2.png')} alt='coresreen2' />
                                </Col>
                                {/* <Col xs="1"></Col> */}
                            </Col>
                            <Col xs="4">
                                <Col xs="1"></Col>
                                <Col xs="10">
                                    <div className="sectionbreak"></div>
                                    <img className="corescreen" src={require('./corescreen3.png')} alt='coresreen2' />
                                </Col>
                            </Col>
                            <Col xs="4"> 
                                <Col xs="1"></Col>
                                <Col xs="10">
                                <img className="corescreen" src={require('./corescreen4.png')} alt='coresreen4' />
                                <img className="corescreen" src={require('./corescreen5.png')} alt='coresreen5' />
                                </Col>
                            </Col>
                        </Row>
                        </Col>
                        <Col xs="2"></Col>
                    </Row>
                </div>
                <div className="sectionbreak"></div>
            
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