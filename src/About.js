import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import './About.css';
import './purpose.jpg';

class About extends Component {
    render() {
        return (
            <div className='container'>
                
                {/* <h2>FOUNDERS</h2> */}
                <Row>
                    <Col xs="3">
                        <h4>
                            Rico Wang
                        </h4>
                        <p>
                            Software Developer, Data Scientist
                            <br />
                            <a className="viewmore" target="_blank" rel="noopener noreferrer" href="">
                                View More
                            </a>
                        </p>
                    </Col>
                    <Col xs="3">
                        <h4>
                            Yiran Ni
                        </h4>
                        <p>
                            Software Developer, UX Designer
                        <br />
                            <a className="viewmore" target="_blank" rel="noopener noreferrer" href="http://www.yiranni.me">
                                View More
                        </a>
                        </p>
                    </Col>
                    <Col xs="3">
                        <h4>
                            Leo Wanxiang Cai
                        </h4>
                        <p>
                            Software Developer
                            <br />
                            <a className="viewmore" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/leo-wanxiang-cai-161220114/">
                                View More
                            </a>
                        </p>
                    </Col>
                    <Col xs="3">
                        <h4>
                            Robert Kim
                        </h4>
                        <p>
                            Software Developer
                            <br />
                            <a className="viewmore" target="_blank" rel="noopener noreferrer" href="">
                                View More
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="3">
                        <img className="profile" src={require('./rico.jpg')} alt='rico' />
                    </Col>
                    <Col xs="3">
                        <img className="profile" src={require('./yiran.png')} alt='Yiran' />
                    </Col>
                    <Col xs="3" >
                        <img className="profile" src={require('./leo.jpg')} alt='Leo' />
                    </Col>
                    <Col xs="3">
                        <img className="profile" src={require('./rob.jpg')} alt='Rob' />
                    </Col>
                </Row>
                {/* <Row>
                    <Col xs="6">
                        <h4>
                            Leo Wanxiang Cai
                        </h4>
                        <p>
                            Software Developer
                            <br />
                            <a className="viewmore" target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/leo-wanxiang-cai-161220114/">
                                View More
                            </a>
                        </p>
                    </Col>
                    <Col xs="6">
                        <h4>
                            Robert Kim
                        </h4>
                        <p>
                            Software Developer
                            <br />
                            <a className="viewmore" target="_blank" rel="noopener noreferrer" href="">
                                View More
                            </a>
                        </p>
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col xs="6" md="3">
                        <img className="profile" src={require('./leo.jpg')} alt='Leo' />
                    </Col>
                    <Col xs="6" md="3" mdOffset="3">
                        <img className="profile" src={require('./rob.jpg')} alt='Rob' />
                    </Col>
                </Row> */}
            </div>
        )
    }
}

export default About;