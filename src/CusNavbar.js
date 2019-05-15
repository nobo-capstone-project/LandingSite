import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CusNavbar.css';
import MediaQuery from 'react-responsive';

class CusNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
        <MediaQuery maxDeviceWidth={768}>
          <Navbar.Brand>
            <p>T</p>
          </Navbar.Brand>
        </MediaQuery>
        <MediaQuery minDeviceWidth={769}>
          <Navbar.Brand>
            <img src={require('./logo_no_background.png')} alt='logo' />
            {/* <p>TERN</p> */}
          </Navbar.Brand>
        </MediaQuery>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
          
            <NavItem eventKey={3} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default CusNavbar;