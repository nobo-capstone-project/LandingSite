import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import './About.css';
import './purpose.jpg';

class About extends Component {
    render() {
        return (
            <div className='container'>
                <h2>PURPOSE</h2>
                <MediaQuery maxDeviceWidth={768}>
                    <Row>
                        <Col xs="12">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum gravida neque a porta. Nullam fringilla, turpis id dapibus varius, orci odio venenatis purus, id sodales nibh odio quis purus. Sed diam velit, vestibulum sit amet consectetur a, faucibus non purus. Sed quis tincidunt elit. Suspendisse egestas molestie lorem, sit amet fringilla lacus consequat id. Mauris semper ullamcorper diam vitae scelerisque. Nulla dapibus eget metus id porttitor. Sed viverra tellus enim, a aliquet nisl rutrum sit amet. Donec in massa velit. Curabitur a ipsum pharetra, convallis neque et, dignissim mi. Suspendisse ac purus a dui rutrum ornare ut auctor diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non fermentum felis. Pellentesque nec ipsum ac erat imperdiet gravida quis non orci. Suspendisse finibus eros non tempor egestas.
                    </p>
                        </Col>
                        <Col xs="12">
                            <img src={require('./purpose.jpg')} alt='purpose' />
                        </Col>
                    </Row>
                </MediaQuery>
                <MediaQuery minDeviceWidth={769}>
                    <Row>
                        <Col xs="6">
                            <p>
                                Tourists often find themselves lost in a new destination, especially in the metropolitan areas where it is not as explored or culturally known to newcomers or foreigners. Communities, activities, and events are often exclusive to locals.
                            </p>
                            <p>
                                Our Solution for this common problem that these Travel Enthusiasts experience is a product called: TravelEasy. It is a website and application that aims to help tourists navigate through these "unexplored" cities and metroplitan areas.
                            </p>
                            <p>
                                In addition, we hope to implement features designed to help people with disabilities that are are often underrepresented in the tourism industry to explore the world as well!
                            </p>
                        </Col>
                        <Col xs="6">
                            <img src={require('./purpose.jpg')} alt='purpose' />
                        </Col>
                    </Row>
                </MediaQuery>
                <h2>FOUNDERS</h2>
                <Row>
                    <Col xs="6">
                        <h3>
                            <i>Rico Wang</i>
                        </h3>
                        <p>
                            Software Developer, Data Scientist
                            <br />
                            <a target="_blank" rel="noopener noreferrer" href="">
                                View More
                            </a>
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>
                            <i>Yiran Ni</i>
                        </h3>
                        <p>
                            Software Developer, UX Designer
                        <br />
                            <a target="_blank" rel="noopener noreferrer" href="http://www.yiranni.me">
                                View More
                        </a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" md="3">
                        <img src={require('./rico.jpg')} alt='rico' />
                    </Col>
                    <Col xs="6" md="3" mdOffset="3">
                        <img src={require('./yiran.png')} alt='Yiran' />
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <h3>
                            <i>Leo Wanxiang Cai</i>
                        </h3>
                        <p>
                            Software Developer
                            <br />
                            <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/leo-wanxiang-cai-161220114/">
                                View More
                            </a>
                        </p>
                    </Col>
                    <Col xs="6">
                        <h3>
                            <i>Robert Kim</i>
                        </h3>
                        <p>
                            Software Developer
                            <br />
                            <a target="_blank" rel="noopener noreferrer" href="">
                                View More
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" md="3">
                        <img src={require('./leo.jpg')} alt='Leo' />
                    </Col>
                    <Col xs="6" md="3" mdOffset="3">
                        <img src={require('./rob.jpg')} alt='Rob' />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;